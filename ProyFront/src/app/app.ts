import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { Inicio } from './inicio/inicio';
import { Categorias3Naked } from './categorias3-naked/categorias3-naked';
import { CategoriasComponent } from './categorias/categorias';
import { CilindrajesComponent } from './cilindrajes/cilindrajes';
import { Categorias3Deportivas } from './categorias3-deportivas/categorias3-deportivas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, Footer, Categorias3Deportivas],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyFront');
}
