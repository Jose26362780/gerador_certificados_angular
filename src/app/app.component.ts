import { Component } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component';
import { ItemCertificadoComponent } from "./_components/item-certificado/item-certificado.component";
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CertificadosComponent } from "./pages/certificados/certificados.component";
import { CertificadosFormComponent } from "./pages/certificado-form/certificado-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PrimaryButtonComponent, SecondaryButtonComponent, ItemCertificadoComponent, BaseUiComponent, CertificadosComponent, CertificadosFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerador_certificados_angular';
  exibeNavbar: boolean = false;
}
