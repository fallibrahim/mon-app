import { Injectable } from '@angular/core';
import { IProduct } from '../models/produit';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items : IProduct[] = [];
  constructor(
    private http : HttpClient
  ) { }

  public addToCart(product:IProduct) {
   this.items.push(product);
  }
  public getItems() {
    return this.items;
  }
  public clearItems() {
    this.items = [];
    return this.items;
  }

  public getPrixExpedition() {
    return this.http.get<{type : string, price : number}[]>('/assets/expedition.json');
  }
  
}
