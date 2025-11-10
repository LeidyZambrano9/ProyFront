import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { CategoriasComponent } from './categorias/categorias';


export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'categorias', component: CategoriasComponent},
  
];


