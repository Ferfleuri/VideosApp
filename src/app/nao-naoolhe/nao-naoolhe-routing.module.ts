import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoNaoolhePage } from './nao-naoolhe.page';

const routes: Routes = [
  {
    path: '',
    component: NaoNaoolhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaoNaoolhePageRoutingModule {}
