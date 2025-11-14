import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

type TipoMotoKey =
  | 'naked'
  | 'deportivas'
  | 'automaticas'
  | 'enduro'
  | 'turing'
  | 'alto-cc';

interface TipoInfo {
  titulo: string;
  descripcion: string;
  imagen: string;
  header: string;
  cilindradas: number[];
}

@Component({
  selector: 'app-cilindrajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cilindrajes.html',
  styleUrls: ['./cilindrajes.css']
})
export class CilindrajesComponent implements OnInit {

  tipos: Record<TipoMotoKey, TipoInfo> = {
    naked: {
      titulo: 'NAKED',
      descripcion: 'Las motos Naked combinan potencia y diseño minimalista.',
      imagen: 'assets/Naked.png',
      header: 'assets/NakedHeader.jpg' ,
      cilindradas: [125, 150, 200, 250, 300, 400]
    },
    deportivas: {
      titulo: 'DEPORTIVAS',
      descripcion: 'Motos deportivas para velocidad y rendimiento.',
      imagen: 'assets/Deportivas.png',
      header: 'assets/header-deportivas.jpg',
      cilindradas: [125, 150, 200, 250, 300, 400]
    },
    automaticas: {
      titulo: 'AUTOMÁTICAS',
      descripcion: 'Perfectas para la ciudad; confort y economía.',
      imagen: 'assets/Automaticas.png',
      header: 'assets/header-automaticas.jpg',
      cilindradas: [125, 150, 200, 250, 300, 400]
    },
    enduro: {
      titulo: 'ENDURO',
      descripcion: 'Diseñadas para off-road con suspensión avanzada.',
      imagen: 'assets/Enduro.png',
      header: 'assets/header-enduro.jpg',
      cilindradas: [125, 150, 200, 250, 300, 400]
    },
    turing: {
      titulo: 'TURING',
      descripcion: 'Viajes largos con comodidad y gran capacidad.',
      imagen: 'assets/Turing.png',
      header: 'assets/header-turing.jpg',
      cilindradas: [125, 150, 200, 250, 300, 400]
    },
    'alto-cc': {
      titulo: 'ALTO CC',
      descripcion: 'Alta cilindrada para máxima potencia en carretera.',
      imagen: 'assets/Alto-cc.png',
      header: 'assets/header-alto-cc.jpg',
      cilindradas: [125, 150, 200, 250, 300, 400]
    }

  };

  tipo?: TipoInfo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const categoria = this.route.snapshot.paramMap.get('categoria') as TipoMotoKey | null;

    // Validar categoría y fallback a "naked"
    this.tipo = categoria && this.tipos[categoria]
      ? this.tipos[categoria]
      : this.tipos['naked'];
  }
}
