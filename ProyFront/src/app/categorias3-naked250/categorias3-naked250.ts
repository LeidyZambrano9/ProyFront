import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-categorias3-naked250',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked250.html',
  styleUrls: ['./categorias3-naked250.css']
})
export class Categorias3Naked250 {
  motos = [
    { nombre: 'KTM Duke 250', img: 'assets/ktmduke250categorias3naked250.png' },
    { nombre: 'Pulsar N 250', img: 'assets/pulsarn250categorias3naked250.png' },
    { nombre: 'Gixxer 250', img: 'assets/gixxer250categorias3naked250.png'},
    { nombre: 'CF Moto NK 250', img: 'assets/cfnk250categorias3naked250.png' },
    { nombre: 'Yamaha FZ 250', img: 'assets/yamahafz250categorias3naked250.png' },
    { nombre: 'Akt 250 R', img: 'assets/akt250rcategorias3naked250.png' }
  ];
}
