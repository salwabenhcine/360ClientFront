import { Category } from "./Category.model";
export class Souscategory {
  idsouscategorie?: number;
  nomsouscat?: string;
  description?: string;
  imageUrl?: File;
  idcategorie?: number;
  nomcategorie?: string;
  category? : Category;
}
