import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Pour effectuer des requêtes HTTP

@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.scss'],
  standalone: false
})
export class RecrutementComponent {
  recrutement: any = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '', 
  };

  constructor(private http: HttpClient) {}

  // Méthode pour soumettre le formulaire
  onSubmit() {
    
      // Envoi des données via HTTP POST
      this.http.post('http://localhost:8081/api/candidatures', this.recrutement)
        .subscribe(response => {
          console.log('Réponse du serveur : ', response);
          alert('Candidat enregistré avec succès');
        }, error => {
          console.error('Erreur lors de l\'envoi du formulaire : ', error);
          alert('Erreur lors de l\'enregistrement du candidat');
        });
    
  }

}
