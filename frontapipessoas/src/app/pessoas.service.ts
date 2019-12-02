import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private UrlApi = 'http://localhost:4200/api/pessoas';

  constructor(private http: HttpClient) { }

  getPessoasList(): Observable<any> {
      const headers = new Headers();
          headers.append("Authorization", "Basic " + btoa("admin:admin"));
      return this.http.get(`${this.UrlApi}`);
  }

  deletePessoa(id: number): Observable<any> {
      return this.http.delete(`${this.UrlApi}/${id}`, { responseType: 'text' });
  }

  getPessoa(id: number): Observable<any> {
      return this.http.get(`${this.UrlApi}/${id}`);
  }

  createPessoa(pessoas: Object): Observable<Object> {
    return this.http.post(`${this.UrlApi}`, pessoas);
  }

  updatePessoa(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.UrlApi}/${id}`, value);
  }
}
