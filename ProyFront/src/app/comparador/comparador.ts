import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoCard } from '../moto-card/moto-card';
import { Especificaciones } from '../especificaciones/especificaciones';

@Component({
  selector: 'app-comparador',
  standalone: true,
  imports: [CommonModule, MotoCard, Especificaciones],
  templateUrl: './comparador.html',
  styleUrls: ['./comparador.css'],
})
export class Comparador {

  motos = [
    {
      id: 1,
      nombre: "KTM Duke 250",
      img: "assets/duke250.png",
      cilindraje: "248.8 cc",
      potencia: "29 HP @ 9.000 rpm",
      torque: "24 Nm @ 7.250 rpm",
      refrigeracion: "Líquida",
      alimentacion: "Inyección electrónica",
      transmision: "6 velocidades",
      frenos: "ABS doble canal",
      suspDel: "WP Apex 43mm",
      suspTras: "Mono-shock WP",
      peso: "169 kg",
      tanque: "13.4 L",
      altura: "822 mm",
      velMax: "145 km/h"
    },
    {
      id: 2,
      nombre: "CF 300SR",
      img: "assets/cf300.png",
      cilindraje: "292 cc",
      potencia: "27 HP",
      torque: "25 Nm",
      refrigeracion: "Líquida",
      alimentacion: "EFI",
      transmision: "6 velocidades",
      frenos: "ABS",
      suspDel: "Invertida",
      suspTras: "Mono-shock",
      peso: "165 kg",
      tanque: "12 L",
      altura: "780 mm",
      velMax: "140 km/h"
    }
  ];

  motoSeleccionada1: any = null;
  motoSeleccionada2: any = null;

  seleccionarMoto1(event: Event) {
    const select = event.target as HTMLSelectElement;
    const id = Number(select.value);
    this.motoSeleccionada1 = this.motos.find(m => m.id === id) || null;
  }

  seleccionarMoto2(event: Event) {
    const select = event.target as HTMLSelectElement;
    const id = Number(select.value);
    this.motoSeleccionada2 = this.motos.find(m => m.id === id) || null;
  }

}
