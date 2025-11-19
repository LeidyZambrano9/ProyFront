import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { CategoriasComponent } from './categorias/categorias';
import { Contacto } from './contacto/contacto';
import { CilindrajesComponent } from './cilindrajes/cilindrajes';
import { Categorias3Naked125 } from './categorias3-naked125/categorias3-naked125';
import { Categorias3Naked } from './categorias3-naked/categorias3-naked';
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
import { Categorias4duke200 } from './categorias4duke200/categorias4duke200';
import { Categorias4NS200 } from './categorias4-ns200/categorias4-ns200';
import { Categorias4Apache200 } from './categorias4-apache200/categorias4-apache200';
import { Categorias4Heroxtreme200 } from './categorias4-heroxtreme200/categorias4-heroxtreme200';
import { Categorias4Keeway200 } from './categorias4-keeway200/categorias4-keeway200';
import { Categorias4Hondacb190 } from './categorias4-hondacb190/categorias4-hondacb190';
import { Categorias4NakedDuke250 } from './categorias4-naked-duke250/categorias4-naked-duke250';
import { Categorias4NakedPulsarn250 } from './categorias4-naked-pulsarn250/categorias4-naked-pulsarn250';
import { Categorias4NakedYamahafz250 } from './categorias4-naked-yamahafz250/categorias4-naked-yamahafz250';
import { Categorias4NakedGixxer250 } from './categorias4-naked-gixxer250/categorias4-naked-gixxer250';
import { Categorias4NakedCfmotonk250 } from './categorias4-naked-cfmotonk250/categorias4-naked-cfmotonk250';
import { Categorias4NakedAkt250 } from './categorias4-naked-akt250/categorias4-naked-akt250';
import { Categorias4NakedKtmduke400 } from './categorias4-naked-ktmduke400/categorias4-naked-ktmduke400';
import { Categorias4NakedPulsarns400 } from './categorias4-naked-pulsarns400/categorias4-naked-pulsarns400';
import { Categorias4NakedKawsakiz400 } from './categorias4-naked-kawsakiz400/categorias4-naked-kawsakiz400';
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


export const routes: Routes = [

  { path: '', component: Inicio },

  { path: 'categorias', component: CategoriasComponent },

  { path: 'contacto', component: Contacto },

  { path: 'cilindrajes/:categoria', component: CilindrajesComponent },

  { path: 'naked125', component: Categorias3Naked125 },

  { path: 'naked', component: Categorias3Naked },

  { path: 'naked250', component: Categorias3Naked250 },

  { path: 'naked400', component: Categorias3Naked400 },

  { path: 'naked750', component: Categorias3Naked750 },

  { path: 'naked1000', component: Categorias3Naked1000 },

  // ----------- CATEGORIAS NAKED 125 ---------------- //

  { path: 'categorias4-naked-raider125', component: Categorias4NakedRaider125 },

  { path: 'categorias4-naked-herohunk125', component: Categorias4NakedHerohunk125 },

  { path: 'categorias4-naked-pulsarns125', component: Categorias4NakedPulsarns125 },

  { path: 'categorias4-naked-aktcr4125', component: Categorias4NakedAktcr4125 },

  { path: 'categorias4-naked-aktnkd125', component: Categorias4NakedAktnkd125 },

  { path: 'categorias4-naked-pulsarn125', component: Categorias4NakedPulsarn125 },

  // ----------- CATEGORIAS NAKED 200 ---------------- //

  { path: 'categorias4duke200', component: Categorias4duke200 },

  { path: 'categorias4-ns200', component: Categorias4NS200 },

  { path: 'categorias4-apache200', component: Categorias4Apache200 },

  { path: 'categorias4-heroxtreme200', component: Categorias4Heroxtreme200 },

  { path: 'categorias4-keeway200', component: Categorias4Keeway200 },

  { path: 'categorias4-hondacb190', component: Categorias4Hondacb190 },

    // ----------- CATEGORIAS NAKED 250 ---------------- //

  { path: 'categorias4-naked-duke250', component: Categorias4NakedDuke250 },

  { path: 'categorias4-naked-pulsarn250', component: Categorias4NakedPulsarn250 },

  { path: 'categorias4-naked-yamahafz250', component: Categorias4NakedYamahafz250 },

  { path: 'categorias4-naked-gixxer250', component: Categorias4NakedGixxer250 },

  { path: 'categorias4-naked-cfmotonk250', component: Categorias4NakedCfmotonk250 },

  { path: 'categorias4-naked-akt250', component: Categorias4NakedAkt250 },
  
    // ----------- CATEGORIAS NAKED 400 ---------------- //

  { path: 'categorias4-naked-ktmduke400', component: Categorias4NakedKtmduke400 }, 

  { path: 'categorias4-naked-pulsarns400', component: Categorias4NakedPulsarns400 }, 

  { path: 'categorias4-naked-kawsakiz400', component: Categorias4NakedKawsakiz400 },  

  { path: 'categorias4-naked-apachertr400', component: Categorias4NakedApachertr400 },

  { path: 'categorias4-naked-cfmotonk400', component: Categorias4NakedCfmotonk400 },  

  { path: 'categorias4-naked-husqvarna400', component: Categorias4NakedHusqvarna400 },  
 
    // ----------- CATEGORIAS NAKED 750 ---------------- //

  { path: 'categorias4-naked-apriliasilver750', component: Categorias4NakedApriliasilver750 },

  { path: 'categorias4-naked-suzukigsr750', component: Categorias4NakedSuzukigsr750 },

  { path: 'categorias4-naked-mvagusta750', component: Categorias4NakedMvagusta750 },

  { path: 'categorias4-naked-hondacb750', component: Categorias4NakedHondacb750 },

  { path: 'categorias4-naked-cfmotonk750', component: Categorias4NakedCfmotonk750 },

  { path: 'categorias4-naked-benelli750', component: Categorias4NakedBenelli750 },

    // ----------- CATEGORIAS NAKED 1000 ---------------- //

  { path: 'categorias4-naked-bmws1000', component: Categorias4NakedBmws1000 },

  { path: 'categorias4-naked-ktmsuperduke1000', component: Categorias4NakedKtmsuperduke1000 },

  { path: 'categorias4-naked-suzukigsx1000', component: Categorias4NakedSuzukigsx1000 },

  { path: 'categorias4-naked-hondacb1000', component: Categorias4NakedHondacb1000 },

  { path: 'categorias4-naked-kawasakiz1000', component: Categorias4NakedKawasakiz1000 },

  { path: 'categorias4-naked-ducatistreetfigther1000', component: Categorias4NakedDucatistreetfigther1000 },

];



