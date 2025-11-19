import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias3-naked125',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked125.html',
  styleUrls: ['./categorias3-naked125.css']
})
export class Categorias3Naked125 {
  motos = [
    { nombre: 'TVS Raider 125', img: 'assets/raider125categorias3naked125.png', ruta: '/categorias4-naked-raider125' },
    { nombre: 'Hero Hunk 125R', img: 'assets/herohunk125categorias3naked125.png', ruta: '/categorias4-naked-herohunk125' },
    { nombre: 'Pulsar NS 125', img: 'assets/pulsarns125categorias3naked125.png', ruta: '/categorias4-naked-pulsarns125' },
    { nombre: 'Akt CR4 125', img: 'assets/aktcr4125categorias3naked125.png', ruta: '/categorias4-naked-aktcr4125' },
    { nombre: 'Akt NKD 125', img: 'assets/aktnkd125categorias3naked125.png', ruta: '/categorias4-naked-aktnkd125' },
    { nombre: 'Pulsar N 125', img: 'assets/pulsarn125categorias3naked125.png', ruta: '/categorias4-naked-pulsarn125' }
  ];

  constructor(private router: Router) {}

  irACategoria(moto: any) {
    if (moto.ruta) {
      this.router.navigate([moto.ruta]);
    }
  }
}


