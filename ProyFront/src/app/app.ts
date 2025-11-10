import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer/footer';
import { Inicio } from './inicio/inicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBar,Inicio,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyFront');
}
