import { Component,Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moto-card',
  imports: [CommonModule],
  templateUrl: './moto-card.html',
  styleUrl: './moto-card.css',
})
export class MotoCard {
  @Input() moto: any;

}
