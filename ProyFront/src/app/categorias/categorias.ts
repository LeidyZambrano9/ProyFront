import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css'],
  imports: [CommonModule, RouterModule]
})
export class CategoriasComponent {

  categories: Category[] = [
    { id: 1, name: 'naked', image: 'assets/Naked.png', description: 'Motos versátiles...', route: 'naked' },
    { id: 2, name: 'deportivas', image: 'assets/Deportivas.png', description: 'Alto rendimiento...', route: 'deportivas' },
    { id: 3, name: 'automaticas', image: 'assets/Automaticas.png', description: 'Facilidad...', route: 'automaticas' },
    { id: 4, name: 'enduro', image: 'assets/Enduro.png', description: 'Para off-road...', route: 'enduro' },
    { id: 5, name: 'turing', image: 'assets/Turing.png', description: 'Comodidad...', route: 'turing' },
    { id: 6, name: 'alto-cc', image: 'assets/Alto-cc.png', description: 'Gran cilindrada...', route: 'alto-cc' }
  ]; 

  constructor(private router: Router) {}


  selectCategory(category: any) {
  const name = category.name.toLowerCase(); // "Naked" → "naked"
  this.router.navigate(['/cilindrajes', name]);
}

}
