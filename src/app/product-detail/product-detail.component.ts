import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { IProduct } from '../models/produit';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

   public product : IProduct | undefined;

   constructor(
    private route : ActivatedRoute,
    private injected : ProductService,
    private cartService : CartService
    ) { }

  ngOnInit(): void { 
    // Obtient d'abord l'identifiant du produit à partir de la route actuelle
      const id : number = Number(this.route.snapshot.paramMap.get('productId')); 
    // Trouve le produit qui correspond à l'identifiant fourni dans route.
      this.injected.getProducts().subscribe((products:IProduct[])=>{
      this.product = products.find((product:IProduct) => product.id === id);
      console.log('product : '+ this.product);
    })
  }
  
  public addToCart(product:IProduct) {
    this.cartService.addToCart(product);
    window.alert('Votre produit a été ajouté au panier !');
  }
}
