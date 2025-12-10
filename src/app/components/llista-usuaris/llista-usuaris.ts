import { Component, signal } from '@angular/core';
import { Usuari } from '../../models/usuari.model';
import { UsuarisService } from '../../services/usuaris.service';

@Component({
  selector: 'app-llista-usuaris',
  imports: [],
  templateUrl: './llista-usuaris.html',
  styleUrl: './llista-usuaris.scss',
})
export class LlistaUsuaris {
  // Atributos
  usuaris = signal<Usuari[]>([]);
  carregant = signal(true);
  error = signal<string | null>(null);

  constructor(private usuarisService: UsuarisService) {}

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
}
