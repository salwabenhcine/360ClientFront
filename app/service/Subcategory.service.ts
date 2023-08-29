import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Souscategory } from '../models/Souscategory.model';




const httpOptions = {
  headers: new HttpHeaders().append('Content-Type', 'multipart/form-data'),
};
@Injectable({
  providedIn: 'root'
})


export class SubcategoryService {

  private host:string="http://localhost:8083/api/subcategory/";

  constructor(private http:HttpClient) {
  }
  getSubategorytByCat(nomcategorie:string): Observable<Souscategory[]> {
    return this.http.get<Souscategory[]>(`${this.host}SubCat/${nomcategorie}`);
  }

getSubategorytBySubCatt(nomsouscat:string): Observable<Souscategory[]> {
  return this.http.get<Souscategory[]>(`${this.host}productSubcategory/${nomsouscat}`);
}
}
