import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoMundoEmPanicoPageRoutingModule } from './todo-mundo-em-panico-routing.module';

import { TodoMundoEmPanicoPage } from './todo-mundo-em-panico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoMundoEmPanicoPageRoutingModule
  ],
  declarations: [TodoMundoEmPanicoPage]
})
export class TodoMundoEmPanicoPageModule {}
