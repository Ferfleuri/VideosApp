import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoMundoEmPanicoPage } from './todo-mundo-em-panico.page';

const routes: Routes = [
  {
    path: '',
    component: TodoMundoEmPanicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoMundoEmPanicoPageRoutingModule {}
