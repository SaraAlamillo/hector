import { Component, OnInit } from '@angular/core';
import { Lenguaje } from "../lenguaje";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  Lenguajes: Lenguaje[] = [
    { id: 0, name: "JavaScript" },
    { id: 1, name: "PHP" },
    { id: 2, name: "C#" },
    { id: 3, name: "Delphi" }
  ];
  selectedLenguaje: Lenguaje;
  LastId: number = 3; 

  constructor() { }

  ngOnInit() {
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
