import { Produit } from "./produit.model";

export class CartItem {
  [x: string]: any;
  id: any;
  name?: any;
  imageURL?: any;
  prix_de_vente?: any;

  quantity: number;
  qte:number =1;

  constructor(product: Produit){
      this.id= product.code;
      this.name = product.name;
      this.image = product.imageURL;
      this.prix_de_vente = product.prix_de_vente;
      this.quantity = 1;
  }
}
