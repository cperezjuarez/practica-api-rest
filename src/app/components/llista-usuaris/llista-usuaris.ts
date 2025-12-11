import { Component, signal } from '@angular/core';
import { Usuari } from '../../models/usuari.model';
import { UsuarisService } from '../../services/usuaris.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-llista-usuaris',
  imports: [ReactiveFormsModule],
  templateUrl: './llista-usuaris.html',
  styleUrl: './llista-usuaris.scss',
})
export class LlistaUsuaris {
  // Atributos
  usuaris = signal<Usuari[]>([]);
  carregant = signal(true);
  error = signal<string | null>(null);

  cercaText = new FormControl('');

  constructor(private usuarisService: UsuarisService) { }

  ngOnInit(): void {
    this.carregarUsuaris();
  }

  // Metodos
  carregarUsuaris(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.usuarisService.getUsuaris().subscribe({
      next: (dades) => {
        this.usuaris.set(dades);
        this.carregant.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los usuarios');
        this.carregant.set(false);
        console.error(err);
      }
    })
  }

  // Método para buscar usuarios
  getUsuarisFiltrats(): Usuari[] {
    const valor = this.cercaText.value;
    if (!valor) {
      return this.usuaris();
    }

    const q = String(valor).toLowerCase();
    return this.usuaris().filter(u =>
      u.name.toLowerCase().includes(q)
    );
  }
}
