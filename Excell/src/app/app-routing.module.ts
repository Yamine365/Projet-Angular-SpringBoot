import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RecrutementComponent } from './recrutement/recrutement.component'; 

import { EnSavoirPlusComponent } from './en-savoir-plus/en-savoir-plus.component'; 
const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'recrutement', component: RecrutementComponent },
  { path: 'en-savoir-plus', component: EnSavoirPlusComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
