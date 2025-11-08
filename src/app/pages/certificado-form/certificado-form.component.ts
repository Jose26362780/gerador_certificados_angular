import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';

@Component({
  selector: 'app-certificados-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent],
  templateUrl: './certificado-form.component.html',
  styleUrls: ['./certificado-form.component.css'],
})
export class CertificadosFormComponent {}
