import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { Inicio } from './inicio/inicio';
import { Categorias3 } from './categorias3/categorias3';
import { Categorias4duke200 } from './categorias4duke200/categorias4duke200';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, Footer, Categorias4duke200],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyFront');
}
