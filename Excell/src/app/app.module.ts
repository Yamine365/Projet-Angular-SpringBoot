import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { FormsModule } from '@angular/forms';
import { EnSavoirPlusComponent } from './en-savoir-plus/en-savoir-plus.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import nécessaire pour HttpClient

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RecrutementComponent,
    EnSavoirPlusComponent
  ],
  imports: [
    BrowserModule,  // C'est le module principal pour une application côté client
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule  // Ajout de HttpClientModule ici
  ],
  providers: [],  // Retirer provideClientHydration() si ce n'est pas une application SSR
  bootstrap: [AppComponent]
})
export class AppModule { }
