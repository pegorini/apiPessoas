package com.pegorini.apipessoas.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/source")
public class SourceController {

    @GetMapping
    public String urlProjeto(){
        String urlGithub = "https://github.com/pegorini/apiPessoas";
        return urlGithub;
    }
}
