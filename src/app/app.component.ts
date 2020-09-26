import {Component, OnInit} from '@angular/core';
import {Product} from './products/product';
import {Router} from '@angular/router';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ELEMENT_DATA: Product[] = [
    {position: 1, name: 'Potatoes', unit: 1, price: 5},
    {position: 2, name: 'Carrots', unit: 1, price: 4},
    {position: 3, name: 'Onions', unit: 1, price: 2},
  ];
  title = 'test-fair4b';
  listProducts: Product[];
  productsToBuy: Product[] = [];
  cart: Product[] = [];
  router: Router;

  constructor(router: Router, private _snackBar: MatSnackBar) {
    this.router = router;
  }

  ngOnInit(): void {
    this.listProducts = this.ELEMENT_DATA;
  }

  addProduct(addedProduct: Product) {
    this._snackBar.open('The Product ' + addedProduct.name + ' added to cart', 'OK', {
      duration: 2000,
    });
    let selectedProduct = _.find(this.productsToBuy, p => p.name === addedProduct.name);
    if (selectedProduct) {
      selectedProduct.unit++;
    } else {
      this.productsToBuy.push(_.clone(addedProduct));
    }

  }
}
