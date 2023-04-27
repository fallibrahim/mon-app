import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {catchError, tap } from "rxjs";
import { IProduct } from "../models/produit";


@Injectable({
    providedIn : 'root'
})

export class ProductService {

    private readonly HOTEL_API_URL  = "http://localhost:3000";
   
    constructor(private http : HttpClient){
        
    }
  
    public getProducts () : Observable<IProduct[]>  {
     return this.http
     .get<IProduct[]>(this.HOTEL_API_URL+'/Products')
     .pipe(
        tap(products => console.log('Product: ', products)),
        catchError(this.handleError)
     );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage!: string;
    if (error.status === 0) {
      console.error('An error occurred:', error.error.message);
      errorMessage = `An error occurred:, ${error.error.message}`;
       
    } else {
      console.error(
        `Backend returned code ${ error.status } `+
        `body was: ${ error.status }`);
        errorMessage = `Backend returned code ${ error.status }, ` +
        `body was: ${ error.status }`;
        
    }
    return throwError(() => new Error('Something bad happened; please try again later.' +
    errorMessage));
  }
}