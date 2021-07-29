package com.vw.fleetslpservice.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.vw.fleetslpservice.entity.ImportToken;

public interface ImportTokenRepository extends JpaRepository<ImportToken, String> {

}
