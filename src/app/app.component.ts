import { CertificadoService } from './_services/certificado.service';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";



import { BaseUiComponent } from './_components/base-ui/base-ui.component';



import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BaseUiComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gerador_certificados_angular';
  exibeNavbar: boolean = true;

  constructor(private CertificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.CertificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
