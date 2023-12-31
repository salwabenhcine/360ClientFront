import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { Category } from '../models/Category.model';
import { Produit } from '../models/produit.model';
import { ApiService } from '../service/api.service';
import { AuthentificationService } from '../service/authentification.service';
import { CartService } from '../service/cart.service';
import { PanierService } from '../service/panier.service';
import { ProductService } from '../service/Product.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  produitsData: any;

  constructor(private productService:ProductService,private cartSevice:CartService,  private actRoute: ActivatedRoute,private api : ApiService, private caddyService: PanierService, private router: Router,private authService:AuthentificationService, private userService:UserService) { }
  public productList :any ;
  public filterSouscategorie : any;
  searchKey:string ="";
  p!:Produit;
  message!: string;
  prod:any
  productID:any;
  cartItems!: CartItem[];
  quantity=1
  product!: Produit
  category!:Category
categoryNames:any
  ngOnInit():void{
    const productID = this.actRoute.snapshot.paramMap.get('code');
    this.productService.getData(productID).subscribe((product: any) => {
      this.product = product;
      console.log(this.product)
    });

  }

  isShown: boolean = false ;
  toggleShow() {

    this.isShown = ! this.isShown;

    }
    getData(productID: number){
      this.productService.getData(productID).subscribe((product: any) => {
        this.product = product;
        console.log(this.product);

      });
    }
  incrementQuantity(){
  this.quantity+=1;

  }
  decrementQuantity(){
    if(this.quantity<1)
{    this.quantity=1
  }
  else
  this.quantity-=1;
}

addCart(cartProductObj:any){
  var cartObj = {
    "productId":cartProductObj.code,
    "qty":this.quantity,
    "prix_de_vente":cartProductObj.prix_de_vente*this.quantity,
    "productName":cartProductObj.name,
    "imageURL":cartProductObj.imageURL
  }
  this.cartSevice.addCart(cartObj);
  console.log(cartObj);

}
}

