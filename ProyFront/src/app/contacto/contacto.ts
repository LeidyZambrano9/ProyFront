import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  contactoForm: FormGroup;
  enviado = false;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/)
        ]
      ],
      correo: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{7,10}$/)
        ]
      ],
      mensaje: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]
    });
  }

  /** Acceso rápido a los controles */
  get f() {
    return this.contactoForm.controls;
  }

  /** Campo inválido (se ve en rojo) */
  campoInvalido(campo: string): boolean {
    const control = this.f[campo];
    return control.invalid && (control.touched || this.enviado);
  }

  /** Campo válido (se ve en verde) */
  campoValido(campo: string): boolean {
    const control = this.f[campo];
    return control.valid && control.touched;
  }

  /** Se ejecuta en cada input */
  onInput(campo: string) {
    this.f[campo].markAsTouched();
    this.f[campo].updateValueAndValidity();
  }

  /** Enviar formulario */
  onSubmit() {
    this.enviado = true;

    Object.keys(this.f).forEach(key => {
      this.f[key].markAsTouched();
      this.f[key].updateValueAndValidity();
    });

    if (this.contactoForm.invalid) return;

    alert('✅ ¡Gracias por contactarnos!');

    this.contactoForm.reset();
    this.enviado = false;

    // Limpieza del estado visual
    Object.keys(this.f).forEach(key => {
      this.f[key].markAsUntouched();
    });
  }
}
