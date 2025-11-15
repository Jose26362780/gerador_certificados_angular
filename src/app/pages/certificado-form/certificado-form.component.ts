import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { AngularJSUrlCodec } from '@angular/common/upgrade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificados-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent,FormsModule,CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrls: ['./certificado-form.component.css'],
})
export class CertificadosFormComponent {

  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];

  campoInvalido(control:NgModel){
    return control.invalid && control.touched;
  }

   formValido () {
    return this.atividades.length > 0  && this.nome.length > 0;
   }

   adicionarAtividade() {
    this.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.atividades.splice(index, 1);
  }
}
