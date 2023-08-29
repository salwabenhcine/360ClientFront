import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpServiceService } from '../http-service.service';
import { Produit } from '../models/produit.model';
//import { WishItem } from '../models/show-carts';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  public FavoriServiceEvent = new BehaviorSubject({});
  cartQty = 0;
  cartwish:any=[];

  constructor(private http:HttpServiceService) {

   this.getCartDetailsByUser();

   }

   getCartDetailsByUser(){
    this.http.postRequestWithToken("api/wishlist/getCartsByUserId",{}).subscribe((data:any)=>{
     //alert("Error while fetching the cart Details");
     this.cartwish = data;
     this.FavoriServiceEvent.next({"status":"completed"})//emitter

    })
  }

  addCartTofavoris(obj:any){
    //this.cartServiceEvent.next({"status":"completed"})//emitter
    var request  = {
      "productId":obj.productId,
      "qty":obj.qty,
      "prix_de_vente":obj.prix_de_vente,
      "imageURL":obj.imageURL,
      "productName":obj.productName
    }
    this.http.postRequestWithToken("api/wishlist/addProduct",request).subscribe((data:any)=>{
    },
    error=>{
      //if the products is already in cart
        alert("Déja Ajouté aux favoris");
    })
  }
  getCartOBj(){
    return this.cartwish;
  }

  getQty(){
    return this.cartQty;
  }


  removeCart(cartId:any){
    var request = {
        "productId":"dummy_val",
        "cartId":cartId,
    }
    this.http.postRequestWithToken("api/wishlist/removeProductFromCart",request).subscribe((data:any)=>{
        this.getCartDetailsByUser();
    })
}

}

