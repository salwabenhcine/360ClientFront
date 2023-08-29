import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Produit } from '../models/produit.model';
import { Souscategory } from '../models/Souscategory.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8083/api/product/';

  host: string = 'http://localhost:8083/api/product';
  list: any = [];
  code?: any;
  categoryId?:any;
  subCategoryId?: any;
  marqueId?: any;
  image?:File;
  public formData?: FormGroup;
  productId?: any;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl);
  }
  createData(
    file: File,
    // id: number,
    description: string,
    idsouscategorie: number,
    name: string,
    codebarre: string,
    prix_de_vente: number,
    unite: string,
    qte: number,
    available: boolean,
    idcategorie: number,
    idmarque: number
  ): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    // formData.append('id', id.toString());
    formData.append('name', name);
    formData.append('codebarre', codebarre);
    formData.append('prix_de_vente', prix_de_vente.toString());
    formData.append('description', description);
    formData.append('unite', unite);
    formData.append('qte', qte.toString());
    formData.append('available', available.toString());
    formData.append('idcategorie', idcategorie.toString());
    formData.append('idsouscategorie', idsouscategorie.toString());
    formData.append('idmarque', idmarque.toString());

    const req = new HttpRequest('POST', `${this.baseUrl}upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  updateData(
    code: number,
    file: File,
    name: string,
    codebarre: string,
    prix_de_vente: number,
    description: string,
    unite: string,
    qte: number,
    available: boolean,
    idcategorie: number,
    idsouscategorie: number,
    idmarque: number
  ): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('code', this.code.toString());
    formData.append('file', file);
    formData.append('name', name);
    formData.append('codebarre', codebarre);
    formData.append('prix_de_vente', prix_de_vente.toString());
    formData.append('description', description);
    formData.append('unite', unite);
    formData.append('qte', qte.toString());
    formData.append('available', available.toString());
    formData.append('idcategorie', idcategorie.toString());
    formData.append('idsouscategorie', idsouscategorie.toString());
    formData.append('idmarque', idmarque.toString());

    const req = new HttpRequest('PUT',`${this.baseUrl}update/${this.code}`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );

    return this.http.request(req);
  }




//get details
getData(code: any): Observable<Object> {
  return this.http.get(`${this.baseUrl}${code}`);
}
  getProductByCat(nomcategorie:string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.baseUrl}productCategory/${nomcategorie}`);
  }
  getProductBySubcat(nomsouscat:string): Observable<Souscategory[]> {
    return this.http.get<Souscategory[]>(`${this.baseUrl}productSubcategory/${nomsouscat}`);
  }

  deleteData(code: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${code}`, {
      responseType: 'text',
    });
  }

  findBynameContaining(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}products?name=${name}`);
  }



}
