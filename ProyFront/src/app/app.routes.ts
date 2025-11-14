import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { CategoriasComponent } from './categorias/categorias';
import { CilindrajesComponent } from './cilindrajes/cilindrajes';


export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'categorias', component: CategoriasComponent},
  { path: 'cilindrajes/:categoria', component: CilindrajesComponent }
  
];


