import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HatchingPageRoutingModule } from './hatching-routing.module';

import { HatchingPage } from './hatching.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HatchingPageRoutingModule
  ],
  declarations: [HatchingPage]
})
export class HatchingPageModule {}
