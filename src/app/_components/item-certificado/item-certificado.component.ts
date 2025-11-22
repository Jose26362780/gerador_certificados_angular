import { Component, Input } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { Router, } from "@angular/router";

@Component({
  selector: 'app-item-certificado',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrls: ['./item-certificado.component.css']
})
export class ItemCertificadoComponent {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string  = '';
  @Input() id: string =' 0';




  constructor(private router:Router){}

    redirecionaCertificado(){
      this.router.navigate(['/certificados', this.id]);
    }

  }

