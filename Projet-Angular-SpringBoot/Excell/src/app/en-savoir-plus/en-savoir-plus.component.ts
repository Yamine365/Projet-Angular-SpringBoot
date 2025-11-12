import { Component } from '@angular/core';

@Component({
    selector: 'app-en-savoir-plus',
    templateUrl: './en-savoir-plus.component.html',
    styleUrls: ['./en-savoir-plus.component.scss'],
    standalone: false
})
export class EnSavoirPlusComponent {
  isModalOpen: boolean = false;

  // Méthode pour ouvrir le modal
  openModal() {
    this.isModalOpen = true;
  }

  // Méthode pour fermer le modal
  closeModal() {
    this.isModalOpen = false;
  }
}
