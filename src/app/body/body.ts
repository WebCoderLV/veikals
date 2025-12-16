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
      { nosaukums: "Piens", cena: 1.2, check: false },
      { nosaukums: "Maize", cena: 0.8, check: false },
      { nosaukums: "Olas", cena: 2.5, check: false },
    ]
  });

  preceForm = form<DaudzPrecesT>(this.preces);

  nolasit(n: number) {
    console.log(this.preceForm.precesMasivs[n].check().value());
  }
}
