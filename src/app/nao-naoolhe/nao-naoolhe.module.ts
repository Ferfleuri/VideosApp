import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaoNaoolhePageRoutingModule } from './nao-naoolhe-routing.module';

import { NaoNaoolhePage } from './nao-naoolhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaoNaoolhePageRoutingModule
  ],
  declarations: [NaoNaoolhePage]
})
export class NaoNaoolhePageModule {}
