import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private baseURL: string =  'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseURL}/livros`);
  }

  salvar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(`${this.baseURL}/livros`, livro);
  }
}
