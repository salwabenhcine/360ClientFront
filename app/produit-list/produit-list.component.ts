import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ApiService } from '../service/api.service';
import { CartserviceService } from '../cartservice.service';
import { UserService } from '../service/user.service';
import { Produit } from '../models/produit.model';

//Slider Require Animation


//Main Slider Component



import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { PanierComponent } from '../panier/panier.component';
import { PanierService } from '../service/panier.service';
import { ProductService } from '../service/Product.service';
import { CategorieServiceService } from '../categorie-service.service';
import { Category } from '../models/Category.model';
import { SubcategoryService } from '../service/Subcategory.service';
import { Souscategory } from '../models/Souscategory.model';
import { MarqueService } from '../service/marque.service';
import { Options } from '@angular-slider/ngx-slider';
import { FavorisService } from '../service/favoris.service';
import { CartService } from '../service/cart.service';
import { Marque } from '../models/marque.model';



@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})

export class ProduitListComponent implements OnInit {
  public subCategoryList : any ;

  public List : any ;
  public marqueList : any ;
  public arrays : any ;
  image:any
  public productList : any ;
  public filterSouscategorie : any;
  public searchFiltereddata:any
  searchKey:string ="";
  products: Produit[] = [];
  previousCategory: number = 1;
  searchMode: boolean = false;
  currentCategory: any;
  date:any

wishlist:any
c!: Category
marque!:Marque
nomcategorie:any;
nomsouscat:any;
produit : any
nommarque:any
public filterSubCat :any
public Filterdata: any = {};
priceMinValue!: number;
priceHighValue!: number;
p: number = 1;
id:any
souscategories!: Souscategory
  // pagination

  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;
  constructor( private cartSevice:CartService, private marqueService:MarqueService,private favorisService: FavorisService, private actRoute :ActivatedRoute,private categoryService: CategorieServiceService,private productService: ProductService,private route: ActivatedRoute,private router:Router,
    private subCategoryService: SubcategoryService,private cartService:PanierService,private userService:UserService, private cartServiceser : CartserviceService ) { }





    isShown: boolean = false ;
toggleShow() {

  this.isShown = ! this.isShown;

  }

  searchFilter() {
    /* this.searchList = this.searchText; */
    if (this.nommarque !== '') {
      this.marqueList = this.marqueList.filter((res: { nommarque: string; }) => {
        return res.nommarque.toLowerCase().match(this.nommarque.toLowerCase());
      });
    } else if (this.nommarque === '') {
      this.ngOnInit();
    }
  }


  ngOnInit(): void {
   /** this.route.paramMap.subscribe(() => {
      this.listProducts();
    });*/

    this.marqueService.getAll()
    .subscribe(res=>{
      this.marqueList = res;
      this.marqueList.forEach((a:any) => {

     }) });
     this.nomsouscat = this.actRoute.snapshot.paramMap.get('nomsouscat')

     this.nomcategorie = this.actRoute.snapshot.paramMap.get('nomcategorie')
    this.subCategoryService.getSubategorytByCat(this.nomcategorie)
    .subscribe(res=>{
      this.subCategoryList = res;
      console.log(this.subCategoryList)
      this.subCategoryList.forEach((a:any) => {

        this.subCategoryList.map((el: { nommarque: any; marque: { nommarque: any; } }) =>
        {

          el.nommarque=el.marque?.nommarque;


    });
          })
      });

    this.productService.getProductByCat(this.nomcategorie)
    .subscribe(res=>{

      this.productList = res;
      this.arrays=res;
      this.filterSubCat=res;
      this.productList.forEach((a:any) => {

    const priceList = this.filterSubCat.map((product: { prix_de_vente: any; }) => product.prix_de_vente);
    this.priceMinValue = Math.min.apply(null, priceList);
    this.priceHighValue = Math.max.apply(null, priceList);

        this.productList.map((el: { nommarque: any; marque: { nommarque: any; } }) =>
          {

            el.nommarque=el.marque?.nommarque;

          })
      });
    console.log(this.arrays)

    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    this.nomsouscat = this.actRoute.snapshot.paramMap.get('nomsouscat')

    this.productService.getProductBySubcat(this.nomsouscat)
    .subscribe(res=>{
      this.List = res;
      this.List.forEach((a:any) => {

        this.List.map((el: { nommarque: any; marque: { nommarque: any; }; }) =>
          {

            el.nommarque=el.marque?.nommarque;

          })
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;

})



  }

onProductDetails(p: Produit) {
  this.router.navigateByUrl("/product/"+p.code);
}

forUser() {
  this.userService.forUser().subscribe(
    (response) => {
      //console.log(response);
    },
    (error)=>{
      //console.log(error);
    }
  );
}
filter(nomsouscat:string){
  this.filterSubCat=this.productList
  .filter((a:any)=>{
    if(a.souscategories.nomsouscat==nomsouscat || a.souscategories.nomsouscat==''){
      return a;
    }
  })
  console.log(this.filterSubCat);

}
tempArray:any=[];
newArray:any=[];



onChange(event:any){
  if(event.target.checked){
  this.tempArray=this.arrays.filter((e:any)=>e.marques.idmarque == event.target.value);
  //console.log(this.tempArray)
  this.filterSubCat=[];
  this.newArray.push(this.tempArray);
  console.log(this.newArray)

  for(let i=0; i<this.newArray.length;i++){
    var firstArray = this.newArray[i];
    //console.log(firstArray)
    for(let i=0; i<firstArray.length;i++){
      var obj=firstArray[i];
     this.filterSubCat.push(obj);
    //  console.log(     this.productList.push(obj) )

    }

  }

    }
  else{
    this.tempArray=this.filterSubCat.filter((e:any)=>e.marque.idmarque != event.target.value);
    this.newArray=[];
    this.filterSubCat=this.productList
    this.newArray.push(this.tempArray);
    //console.log(this.newArray)

}


}

minValue:number=0
maxValue=8
options: Options = {
  floor:1,
  ceil:200
};
filterProducts(): any {
  this.filterSubCat
    = this.productList.filter((x: { prix_de_vente: number; }) => x.prix_de_vente >= this.minValue && this.maxValue >= x.prix_de_vente);
}


//add

addCart(cartProductObj:any){
  var cartObj = {
    "productId":cartProductObj.code,
    "qty":"1",
    "prix_de_vente":cartProductObj.prix_de_vente,
    "productName":cartProductObj.name,
    "imageURL":cartProductObj.imageURL
  }
  this.cartSevice.addCart(cartObj);
 // console.log(cartObj);

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
  //console.log(cartObj);

}
}
