import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias3-naked',
  standalone: true,
  imports: [CommonModule],   // RouterModule necesario para navegación
  templateUrl: './categorias3-naked.html',
  styleUrls: ['./categorias3-naked.css']
})
export class Categorias3Naked {

  motos = [
    { nombre: 'Duke 200 NG', img: 'assets/duke200categorias3.png', ruta: '/categorias4duke200' },
    { nombre: 'Pulsar NS 200 FI 200 CC', img: 'assets/pulsar200categorias3.png', ruta: '/categorias4-ns200' },
    { nombre: 'Apache 200 FI 200 CC', img: 'assets/apache200categorias3.png', ruta: '/categorias4-apache200' },
    { nombre: 'Hero Xtreme 200 R 200 CC', img: 'assets/xtreme200categorias3.png', ruta: '/categorias4-heroxtreme200' },
    { nombre: 'Keeway K-Light 200N 200 CC', img: 'assets/keeway200categorias3.png', ruta: '/categorias4-keeway200' },
    { nombre: 'Honda CB 190 R 190 CC', img: 'assets/cb190categorias3.png', ruta: '/categorias4-hondacb190' },
  ];

  constructor(private router: Router) {}

  irACategoria(moto: any) {
    if (moto.ruta) {
      this.router.navigateByUrl(moto.ruta); // navigateByUrl asegura que funcione correctamente
    }
  }
}


