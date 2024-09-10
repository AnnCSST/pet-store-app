import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() {
    console.log('1. Constructor: Inicialización del componente');
  }

  ngOnInit(): void {
    console.log('2. ngOnInit: Componente inicializado');
  }

  ngAfterViewInit(): void {
    console.log('3. ngAfterViewInit: Vista del componente inicializada');
  }

  ngOnDestroy(): void {
    console.log('4. ngOnDestroy: Componente destruido');
  }

}

