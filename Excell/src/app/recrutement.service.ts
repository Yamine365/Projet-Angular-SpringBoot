import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecrutementService {

  private apiUrl = 'http://localhost:8081/api/candidatures'; // URL backend 

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer les données, y compris les fichiers
  saveCandidat(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
