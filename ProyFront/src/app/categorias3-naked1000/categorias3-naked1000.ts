import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-categorias3-naked1000',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked1000.html',
  styleUrls: ['./categorias3-naked1000.css']
})
export class Categorias3Naked1000 {
  motos = [
    { nombre: 'BMW S1000 R', img: 'assets/BMWS1000Rcategorias3naked1000.png' },
    { nombre: 'KTM 1290 SUPER DUKE R', img: 'assets/KTM1290SPRcategorias3naked1000.png' },
    { nombre: 'Suzuki GSX S1000', img: 'assets/GSXS1000categorias3naked1000.png'},
    { nombre: 'Honda CB 1000 R', img: 'assets/HondaCB1000Rcategorias3naked1000.png' },
    { nombre: 'Kawasaki Z1000', img: 'assets/Kawasakiz1000categorias3naked1000.png' },
    { nombre: 'Ducati Streetfigther V4', img: 'assets/DucatiStreetfigther1000categorias3naked1000.png' }
  ];
}
