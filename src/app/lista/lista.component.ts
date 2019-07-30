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
  LastId: number = 3; 

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
    this.LastId += 1;
    this.Lenguajes.push({ id: this.LastId, name: Name });
  }

  delete(ID: number): void {
    this.Lenguajes.forEach((item, index) => {
      if (item.id == ID) {
        this.Lenguajes.splice(index, 1);
      }
    });
  }

}
