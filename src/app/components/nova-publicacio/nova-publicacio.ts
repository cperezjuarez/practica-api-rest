import { Component, signal } from '@angular/core';
import { PublicacionsService } from '../../services/publicacions.service';
import { Publicacio } from '../../models/publicacio.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-publicacio',
  imports: [CommonModule, FormsModule],
  templateUrl: './nova-publicacio.html',
  styleUrl: './nova-publicacio.scss',
})
export class NovaPublicacio {
  // Atributos
  novaPublicacio: Omit<Publicacio, 'id'> = {
    title: '',
    body: '',
    userId: 1
  };
  carregant = signal(false);
  error = signal<string | null>(null);

  constructor(private publicacionsService: PublicacionsService) { }

  // Métodos

  // Método para añadir una publicación
  afegirPublicacio(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.publicacionsService.crearPublicacio(this.novaPublicacio).subscribe({
      next: (respuesta) => {
        this.novaPublicacio = {
          title: '',
          body: '',
          userId: 1,
        };
        this.carregant.set(false);
        alert("Publicación añadida");
      },
      error: (err) => {
        this.error.set('Error al crear la publicación');
        this.carregant.set(false);
        console.error(err);
      }
    })
  }
}
