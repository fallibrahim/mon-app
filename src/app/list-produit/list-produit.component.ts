import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/produit';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
 public products:IProduct[] = [];
 public errMessage : string | undefined;
 constructor(private injected :ProductService) { }

  ngOnInit(): void {
    this.injected.getProducts().subscribe({
      next : products => this.products = products,
      error : err => this.errMessage = err
    })
  }
 share() : void {
   window.alert("le produit à été partagé!");
 }

 onNotify() : void {
  window.alert('Vous serez averti lorsque le produit sera en vente');
}
}
