import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Product} from '../products/product';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() productsToBuy;
  displayedColumns: string[] = ['position', 'name', 'unit', 'price', 'modify', 'remove'];

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  add(product: Product) {
    this.productsToBuy.map((p) => {
      if (product.name == p.name) {
        return p.unit++;
      }
    });
  }

  remove(product: Product) {
    this.productsToBuy.map((p) => {
      if (product.name == p.name && p.unit > 0) {
        return p.unit--;
      }
    });
  }

  delete(product: Product) {
    this.productsToBuy = _.remove(this.productsToBuy, function(p) {
      return p.name != product.name;
    });
    this._snackBar.open('The Product ' + product.name + ' is deleted', 'OK', {
      duration: 2000,
    });
  }

}
