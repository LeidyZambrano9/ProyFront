import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Cilindraje {
  id: number;
  cc: string;
  categoryId: number;
  image: string;
  description: string;
  modelos: string[];
}

@Component({
  selector: 'app-cilindrajes',
  templateUrl: './cilindrajes.html',
  styleUrls: ['./cilindrajes.css'],
  imports: [CommonModule]
})
export class CilindrajesComponent implements OnInit, OnChanges {
  
  @Input() selectedCategory: any;
  @Output() backToCategories = new EventEmitter<void>();
  @Output() cilindrajeSelected = new EventEmitter<Cilindraje>();

  cilindrajes: Cilindraje[] = [
    // Cilindrajes para NAKED
    { id: 1, cc: '125 CC', categoryId: 1, image: 'assets/cilindrajes/125cc.png', description: 'Ideal para ciudad y principiantes', modelos: ['Yamaha MT-125', 'KTM 125 Duke'] },
    { id: 2, cc: '150 CC', categoryId: 1, image: 'assets/cilindrajes/150cc.png', description: 'Balance perfecto entre potencia y economía', modelos: ['Honda CB150R', 'Yamaha MT-15'] },
    { id: 3, cc: '200 CC', categoryId: 1, image: 'assets/cilindrajes/200cc.png', description: 'Mayor potencia para recorridos urbanos', modelos: ['KTM 200 Duke', 'Bajaj Pulsar NS200'] },
    { id: 4, cc: '250 CC', categoryId: 1, image: 'assets/cilindrajes/250cc.png', description: 'Alto rendimiento en carretera', modelos: ['Yamaha MT-25', 'Kawasaki Z250'] },
    { id: 5, cc: '300 CC', categoryId: 1, image: 'assets/cilindrajes/300cc.png', description: 'Potencia deportiva para expertos', modelos: ['KTM 390 Duke', 'BMW G310R'] },
    { id: 6, cc: '400 CC', categoryId: 1, image: 'assets/cilindrajes/400cc.png', description: 'Máxima potencia en categoría naked', modelos: ['Kawasaki Z400', 'Honda CB400'] },

    // Cilindrajes para DEPORTIVAS
    { id: 7, cc: '125 CC', categoryId: 2, image: 'assets/cilindrajes/125cc-sport.png', description: 'Deportivas de entrada', modelos: ['Yamaha R125', 'KTM RC125'] },
    { id: 8, cc: '150 CC', categoryId: 2, image: 'assets/cilindrajes/150cc-sport.png', description: 'Deportivas compactas', modelos: ['Honda CBR150R', 'Yamaha R15'] },
    { id: 9, cc: '200 CC', categoryId: 2, image: 'assets/cilindrajes/200cc-sport.png', description: 'Deportivas intermedias', modelos: ['KTM RC200', 'Bajaj Pulsar RS200'] },
    { id: 10, cc: '250 CC', categoryId: 2, image: 'assets/cilindrajes/250cc-sport.png', description: 'Alto rendimiento deportivo', modelos: ['Kawasaki Ninja 250', 'Yamaha R25'] },
    { id: 11, cc: '300 CC', categoryId: 2, image: 'assets/cilindrajes/300cc-sport.png', description: 'Deportivas profesionales', modelos: ['Kawasaki Ninja 300', 'KTM RC390'] },
    { id: 12, cc: '400 CC', categoryId: 2, image: 'assets/cilindrajes/400cc-sport.png', description: 'Super deportivas', modelos: ['Kawasaki Ninja 400', 'Yamaha R3'] },

    // Cilindrajes para AUTOMATICAS
    { id: 13, cc: '125 CC', categoryId: 3, image: 'assets/cilindrajes/125cc-auto.png', description: 'Automáticas urbanas', modelos: ['Honda ADV150', 'Yamaha NMAX'] },
    { id: 14, cc: '150 CC', categoryId: 3, image: 'assets/cilindrajes/150cc-auto.png', description: 'Scooters versátiles', modelos: ['Honda PCX150', 'Yamaha XMAX'] },
    { id: 15, cc: '200 CC', categoryId: 3, image: 'assets/cilindrajes/200cc-auto.png', description: 'Maxi scooters', modelos: ['Honda ADV350', 'Kymco AK550'] },
    { id: 16, cc: '250 CC', categoryId: 3, image: 'assets/cilindrajes/250cc-auto.png', description: 'Gran turismo automático', modelos: ['Yamaha TMAX', 'Honda Forza 250'] },
    { id: 17, cc: '300 CC', categoryId: 3, image: 'assets/cilindrajes/300cc-auto.png', description: 'Alta gama automática', modelos: ['Honda Forza 350', 'BMW C400X'] },
    { id: 18, cc: '400 CC', categoryId: 3, image: 'assets/cilindrajes/400cc-auto.png', description: 'Máxima comodidad automática', modelos: ['Yamaha TMAX 560', 'Honda X-ADV'] },

    // Cilindrajes para ENDURO
    { id: 19, cc: '125 CC', categoryId: 4, image: 'assets/cilindrajes/125cc-enduro.png', description: 'Enduro ligero', modelos: ['Honda CRF125F', 'KTM 125 EXC'] },
    { id: 20, cc: '150 CC', categoryId: 4, image: 'assets/cilindrajes/150cc-enduro.png', description: 'Trail versátil', modelos: ['Honda CRF150L', 'Yamaha WR155R'] },
    { id: 21, cc: '200 CC', categoryId: 4, image: 'assets/cilindrajes/200cc-enduro.png', description: 'Enduro intermedio', modelos: ['Honda CRF250F', 'KTM 200 EXC'] },
    { id: 22, cc: '250 CC', categoryId: 4, image: 'assets/cilindrajes/250cc-enduro.png', description: 'Competencia off-road', modelos: ['KTM 250 EXC-F', 'Husqvarna FE 250'] },
    { id: 23, cc: '300 CC', categoryId: 4, image: 'assets/cilindrajes/300cc-enduro.png', description: 'Alto rendimiento enduro', modelos: ['KTM 300 EXC', 'Beta RR 300'] },
    { id: 24, cc: '400 CC', categoryId: 4, image: 'assets/cilindrajes/400cc-enduro.png', description: 'Aventura extrema', modelos: ['Husqvarna FE 450', 'KTM 450 EXC-F'] },

    // Cilindrajes para TURING
    { id: 25, cc: '125 CC', categoryId: 5, image: 'assets/cilindrajes/125cc-touring.png', description: 'Touring económico', modelos: ['Honda CB125F', 'Yamaha YBR125'] },
    { id: 26, cc: '150 CC', categoryId: 5, image: 'assets/cilindrajes/150cc-touring.png', description: 'Touring versátil', modelos: ['Honda CB150F', 'Bajaj Pulsar 150'] },
    { id: 27, cc: '200 CC', categoryId: 5, image: 'assets/cilindrajes/200cc-touring.png', description: 'Touring confort', modelos: ['Honda CB200X', 'Bajaj Pulsar NS200'] },
    { id: 28, cc: '250 CC', categoryId: 5, image: 'assets/cilindrajes/250cc-touring.png', description: 'Gran turismo', modelos: ['Honda CB300F', 'Kawasaki Versys-X 300'] },
    { id: 29, cc: '300 CC', categoryId: 5, image: 'assets/cilindrajes/300cc-touring.png', description: 'Touring avanzado', modelos: ['BMW G310GS', 'KTM 390 Adventure'] },
    { id: 30, cc: '400 CC', categoryId: 5, image: 'assets/cilindrajes/400cc-touring.png', description: 'Aventura premium', modelos: ['Honda CB500X', 'Kawasaki Versys 650'] },

    // Cilindrajes para ALTO CC
    { id: 31, cc: '500 CC', categoryId: 6, image: 'assets/cilindrajes/500cc.png', description: 'Alta cilindrada deportiva', modelos: ['Honda CBR500R', 'Kawasaki Ninja 650'] },
    { id: 32, cc: '600 CC', categoryId: 6, image: 'assets/cilindrajes/600cc.png', description: 'Super deportivas', modelos: ['Yamaha R6', 'Kawasaki ZX-6R'] },
    { id: 33, cc: '750 CC', categoryId: 6, image: 'assets/cilindrajes/750cc.png', description: 'Potencia superior', modelos: ['Honda CBR750RR', 'Suzuki GSX-S750'] },
    { id: 34, cc: '900 CC', categoryId: 6, image: 'assets/cilindrajes/900cc.png', description: 'Naked de alta gama', modelos: ['Yamaha MT-09', 'Triumph Street Triple'] },
    { id: 35, cc: '1000 CC', categoryId: 6, image: 'assets/cilindrajes/1000cc.png', description: 'Hyper deportivas', modelos: ['Kawasaki Ninja ZX-10R', 'BMW S1000RR'] },
    { id: 36, cc: '1200+ CC', categoryId: 6, image: 'assets/cilindrajes/1200cc.png', description: 'Máxima potencia', modelos: ['Ducati Panigale V4', 'Harley Davidson Sportster'] }
  ];

  filteredCilindrajes: Cilindraje[] = [];

  ngOnInit(): void {
    this.filterCilindrajes();
  }

  ngOnChanges(): void {
    this.filterCilindrajes();
  }

  filterCilindrajes(): void {
    if (this.selectedCategory) {
      this.filteredCilindrajes = this.cilindrajes.filter(
        cilindraje => cilindraje.categoryId === this.selectedCategory.id
      );
    } else {
      this.filteredCilindrajes = [];
    }
  }

  goBack(): void {
    this.backToCategories.emit();
  }

  selectCilindraje(cilindraje: Cilindraje): void {
    this.cilindrajeSelected.emit(cilindraje);
    console.log('Cilindraje seleccionado:', cilindraje);
  }
}