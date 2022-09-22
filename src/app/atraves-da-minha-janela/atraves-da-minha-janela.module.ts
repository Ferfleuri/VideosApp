import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtravesDaMinhaJanelaPageRoutingModule } from './atraves-da-minha-janela-routing.module';

import { AtravesDaMinhaJanelaPage } from './atraves-da-minha-janela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtravesDaMinhaJanelaPageRoutingModule
  ],
  declarations: [AtravesDaMinhaJanelaPage]
})
export class AtravesDaMinhaJanelaPageModule {}
