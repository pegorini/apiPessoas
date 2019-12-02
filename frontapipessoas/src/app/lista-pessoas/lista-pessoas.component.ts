import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoasService } from "./../pessoas.service";
import { Pessoa } from "./../pessoa";
import { Observable } from "rxjs";

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoasService,
      private router: Router) {}


  ngOnInit() {

    this.reloadData();
  }

  reloadData() {

      this.pessoas = this.pessoaService.getPessoasList();
      console.log(this.pessoas);
    }

    deletePessoa(id: number) {
        this.pessoaService.deletePessoa(id)
          .subscribe(
            data => {
              this.reloadData();
            },
            error => console.log(error));
      }

      updatePessoa(id: number){
          this.router.navigate(['update', id]);
        }
}
