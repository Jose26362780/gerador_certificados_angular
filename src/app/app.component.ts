import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component.spec';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PrimaryButtonComponent,SecondaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerador_certificados_angular';
  exibeNavbar: boolean = false;
}
