export { AppServerModule as default } from './app/app.module.server';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideServerRendering,  } from '@angular/platform-server';

bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    //provideClientHydration() // Ajoute cette ligne
  ]
}).catch(err => console.error(err));
