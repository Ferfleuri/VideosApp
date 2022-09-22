import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtravesDaMinhaJanelaPage } from './atraves-da-minha-janela.page';

const routes: Routes = [
  {
    path: '',
    component: AtravesDaMinhaJanelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtravesDaMinhaJanelaPageRoutingModule {}
