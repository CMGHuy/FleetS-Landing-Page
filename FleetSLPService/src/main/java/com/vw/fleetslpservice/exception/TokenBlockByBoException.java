package com.vw.fleetslpservice.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.LOCKED, reason = "Invalid Token details.")
public class TokenBlockByBoException extends Exception
{

    private static final long serialVersionUID = -5447056616682511744L;

    public TokenBlockByBoException(String message)
    {
        super(message);
    }

}
