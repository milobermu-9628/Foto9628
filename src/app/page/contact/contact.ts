import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
  
})

export class Contact {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{7,10}$')]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const datos = this.contactForm.value;

      const blob = new Blob([JSON.stringify(datos, null, 2)], {
        type: 'application/json'
      });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contacto.json';
      a.click();

      window.URL.revokeObjectURL(url);

      this.contactForm.reset();
    }
  }

  cancelar() {
    this.contactForm.reset();
  }
}
