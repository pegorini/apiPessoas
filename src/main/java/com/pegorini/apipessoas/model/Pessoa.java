package com.pegorini.apipessoas.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank (message = "Nome não pode ser em branco")
    private String nome;

    private String sexo;

    @NotBlank (message = " Cpf não pode ser em branco")
    @CPF (message = "cpf inválido")
    private String cpf;

    @Email (message = "email inválido")
    private String email;

    @NotNull(message = "Data não pode ser em branco")
    @JsonFormat(pattern="dd/MM/yyyy")
    @DateTimeFormat(pattern="dd/MM/yyyy")
    @Past(message = "Data inválida")
    private Date  dataNascimento;
    private String naturalidade;
    private String nacionalidade;
    private LocalDateTime dataCadastro;
    private LocalDateTime dataAtualizacao;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }


    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getNaturalidade() {
        return naturalidade;
    }

    public void setNaturalidade(String naturalidade) {
        this.naturalidade = naturalidade;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDateTime dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public LocalDateTime getDataAtualizacao() {
        return dataAtualizacao;
    }

    public void setDataAtualizacao(LocalDateTime dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sexo='" + sexo + '\'' +
                ", cpf='" + cpf + '\'' +
                ", email='" + email + '\'' +
                ", dataNascimento=" + dataNascimento +
                ", naturalidade='" + naturalidade + '\'' +
                ", nacionalidade='" + nacionalidade + '\'' +
                ", dataCadastro=" + dataCadastro +
                ", dataAtualizacao=" + dataAtualizacao +
                '}';
    }
}
