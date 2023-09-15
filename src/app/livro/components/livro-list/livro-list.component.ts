import { Component, OnInit } from '@angular/core';
import { Livro } from '../../../model/livro.model';
import { LivroService } from '../../../services/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {

  tableColumns: string[] = ['id-column', 'nome-column', 'autor-column'];
  livros: Livro[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.getLivros().subscribe(data => {
      this.livros = data;
    });
  }

}
