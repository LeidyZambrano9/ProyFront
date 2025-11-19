import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias3-deportivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-deportivas.html',
  styleUrls: ['./categorias3-deportivas.css'],
})
export class Categorias3Deportivas {
  motos = [
    { nombre: 'KTM Duke 200 RC', img: 'assets/Categorias3duke200RCDeportivas.png' },
    { nombre: 'Yamaha R15 V4', img: 'assets/Categorias3YamahaR15V4Deportivas.png' },
    { nombre: 'Keeway RKR 200', img: 'assets/Categorias3KeewayRKR200Deportivas.png'},
    { nombre: 'Pulsar RS 200', img: 'assets/Categorias3PulsarRS200Deportivas.png' },
    { nombre: 'Energy 200', img: 'assets/Categorias3ENERGY200Deportivas.png' },
    { nombre: 'Hero Xtreme 200', img: 'assets/Categorias3HeroXtreme200SDeportivas.png' }
  ];
}


