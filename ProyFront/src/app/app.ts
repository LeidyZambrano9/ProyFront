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
import { Categorias3Naked400 } from './categorias3-naked400/categorias3-naked400';
import { Categorias3Naked750 } from './categorias3-naked750/categorias3-naked750';
import { Categorias3Naked1000 } from './categorias3-naked1000/categorias3-naked1000';
import { Categorias4NakedRaider125 } from './categorias4-naked-raider125/categorias4-naked-raider125';
import { Categorias4NakedHerohunk125 } from './categorias4-naked-herohunk125/categorias4-naked-herohunk125';
import { Categorias4NakedPulsarns125 } from './categorias4-naked-pulsarns125/categorias4-naked-pulsarns125';
import { Categorias4NakedAktcr4125 } from './categorias4-naked-aktcr4125/categorias4-naked-aktcr4125';
import { Categorias4NakedAktnkd125 } from './categorias4-naked-aktnkd125/categorias4-naked-aktnkd125';
import { Categorias4NakedPulsarn125 } from './categorias4-naked-pulsarn125/categorias4-naked-pulsarn125';
import { Categorias4NakedDuke250 } from './categorias4-naked-duke250/categorias4-naked-duke250';
import { Categorias4NakedPulsarn250 } from './categorias4-naked-pulsarn250/categorias4-naked-pulsarn250';
import { Categorias4NakedGixxer250 } from './categorias4-naked-gixxer250/categorias4-naked-gixxer250';
import { Comparador } from './comparador/comparador';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavBar, Footer],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyFront');
}
