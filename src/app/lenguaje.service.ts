import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Lenguaje } from "./lenguaje";

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  Lenguajes: Lenguaje[] = [
    { id: 0, name: "JavaScript" },
    { id: 1, name: "PHP" },
    { id: 2, name: "C#" },
    { id: 3, name: "Delphi" }
  ];

  LastId: number = 3;

  constructor() { }

  getLenguajes(): Observable<Lenguaje[]> {
    return of(this.Lenguajes);
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
