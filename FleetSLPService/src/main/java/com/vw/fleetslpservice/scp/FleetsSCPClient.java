package com.vw.fleetslpservice.scp;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

import java.io.*;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FleetsSCPClient {
	
	private static final Logger LOG = LoggerFactory.getLogger(FleetsSCPClient.class);
	
	@Value("${rsa.file.path}")
	private String rsaFilePath;
	
	@Value("${rsa.file.passphrase}")
	private String rsaPassphrase;
	
	@Value("${file.timeout}")
	private int timeout;
	
	@Value("${remote.host}")
	private String remoteHost;
	
	@Value("${remote.username}")
	private String remoteUser;
	
	@Value("${remote.file.path}")
	private String remoteFilePath;

    @Value("${remote.original.file.path}")
    private String remoteOriginalFilePath;



	@PostConstruct
    public void init() {
        LOG.debug("rsaFilePath {}, rsaPassphrase {}, timeout {}, remoteHost {}, remoteUser {}, remoteFilePath {}, remoteOriginalFilePath{}", rsaFilePath,rsaPassphrase,timeout,remoteHost,remoteUser,remoteFilePath,remoteOriginalFilePath);
    }
	
	public FleetsSCPClient() {
		
	}

	public void uploadFile(String fileToUpload) throws JSchException, IOException {
		SSHManager instance = null;
		
		try {
			
			instance = new SSHManager(remoteUser, remoteHost, 22, rsaFilePath, rsaPassphrase, timeout);
            Session jschSession = instance.connect();
            copyLocalToRemote(jschSession, fileToUpload, remoteFilePath, "");
            
		}
		finally {
			instance.close();
		}
	}

    public void uploadOriginalFile(String directoryName, String fileToUpload) throws JSchException, IOException {
        SSHManager instance = null;

        try {

            instance = new SSHManager(remoteUser, remoteHost, 22, rsaFilePath, rsaPassphrase, timeout);
            Session jschSession = instance.connect();

            String remoteDirectoryPath = "\"" +remoteOriginalFilePath + directoryName +"\"";
            String chainCommand = "sudo mkdir " + remoteDirectoryPath + " && ";
            String changeOwnerShipCommand = "sudo chown -R siebel:siebel ";
            copyLocalToRemote(jschSession, fileToUpload, remoteDirectoryPath,chainCommand);
            runCommand(jschSession,remoteOriginalFilePath,changeOwnerShipCommand);

        }
        finally {
            instance.close();
        }
    }

    public void runCommand(Session session,String remoteDirectoryPath,String command){
        String fullCommand = command + remoteDirectoryPath;
        Channel channel = null;
        try {
            channel = session.openChannel("exec");
            ((ChannelExec) channel).setCommand(fullCommand);
            channel.connect();
        } catch (JSchException e) {
            e.printStackTrace();
            return;
        }
        channel.disconnect();
    }

    private void createTempOriginalDirectory(Session session, String remoteDirectoryPath) throws JSchException, IOException {
        String command = "sudo mkdir " + remoteDirectoryPath;
        //System.out.println(command);
        Channel channel = session.openChannel("exec");
        ((ChannelExec) channel).setCommand(command);
        channel.connect();
        channel.disconnect();
    }


        private void copyLocalToRemote(Session session, String from, String to, String firstCommandInChain) throws JSchException, IOException {
        boolean ptimestamp = true;

        // exec 'scp -t rfile' remotely
        String command =  firstCommandInChain +  " sudo scp " + (ptimestamp ? "-p" : "") + " -t " + to;
        Channel channel = session.openChannel("exec");
        ((ChannelExec) channel).setCommand(command);

        // get I/O streams for remote scp
        OutputStream out = channel.getOutputStream();
        InputStream in = channel.getInputStream();

        channel.connect();

        if (checkAck(in) != 0) {
            System.exit(0);
        }

        File _lfile = new File(from);

        if (ptimestamp) {
            command = "T" + (_lfile.lastModified() / 1000) + " 0";
            // The access time should be sent here,
            // but it is not accessible with JavaAPI ;-<
            command += (" " + (_lfile.lastModified() / 1000) + " 0\n");
            out.write(command.getBytes());
            out.flush();
            if (checkAck(in) != 0) {
                System.exit(0);
            }
        }

        // send "C0644 filesize filename", where filename should not include '/'
        long filesize = _lfile.length();
        command = "C0644 " + filesize + " ";
        if (from.lastIndexOf('/') > 0) {
            command += from.substring(from.lastIndexOf('/') + 1);
        } else {
            command += from;
        }

        command += "\n";
        out.write(command.getBytes());
        out.flush();

        if (checkAck(in) != 0) {
            System.exit(0);
        }

        // send a content of lfile
        FileInputStream fis = new FileInputStream(from);
        byte[] buf = new byte[1024];
        while (true) {
            int len = fis.read(buf, 0, buf.length);
            if (len <= 0) break;
            out.write(buf, 0, len); //out.flush();
        }

        // send '\0'
        buf[0] = 0;
        out.write(buf, 0, 1);
        out.flush();

        if (checkAck(in) != 0) {
            System.exit(0);
        }
        out.close();

        try {
            if (fis != null) fis.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        channel.disconnect();
    }

    public static int checkAck(InputStream in) throws IOException {
        int b = in.read();
        // b may be 0 for success,
        //          1 for error,
        //          2 for fatal error,
        //         -1
        if (b == 0) return b;
        if (b == -1) return b;

        if (b == 1 || b == 2) {
            StringBuffer sb = new StringBuffer();
            int c;
            do {
                c = in.read();
                sb.append((char) c);
            }
            while (c != '\n');
            if (b == 1) { // error
                LOG.error("ERROR in checkAck 1, " + sb.toString());
            }
            if (b == 2) { // fatal error
            	LOG.error("ERROR in checkAck 2 " + sb.toString());
            }
        }
        return b;
    }
}