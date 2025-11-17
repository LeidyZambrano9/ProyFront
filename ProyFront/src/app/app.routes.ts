import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { CategoriasComponent } from './categorias/categorias';
<<<<<<< HEAD
import { Contacto } from './contacto/contacto';
=======
import { CilindrajesComponent } from './cilindrajes/cilindrajes';
>>>>>>> bd341feb64a86e929a01d21239a1317010797024


export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'categorias', component: CategoriasComponent},
<<<<<<< HEAD
  { path: 'contacto', component: Contacto},
=======
  { path: 'cilindrajes/:categoria', component: CilindrajesComponent }
>>>>>>> bd341feb64a86e929a01d21239a1317010797024
  
];


