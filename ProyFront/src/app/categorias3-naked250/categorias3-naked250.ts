import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-categorias3-naked250',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked250.html',
  styleUrls: ['./categorias3-naked250.css']
})
export class Categorias3Naked250 {
  motos = [
    { nombre: 'KTM Duke 250', img: 'assets/ktmduke250categorias3naked250.png', ruta: '/categorias4-naked-duke250' },
    { nombre: 'Pulsar N 250', img: 'assets/pulsarn250categorias3naked250.png', ruta: '/categorias4-naked-pulsarn250' },
    { nombre: 'Gixxer 250', img: 'assets/gixxer250categorias3naked250.png', ruta: '/categorias4-naked-gixxer250' },
    { nombre: 'CF Moto NK 250', img: 'assets/cfnk250categorias3naked250.png', ruta: '/categorias4-naked-cfmotonk250' },
    { nombre: 'Yamaha FZ 250', img: 'assets/yamahafz250categorias3naked250.png', ruta: '/categorias4-naked-yamahafz250' },
    { nombre: 'Akt 250 R', img: 'assets/akt250rcategorias3naked250.png', ruta: '/categorias4-naked-akt250' },
  ];

  constructor(private router: Router) {}

  irACategoria(moto: any) {
    if (moto.ruta) {
      this.router.navigate([moto.ruta]);
    }
  }
}
