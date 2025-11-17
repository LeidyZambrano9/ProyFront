import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-categorias3-naked125',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked125.html',
  styleUrls: ['./categorias3-naked125.css']
})
export class Categorias3Naked125 {
  motos = [
    { nombre: 'TVS Raider 125', img: 'assets/raider125categorias3naked125.png' },
    { nombre: 'Hero Hunk 125R', img: 'assets/herohunk125categorias3naked125.png' },
    { nombre: 'Pulsar NS 125', img: 'assets/pulsarns125categorias3naked125.png', isApache: true },
    { nombre: 'Akt CR4 125', img: 'assets/aktcr4125categorias3naked125.png' },
    { nombre: 'Akt NKD 125', img: 'assets/aktnkd125categorias3naked125.png' },
    { nombre: 'Pulsar N 125', img: 'assets/pulsarn125categorias3naked125.png' }
  ];
}