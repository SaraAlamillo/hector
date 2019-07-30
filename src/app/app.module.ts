import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { HomeComponent } from './home/home.component';
import { GraficoComponent } from './grafico/grafico.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ContenidoComponent,
    HomeComponent,
    GraficoComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
