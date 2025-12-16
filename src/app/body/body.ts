import { Component, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { Header } from "../header/header";
import { DaudzPrecesT } from '../models/produktuModelis';

@Component({
  selector: 'app-body',
  imports: [Header, Field],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

  preces = signal<DaudzPrecesT>({
    veikals: "Mans Veikals",
    precesMasivs: [
      { nosaukums: "Piens", cena: 1.2, daudzums : 0 },
      { nosaukums: "Maize", cena: 0.8, daudzums : 0 },
      { nosaukums: "Olas", cena: 2.5, daudzums : 0 },
    ]
  });

  grozaVertiba = signal<number>(0);


preceForm = form<DaudzPrecesT>(this.preces);

nolasit(n: number) {
  this.grozaVertiba.update((p) => {
    
    return p + this.preceForm.precesMasivs[n].cena().value() * this.preceForm.precesMasivs[n].daudzums().value();
  }

  )};
}

