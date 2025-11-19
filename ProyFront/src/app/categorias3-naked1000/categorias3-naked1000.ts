import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias3-naked1000',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked1000.html',
  styleUrls: ['./categorias3-naked1000.css']
})
export class Categorias3Naked1000 {
  motos = [
    { nombre: 'BMW S1000 R', img: 'assets/BMWS1000Rcategorias3naked1000.png', ruta: '/categorias4-naked-bmws1000' },
    { nombre: 'KTM 1290 SUPER DUKE R', img: 'assets/KTM1290SPRcategorias3naked1000.png', ruta: '/categorias4-naked-ktmsuperduke1000' },
    { nombre: 'Suzuki GSX S1000', img: 'assets/GSXS1000categorias3naked1000.png', ruta: '/categorias4-naked-suzukigsx1000' },
    { nombre: 'Honda CB 1000 R', img: 'assets/HondaCB1000Rcategorias3naked1000.png', ruta: '/categorias4-naked-hondacb1000' },
    { nombre: 'Kawasaki Z1000', img: 'assets/Kawasakiz1000categorias3naked1000.png', ruta: '/categorias4-naked-kawasakiz1000' },
    { nombre: 'Ducati Streetfigther V4', img: 'assets/DucatiStreetfigther1000categorias3naked1000.png', ruta: '/categorias4-naked-ducatistreetfigther1000' },
  ];

  constructor(private router: Router) {}

  irACategoria(moto: any) {
    if (moto.ruta) {
      this.router.navigate([moto.ruta]);
    }
  }
}