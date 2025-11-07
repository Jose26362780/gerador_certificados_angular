import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
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
