import { Produit } from '../models/produit.model';

export class Recette {
    id?: number;
    nomRecette? : string;
    description? : string;
    imageRecette?: File;
    products? : Produit[];
}
