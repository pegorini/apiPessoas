import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoasService } from "./../pessoas.service";
import { Pessoa } from "./../pessoa";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-adicionar-pessoas',
  templateUrl: './adicionar-pessoas.component.html',
  styleUrls: ['./adicionar-pessoas.component.scss']
})


export class AdicionarPessoasComponent implements OnInit {

    loginForm: FormGroup;
    isSubmitted  =  false;
    errorMessage = "";
    pessoa: Pessoa = new Pessoa();
    submitted = false;

    constructor(private formBuilder: FormBuilder, private pessoaService: PessoasService,
      private router: Router) { }

  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
      this.loginForm  =  this.formBuilder.group({
          nome: ['', Validators.required],
          cpf: ['', Validators.required],
          sexo: ['', ],
          nacionalidade:['', ],
          naturalidade:['', ],
          dataNascimento:['', Validators.required ],
          email:['', ]
      });
  }


  newPessoa(): void {
      this.submitted = false;
      this.pessoa = new Pessoa();
    }

    save() {
      this.pessoaService.createPessoa(this.pessoa)
        .subscribe(
          data => {
            this.pessoa = new Pessoa();
            this.gotoList();
          },
          error => {
               this.errorMessage = error.error.message;                   //segundo retorno

          }
          );

    }

    onSubmit() {
          this.isSubmitted = true;
          if(this.loginForm.invalid){
            return;
          }
      this.save();
    }



    gotoList() {
      this.router.navigate(['/pessoas']);
    }
}
