import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestraComponent } from './muestra/muestra.component';
import { PruebaComponent } from './prueba/prueba.component';
//
//MUY IMPORTANTE ESTO DE PATH DE MUESTRA Y DE PRUEBA SI NO FUNCIONA LO QUE ES EL LLAMDO DESDE OTRO INDEX
const routes: Routes = [
  {
    path: "muestra",
    component:MuestraComponent
  },
  {
    path:"prueba",
    component:PruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
