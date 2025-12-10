import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Usuari } from "../models/usuari.model";

@Injectable({
    providedIn: 'root'
})
export class UsuarisService {
    private apiURL = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient){};

    // Obtener todos los usuarios
    getUsuaris(): Observable<Usuari[]> {
      return this.http.get<Usuari[]>(this.apiURL)
        .pipe(
          catchError(this.handleError)
        );
    }

    // Obtener un usuario por ID
    getUsuari(id: number): Observable<Usuari> {
      return this.http.get<Usuari>(`${this.apiURL}/${id}`)
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
