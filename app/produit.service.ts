import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationService } from './service/authentification.service';


@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  private apiUrl = 'http://localhost:8000/produit/';

  constructor(private http:HttpClient, private auth:AuthentificationService) { }
  getProduits(id: any, n_neighbors:any, datepd: any, datepf: any, datecd: any, datecf: any) {

    const body = {
      id:10565,
      n_neighbors:5,
      datepd:"2020/02/02",
      datepf:"2020/02/06",
      datecd:"2020/03/03",
      datecf:"2020/03/04"
    };

    return this.http.post<any>(this.apiUrl, body);
  }

}
