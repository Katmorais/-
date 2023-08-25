import { LivroService } from 'src/app/livro/services/livro.service';
import { Livro } from 'src/app/livro/models/livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.getLivros().subscribe(data => {
      this.livros = data;
    });
  }

}
