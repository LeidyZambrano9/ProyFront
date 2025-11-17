import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-categorias3-naked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked.html',
  styleUrls: ['./categorias3-naked.css']
})
export class Categorias3Naked {
  motos = [
    { nombre: 'Duke 200 NG', img: 'assets/duke200categorias3.png' },
    { nombre: 'Pulsar NS 200 FI 200 CC', img: 'assets/pulsar200categorias3.png' },
    { nombre: 'Apache 200 FI 200 CC', img: 'assets/apache200categorias3.png', isApache: true },
    { nombre: 'Hero Xtreme 200 R 200 CC', img: 'assets/xtreme200categorias3.png' },
    { nombre: 'Keeway K-Light 200N 200 CC', img: 'assets/keeway200categorias3.png' },
    { nombre: 'Honda CB 190 R 190 CC', img: 'assets/cb190categorias3.png' }
  ];
}


