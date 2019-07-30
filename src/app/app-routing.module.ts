import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { GraficoComponent } from './grafico/grafico.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "grafico",
    component: GraficoComponent
  },
  {
    path: "lista",
    component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
