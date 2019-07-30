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

  constructor() { }

getLenguajes(): Observable<Lenguaje[]> {
  return of(this.Lenguajes);
}

}
