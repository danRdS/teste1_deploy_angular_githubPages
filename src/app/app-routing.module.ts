import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegundaPaginaComponent } from './components/segunda-pagina/segunda-pagina.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  { path: 'segunda_pagina', component: SegundaPaginaComponent, title: 'Segunda Página'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
