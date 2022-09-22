import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheSilencePage } from './the-silence.page';

const routes: Routes = [
  {
    path: '',
    component: TheSilencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheSilencePageRoutingModule {}
