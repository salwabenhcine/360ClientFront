import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

   constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }
  public getNom_et_prenom():any{
    return localStorage.getItem('nom_et_prenom');
    }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  public setEmail(email: string) {
    localStorage.setItem('email', email);
  }
  public getToken(): any {
    return localStorage.getItem('jwtToken');
  }
  public getEmail(): any {
    return localStorage.getItem('email') ;
  }
  public getLastName():any{
    return localStorage.getItem('lastName')
  }
  public getId_client(): any {
    return localStorage.getItem('id_client') ;
  }
  public getDate():any{
    return localStorage.getItem('date')
  }
  public setDate(date:Date){
    return localStorage.setItem('date', date.toString())
  }
  public setId_client(id_client:any){
    return localStorage.setItem('id_client',id_client)
  }



  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
