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
import { Categorias4NakedCfmotonk250 } from './categorias4-naked-cfmotonk250/categorias4-naked-cfmotonk250';
import { Categorias4NakedYamahafz250 } from './categorias4-naked-yamahafz250/categorias4-naked-yamahafz250';
import { Categorias4NakedAkt250 } from './categorias4-naked-akt250/categorias4-naked-akt250';
import { Categorias4NakedKtmduke400 } from './categorias4-naked-ktmduke400/categorias4-naked-ktmduke400';
import { Categorias4NakedKawsakiz400 } from './categorias4-naked-kawsakiz400/categorias4-naked-kawsakiz400';
import { Categorias4NakedPulsarns400 } from './categorias4-naked-pulsarns400/categorias4-naked-pulsarns400';
import { Categorias4NakedApachertr400 } from './categorias4-naked-apachertr400/categorias4-naked-apachertr400';
import { Categorias4NakedCfmotonk400 } from './categorias4-naked-cfmotonk400/categorias4-naked-cfmotonk400';
import { Categorias4NakedHusqvarna400 } from './categorias4-naked-husqvarna400/categorias4-naked-husqvarna400';
import { Categorias4NakedApriliasilver750 } from './categorias4-naked-apriliasilver750/categorias4-naked-apriliasilver750';
import { Categorias4NakedSuzukigsr750 } from './categorias4-naked-suzukigsr750/categorias4-naked-suzukigsr750';
import { Categorias4NakedMvagusta750 } from './categorias4-naked-mvagusta750/categorias4-naked-mvagusta750';
import { Categorias4NakedHondacb750 } from './categorias4-naked-hondacb750/categorias4-naked-hondacb750';
import { Categorias4NakedCfmotonk750 } from './categorias4-naked-cfmotonk750/categorias4-naked-cfmotonk750';
import { Categorias4NakedBenelli750 } from './categorias4-naked-benelli750/categorias4-naked-benelli750';
import { Categorias4NakedBmws1000 } from './categorias4-naked-bmws1000/categorias4-naked-bmws1000'; 
import { Categorias4NakedKtmsuperduke1000 } from './categorias4-naked-ktmsuperduke1000/categorias4-naked-ktmsuperduke1000';
import { Categorias4NakedSuzukigsx1000 } from './categorias4-naked-suzukigsx1000/categorias4-naked-suzukigsx1000';
import { Categorias4NakedHondacb1000 } from './categorias4-naked-hondacb1000/categorias4-naked-hondacb1000';
import { Categorias4NakedKawasakiz1000 } from './categorias4-naked-kawasakiz1000/categorias4-naked-kawasakiz1000';
import { Categorias4NakedDucatistreetfigther1000 } from './categorias4-naked-ducatistreetfigther1000/categorias4-naked-ducatistreetfigther1000';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavBar, Footer, Categorias4NakedBmws1000],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProyFront');
}
