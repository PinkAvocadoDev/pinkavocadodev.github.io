import { Component } from '@angular/core';
import {NavComponent} from './nav/nav.component';
import {MainContentComponent} from './main-content/main-content.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavComponent, MainContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pinkavocadodev.github.io';
}
