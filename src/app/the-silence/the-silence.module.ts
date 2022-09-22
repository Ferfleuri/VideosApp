import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheSilencePageRoutingModule } from './the-silence-routing.module';

import { TheSilencePage } from './the-silence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheSilencePageRoutingModule
  ],
  declarations: [TheSilencePage]
})
export class TheSilencePageModule {}
