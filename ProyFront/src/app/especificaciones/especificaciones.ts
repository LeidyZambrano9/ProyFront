import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-especificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './especificaciones.html',
  styleUrls: ['./especificaciones.css']
})
export class Especificaciones {

  @Input() moto: any = null;

}
