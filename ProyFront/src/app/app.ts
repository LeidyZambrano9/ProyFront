import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { Inicio } from './inicio/inicio';
import { Categorias3Naked } from './categorias3-naked/categorias3-naked';
import { CategoriasComponent } from './categorias/categorias';
import { CilindrajesComponent } from './cilindrajes/cilindrajes';
import { Categorias3Deportivas } from './categorias3-deportivas/categorias3-deportivas';
import { Categorias4duke200 } from './categorias4duke200/categorias4duke200';
import { Categorias4NS200 } from './categorias4-ns200/categorias4-ns200'; 
import { Categorias4Apache200 } from './categorias4-apache200/categorias4-apache200';
import { Categorias4Heroxtreme200 } from './categorias4-heroxtreme200/categorias4-heroxtreme200';
import { Categorias4Keeway200 } from './categorias4-keeway200/categorias4-keeway200';
import { Categorias4Hondacb190 } from './categorias4-hondacb190/categorias4-hondacb190';
import { Categorias3Naked125 } from './categorias3-naked125/categorias3-naked125';
import { Categorias3Naked250 } from './categorias3-naked250/categorias3-naked250';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, Footer, Categorias3Naked250],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyFront');
}
