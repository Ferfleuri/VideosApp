import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirdBoxPageRoutingModule } from './bird-box-routing.module';

import { BirdBoxPage } from './bird-box.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirdBoxPageRoutingModule
  ],
  declarations: [BirdBoxPage]
})
export class BirdBoxPageModule {}
