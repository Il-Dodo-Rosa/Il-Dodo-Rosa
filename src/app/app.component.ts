import { Component, computed, inject, Signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { InsegnantiComponent } from './components/insegnanti/insegnanti.component';
import { ProgettiComponent } from './components/progetti/progetti.component';
import { ContattoComponent } from './components/contatto/contatto.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from './environment';
import { LoadingComponent } from "./components/loading/loading.component";
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    InfoComponent,
    InsegnantiComponent,
    ProgettiComponent,
    ContattoComponent,
    FooterComponent,
    LoadingComponent
],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {

  configService: ConfigService = inject(ConfigService);

  title = 'Corso di Illustrazione per Bambini';
  sections = environment.sections
  hasLoading: Signal<boolean> = this.configService.hasLoaded
}
