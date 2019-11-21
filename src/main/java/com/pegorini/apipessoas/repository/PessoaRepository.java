package com.pegorini.apipessoas.repository;

import com.pegorini.apipessoas.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends JpaRepository <Pessoa,Long> {

    Pessoa findByCpf(@Param("cpf") String cpf);

}
