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
    description: 'Product Description',
    inventory: 10,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  };

  soldOut: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addProduct() {
    if(this.cantidad < this.product.inventory){
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  }
  

  removeProduct() {
    if (this.cantidad > 0) { 
      this.soldOut = false;
      this.cantidad--;
    }
  }
  
}
