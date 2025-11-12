import { Component } from '@angular/core';

@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.scss',
    standalone: false
})
export class AccueilComponent {
   // Ouvrir l'email
   openMail() {
    window.location.href = 'mailto:excellcompta@gmail.com'; // Remplace avec l'email de la société
  }

  // Ouvrir LinkedIn
  openLinkedIn() {
    window.open('https://www.linkedin.com/company/excell', '_blank'); 
  }

  // Ouvrir la localisation
  openLocation() {
    window.open('https://maps.app.goo.gl/N94BFmTNGH8DfQ6V9?g_st=com.google.maps.preview.copy', '_blank'); 
  }

}
