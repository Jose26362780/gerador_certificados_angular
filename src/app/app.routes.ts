import { CertificadosFormComponent } from './pages/certificado-form/certificado-form.component';
import { CertificadoComponent } from './pages/certificado/certificado.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path:"",
    component:CertificadosComponent,

  },


  {
  path:"certificados/novo",
  component:CertificadosFormComponent

},

{
  path:"certificados/:id",
  component: CertificadoComponent

}

];
