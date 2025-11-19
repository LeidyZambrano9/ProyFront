import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-categorias3-naked750',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias3-naked750.html',
  styleUrls: ['./categorias3-naked750.css']
})
export class Categorias3Naked750 {
  motos = [
    { nombre: 'Aprilia Silver 750', img: 'assets/Aprilia750categorias3naked750.png' },
    { nombre: 'Suzuki GSR 750', img: 'assets/Suzukigsr750categorias3naked750.png' },
    { nombre: 'MV Agusta 750 S', img: 'assets/MVagustabrutale750scategorias3naked750.png'},
    { nombre: 'Honda CB 750 Hornet', img: 'assets/HondaCB750Hornetcategorias3naked750.png' },
    { nombre: 'CF Moto 800 Nk', img: 'assets/CFmoto800nkcategorias3naked750.png' },
    { nombre: 'Benelli 752 S', img: 'assets/Benelli752Scategorias3naked750.png' }
  ];
}
