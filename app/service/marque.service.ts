import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from '../models/marque.model';

const httpOptions = {
  headers: new HttpHeaders().append('Content-Type', 'multipart/form-data'),
};

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private baseUrl = 'http://localhost:8083/api/marque/';
  private apiUrl='http://localhost:8000/marque/'

  constructor(private http:HttpClient) { }
  getAll(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.baseUrl);
  }
  getMarques() {

    const body = {
      id:5716,
      n_neighbors:20,
      datepd:"2020/01/02",
      datepf:"2020/01/03",
      datecd:"2020/01/02",
      datecf:"2020/01/03",
      dateD:"2020/01/02",
      dateF:"2020/01/03",
      d1min:2,
      d1max:8,
      d2min:5,
      d2max:1,
      d3min:1,
      d3max:2,
      d4min:1,
      d4max:7
    };

    return this.http.post<any>(this.apiUrl, body);
  }
}
