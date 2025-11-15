import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { FormsModule } from '@angular/forms';
import { AngularJSUrlCodec } from '@angular/common/upgrade';

@Component({
  selector: 'app-certificados-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent,FormsModule],
  templateUrl: './certificado-form.component.html',
  styleUrls: ['./certificado-form.component.css'],
})
export class CertificadosFormComponent {

  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React'];
}
