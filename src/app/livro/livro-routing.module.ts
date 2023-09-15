import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroFormComponent } from './components/livro-form/livro-form.component';
import { LivroListComponent } from './components/livro-list/livro-list.component';

const routes: Routes = [
  {path: 'list', component: LivroListComponent},
  {path: 'new', component: LivroFormComponent},
  {path: 'edit/:id', component: LivroFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }
