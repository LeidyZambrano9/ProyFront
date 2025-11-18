import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-categorias3-naked400',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked400.html',
  styleUrls: ['./categorias3-naked400.css']
})
export class Categorias3Naked400 {
  motos = [
    { nombre: 'KTM Duke 390', img: 'assets/ktmduke390categorias3naked400.png' },
    { nombre: 'Kawasaki Z400', img: 'assets/kawasakiz400categorias3naked400.png' },
    { nombre: 'Pulsar NS 400 Z', img: 'assets/NS400Zcategorias3naked400.png'},
    { nombre: 'Apache RTR 310', img: 'assets/Apachertr310categorias3naked400.png' },
    { nombre: 'CF Moto 450 Nk', img: 'assets/cfmoto450nkcategorias3naked400.png' },
    { nombre: 'Husqvarna Vitpilen 401', img: 'assets/husqvarna400categorias3naked400.png' }
  ];
}
