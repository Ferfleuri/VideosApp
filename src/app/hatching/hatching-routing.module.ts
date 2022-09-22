import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HatchingPage } from './hatching.page';

const routes: Routes = [
  {
    path: '',
    component: HatchingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HatchingPageRoutingModule {}
