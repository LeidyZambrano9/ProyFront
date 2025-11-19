import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { CategoriasComponent } from './categorias/categorias';
import { Contacto } from './contacto/contacto';
import { CilindrajesComponent } from './cilindrajes/cilindrajes';
import { Comparador } from './comparador/comparador';



export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'categorias', component: CategoriasComponent},

  { path: 'contacto', component: Contacto},

  { path: 'cilindrajes/:categoria', component: CilindrajesComponent },

  { path: 'comparador', component: Comparador},

  
];


