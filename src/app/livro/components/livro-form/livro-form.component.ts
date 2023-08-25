import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private livroService: LivroService,
              private router: Router) {
    this.formGroup = formBuilder.group({
      nome:['', Validators.required],
      autor:['', Validators.required]
    })
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const novoLivro = this.formGroup.value;
      this.livroService.salvar(novoLivro).subscribe({
        next: (livroCadastrado) => {
          this.router.navigateByUrl('/livros/list');
        },
        error: (err) => {
          console.log('Erro ao salvar' + JSON.stringify(err));
        }
      })

    }
  }

}
