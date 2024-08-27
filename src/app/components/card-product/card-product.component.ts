import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'] // Nota: Cambié `styleUrl` a `styleUrls`
})
export class CardProductComponent implements OnInit {

  cantidad: number = 0;

  product = {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  };

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    this.cantidad++;
  }

  removeProduct() {
    if (this.cantidad > 0) { 
      this.cantidad--;
    }
  }
}
