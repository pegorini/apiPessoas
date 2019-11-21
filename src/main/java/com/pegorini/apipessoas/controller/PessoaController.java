package com.pegorini.apipessoas.controller;

import com.pegorini.apipessoas.model.Pessoa;
import com.pegorini.apipessoas.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.*;


@RestController
@RequestMapping("/pessoas")
public class PessoaController {

    @Autowired
    PessoaRepository pessoaRepository;

    @PostMapping(consumes = "Application/json")
    public ResponseEntity cadastrarPessoa(@RequestBody @Valid Pessoa pessoa){
        pessoa.setDataCadastro(LocalDateTime.now());
        Pessoa validaCpf = pessoaRepository.findByCpf(pessoa.getCpf());

        if (validaCpf != null) {
            Map response = new HashMap();
            response.put("Erro","CPF já cadastrado na base");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        Pessoa pessoacadastrada = pessoaRepository.save(pessoa);
        return ResponseEntity.status(HttpStatus.CREATED).body(pessoacadastrada);
    }



    @GetMapping
    public ResponseEntity<List<Pessoa>> listaPessoas(){

        return ResponseEntity.ok().body(pessoaRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pessoa> listaPessoasPorId(@PathVariable long id){

        return ResponseEntity.ok().body(pessoaRepository.findById(id).get());
    }

    @DeleteMapping("/{id}")
    public void excluirPessoa(@PathVariable long id){
        pessoaRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pessoa> atualizarPessoa(@RequestBody @Valid Pessoa pessoa,@PathVariable long id){
        Optional<Pessoa> pessoaCadastrada = pessoaRepository.findById(id);

        if (!((Optional) pessoaCadastrada).isPresent())
            return ResponseEntity.notFound().build();

        pessoa.setId(id);
        pessoa.setDataAtualizacao(LocalDateTime.now());
        pessoaRepository.save(pessoa);

        return ResponseEntity.accepted().body(pessoa);
    }
}
