import { Component, input } from '@angular/core';
import { PreceT } from '../models/produktuModelis';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  counter = input<PreceT[]>([]);

}
