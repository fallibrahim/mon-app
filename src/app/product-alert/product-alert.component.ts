import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/produit';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() product: IProduct | undefined;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
}
