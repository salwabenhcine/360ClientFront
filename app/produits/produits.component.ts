import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/produit.model';
import { User } from '../models/user';
import { ProduitService } from '../produit.service';
import { AuthentificationService } from '../service/authentification.service';
import { CartService } from '../service/cart.service';
import { FavorisService } from '../service/favoris.service';
import { ProductService } from '../service/Product.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  n_neighbors:any;
  datepd:any
   datepf:any
    datecd:any
    datecf:any
    produits:Array<any>=[]
    user!:User;
    id:any
   Products: Produit[] =[]
P!:any
commonProducts: Produit[] = [];


  constructor( private actRoute :ActivatedRoute,private router:Router,private produitsService:ProduitService,private auth:AuthentificationService, private pro: ProductService,private cartSevice:CartService,private favorisService: FavorisService, ) { }

  ngOnInit(){
 // Fetch all products
this.pro.getAll().subscribe(res => {
  this.Products = res;
  console.log(this.Products);

  // Fetch common products using the other service
  this.produitsService.getProduits(this.id, this.n_neighbors, this.datepd, this.datepf, this.datecd, this.datecf)
  .subscribe(result => {
    this.produits = result.code;
    console.log(this.produits);

    // Find common products between the two lists
    this.commonProducts = this.Products.filter(product1 => this.produits.includes(product1.code));
    console.log(this.commonProducts);
  });
});

  }
  addCart(cartProductObj:any){
    var cartObj = {
      "productId":cartProductObj.code,
      "qty":"1",
      "prix_de_vente":cartProductObj.prix_de_vente,
      "productName":cartProductObj.name,
      "imageURL":cartProductObj.imageURL
    }
    this.cartSevice.addCart(cartObj);
    console.log(cartObj);
    console.log(cartProductObj)

  }
  addtofave(cartProductObj:any){
    var cartObj = {
      "productId":cartProductObj.code,
      "qty":"1",
      "prix_de_vente":cartProductObj.prix_de_vente,
      "productName":cartProductObj.name,
      "imageURL":cartProductObj.imageURL
    }
    this.favorisService.addCartTofavoris(cartObj);
    console.log(cartObj);

  }
  onProductDetails(p: Produit) {
    this.router.navigateByUrl("/product/"+p.code);
  }
  }
