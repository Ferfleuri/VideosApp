import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'todo-mundo-em-panico',
    loadChildren: () => import('./todo-mundo-em-panico/todo-mundo-em-panico.module').then( m => m.TodoMundoEmPanicoPageModule)
  },  {
    path: 'nao-naoolhe',
    loadChildren: () => import('./nao-naoolhe/nao-naoolhe.module').then( m => m.NaoNaoolhePageModule)
  },
  {
    path: 'hatching',
    loadChildren: () => import('./hatching/hatching.module').then( m => m.HatchingPageModule)
  },
  {
    path: 'atraves-da-minha-janela',
    loadChildren: () => import('./atraves-da-minha-janela/atraves-da-minha-janela.module').then( m => m.AtravesDaMinhaJanelaPageModule)
  },
  {
    path: 'bird-box',
    loadChildren: () => import('./bird-box/bird-box.module').then( m => m.BirdBoxPageModule)
  },
  {
    path: 'the-silence',
    loadChildren: () => import('./the-silence/the-silence.module').then( m => m.TheSilencePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
