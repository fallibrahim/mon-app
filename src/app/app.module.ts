import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ExpeditionComponent } from './expedition/expedition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: ListProduitComponent},
      { path:'products/:productId', component: ProductDetailComponent},
      { path:'cart', component: CartComponent},
      { path:'expedition', component : ExpeditionComponent }
    ])
  ],
  declarations: [
    AppComponent,
    ListProduitComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    CartComponent,
    TopBarComponent,
    ExpeditionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
