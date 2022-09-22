import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirdBoxPage } from './bird-box.page';

const routes: Routes = [
  {
    path: '',
    component: BirdBoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirdBoxPageRoutingModule {}
