import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.css']
})
export class ExpeditionComponent implements OnInit {
  constructor(private cartService : CartService) { }
  public fraisLivraisons!: Observable<{type : string, price : number}[]>;

  ngOnInit(): void {
    this.fraisLivraisons = this.cartService.getPrixExpedition();
  }

}
