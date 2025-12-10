import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacio } from '../models/publicacio.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicacionsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // Obtener todas las publicaciones
  getPublicacions(): Observable<Publicacio[]> {
    return this.http.get<Publicacio[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Obtener publicacion por usuario
  getPublicacionsPerUsuari(userId: number): Observable<Publicacio[]> {
    return this.http.get<Publicacio[]>(`${this.apiUrl}?userId=${userId}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Obtener una publicacion por id
  getPublicacio(id: number): Observable<Publicacio> {
    return this.http.get<Publicacio>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Crear una publicacion
  crearPublicacio(publicacio: Omit<Publicacio, 'id'>): Observable<Publicacio> {
    return this.http.post<Publicacio>(this.apiUrl, publicacio)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Gestión de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`
    } else {
      // Error del servidor
      errorMessage = `Codigo de error: ${error.status}, Mensaje: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(() => Error(errorMessage))
  }
}
