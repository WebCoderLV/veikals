import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [DecimalPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  grozs = input<number>(0);

}
