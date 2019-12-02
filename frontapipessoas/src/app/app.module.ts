import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { AdicionarPessoasComponent } from './adicionar-pessoas/adicionar-pessoas.component';
import { AtualizaPessoasComponent } from './atualiza-pessoas/atualiza-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoasComponent,
    AdicionarPessoasComponent,
    AtualizaPessoasComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
