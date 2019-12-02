import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { PessoasService } from "./../pessoas.service";
import { Pessoa } from "./../pessoa";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atualiza-pessoas',
  templateUrl: './atualiza-pessoas.component.html',
  styleUrls: ['./atualiza-pessoas.component.css']
})
export class AtualizaPessoasComponent implements OnInit {

  id: number;
  pessoa: Pessoa;
  loginForm: FormGroup;
  isSubmitted  =  false;
  mostraErro = false;
  errorMessage = "";
  submitted = false;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,
                  private pessoaService: PessoasService) { }

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
    this.pessoa = new Pessoa();
    this.id = this.route.snapshot.params['id'];

    this.pessoaService.getPessoa(this.id)
          .subscribe(data => {
            this.pessoa = data;
            this.gotoList();
          }, error => {
               this.errorMessage = error.error.message;

          });
    }


  updatePessoa() {
      this.pessoaService.updatePessoa(this.id, this.pessoa)
        .subscribe(
                  data => {
                    this.pessoa = new Pessoa();
                    this.gotoList();
                  },
                  error => {
                       this.mostraErro = true;
                       this.errorMessage = error.error.message;                   //segundo retorno

                  }
                  );

    }

    onSubmit() {
                  this.isSubmitted = true;
                  if(this.loginForm.invalid){
                    return;
                  }
        this.updatePessoa();
      }

      gotoList() {
        this.router.navigate(['/pessoas']);
      }

}
