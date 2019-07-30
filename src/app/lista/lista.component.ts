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

  constructor() { }

  ngOnInit() {
  }

  
  onSelect(L: Lenguaje): void {
    this.selectedLenguaje = L;
  }

}
