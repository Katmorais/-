import { LivroModule } from './livro/components/livro.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'livros', loadChildren:
    () => import('./livro/components/livro.module')
    .then(m => m.LivroModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
