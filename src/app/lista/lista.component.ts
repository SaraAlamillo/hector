import { Component, OnInit } from '@angular/core';
import { Lenguaje } from "../lenguaje";
import { LenguajeService } from "../lenguaje.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  Lenguajes: Lenguaje[];
  selectedLenguaje: Lenguaje;

  constructor(private LenguajeService: LenguajeService) { }

  ngOnInit() {
    this.getLenguajes();
  }

  getLenguajes(): void {
    this.LenguajeService.getLenguajes().subscribe(Lenguajes => this.Lenguajes = Lenguajes);
  }

  onSelect(L: Lenguaje): void {
    this.selectedLenguaje = L;
  }

  add(Name: string): void {
    this.LenguajeService.add(Name);
  }

  delete(ID: number): void {
    this.LenguajeService.delete(ID);
  }

}
