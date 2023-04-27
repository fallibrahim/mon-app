import { Component} from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 public items = this.cartService.getItems();

 public verifierForm = new FormGroup({
  name : new FormControl(''),
  address : new FormControl('')
 })
  constructor(
    private cartService: CartService,
    private formBuilder : FormBuilder
          ) { }

    public onSubmit() : void {
     // Traiter les données de paiement ici
     this.items = this.cartService.clearItems();
     console.warn('Votre commande a été soumise',this.verifierForm.value);
     this.verifierForm.reset();
  }

}
