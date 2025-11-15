import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.mensagem();
  }
   mensagem( ){
  console.log('Meu componente navbar Inicializou! ( Dentro de uma função )');
   }
}
