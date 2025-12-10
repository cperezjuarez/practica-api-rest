import { Component, signal } from '@angular/core';
import { Publicacio } from '../../models/publicacio.model';
import { PublicacionsService } from '../../services/publicacions.service';

@Component({
  selector: 'app-llista-publicacions',
  imports: [],
  templateUrl: './llista-publicacions.html',
  styleUrl: './llista-publicacions.scss',
})
export class LlistaPublicacions {
  // Atributos
  publicacions = signal<Publicacio[]>([]);
  carregant = signal(true);
  error = signal<string | null>(null);

  paginaActual = signal(1);
  publicacionsPerPagina = 5;

  constructor(private publicacionsService: PublicacionsService) { }

  ngOnInit(): void {
    this.carregarPublicacions();
  }

  // Metodos

  // Método para cargar publicaciones
  carregarPublicacions() {
    this.carregant.set(true);
    this.error.set(null);

    this.publicacionsService.getPublicacions().subscribe({
      next: (dades) => {
        this.publicacions.set(dades);
        this.carregant.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar las publicaciones');
        this.carregant.set(false);
        console.error(err);
      }
    });
  }

  // Método para obtener publicaciones de la página actual
  getPublicacionsPagina(): Publicacio[] {
    const inici = (this.paginaActual() - 1) * this.publicacionsPerPagina;
    const fi = inici + this.publicacionsPerPagina;
    return this.publicacions().slice(inici, fi);
  }

  // Mètodes de navegació
  paginaAnterior(): void {
    if (this.paginaActual() > 1) {
      this.paginaActual.set(this.paginaActual() - 1);
    }
  }

  paginaSeguent(): void {
    if (this.paginaActual() * this.publicacionsPerPagina < this.publicacions().length) {
      this.paginaActual.set(this.paginaActual() + 1);
    }
  }
}
