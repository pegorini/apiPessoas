import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { AdicionarPessoasComponent } from  './adicionar-pessoas/adicionar-pessoas.component';
import { AtualizaPessoasComponent } from './atualiza-pessoas/atualiza-pessoas.component';

const routes: Routes = [

    { path: 'pessoas', component: ListaPessoasComponent },
    { path: 'adicionar', component: AdicionarPessoasComponent },
    { path: 'update/:id', component: AtualizaPessoasComponent },
    { path: '', redirectTo: '/pessoas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
