import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css'],
  imports: [CommonModule] // ✅ Agregar CommonModule aquí
})
export class CategoriasComponent implements OnInit {
  
  categories: Category[] = [
    {
      id: 1,
      name: 'NAKED',
      image: 'assets/Naked.png',
      description: 'Motos versátiles con estilo urbano y deportivo'
    },
    {
      id: 2,
      name: 'DEPORTIVAS',
      image: 'assets/Deportivas.png',
      description: 'Alto rendimiento y diseño aerodinámico'
    },
    {
      id: 3,
      name: 'AUTOMATICAS',
      image: 'assets/Automaticas.png',
      description: 'Facilidad de manejo y comodidad'
    },
    {
      id: 4,
      name: 'ENDURO',
      image: 'assets/Enduro.png',
      description: 'Para aventuras off-road y terrenos difíciles'
    },
    {
      id: 5,
      name: 'TURING',
      image: 'assets/Turing.png',
      description: 'Comodidad para largos recorridos y viajes'
    },
    {
      id: 6,
      name: 'ALTO CC',
      image: 'assets/Alto-cc.png',
      description: 'Gran cilindrada y potencia superior'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(category: Category): void {
    console.log('Categoría seleccionada:', category);
    // Aquí puedes implementar la navegación
  }
}