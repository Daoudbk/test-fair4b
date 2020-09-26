import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() newProductEvent = new EventEmitter<Product>();
  @Input() listProducts;
  displayedColumns: string[] = ['position', 'name', 'unit', 'price', 'buy'];
  dataSource: Product[];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = this.listProducts;
  }

  buy(product: Product) {
    this.newProductEvent.emit(product);
  }
}
