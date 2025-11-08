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
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Motos versátiles con estilo urbano y deportivo'
    },
    {
      id: 2,
      name: 'DEPORTIVAS',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Alto rendimiento y diseño aerodinámico'
    },
    {
      id: 3,
      name: 'AUTOMATICAS',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Facilidad de manejo y comodidad'
    },
    {
      id: 4,
      name: 'ENDURO',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Para aventuras off-road y terrenos difíciles'
    },
    {
      id: 5,
      name: 'TURING',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Comodidad para largos recorridos y viajes'
    },
    {
      id: 6,
      name: 'ALTO CC',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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