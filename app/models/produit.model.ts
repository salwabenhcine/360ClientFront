import { Marque } from "./marque.model";
import { Souscategory } from "./Souscategory.model";
import { Category } from "./Category.model";
export class Produit {
  public code!: string;
  public name? : string;
  public codebarre? : string;
  public imageURL?: File;
  public prix_de_vente?: number;
  public description? : string;
  public unite? : string;
  public  qte?: number=1;
  public available?: boolean;
  public Quantity?:any;
  public marques? : Marque ;
  public categories?:Category={nomcategorie:""}
  public souscategories?:Souscategory={nomcategorie:""}
}


