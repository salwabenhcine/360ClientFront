import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
API ="http://localhost:8083";
jwttoken : any
requestHeader = new HttpHeaders(
{ 'No-Auth':'True'}
);
  constructor(private httpclient: HttpClient, private auth:AuthentificationService) { }

  public login(loginData:any){
    return this.httpclient.post(this.API + "/authenticate",loginData, { headers: this.requestHeader});
  }

  public register( nom_et_prenom:string,lastName:string,email:string,password:string,tel:string,date: Date,profession:string,situation_familiale:string,adress:string,ville:string,gouvernorat:string,file:File,): Observable<HttpEvent<any>>{
    var datestr = (new Date(date)).toUTCString();

    const formData: FormData = new FormData() ;
    formData.append('nom_et_prenom',nom_et_prenom);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('tel',tel);
    formData.append('datestr',datestr);
    formData.append('profession', profession);
    formData.append('situation_familiale',situation_familiale);
    formData.append('adress', adress);
    formData.append('ville', ville);
    formData.append('gouvernorat', gouvernorat);
    formData.append('file', file);


    const req = new HttpRequest('POST', `${this.API}/registerNewUser`,formData,
    {

    headers:this.requestHeader

    } );
    this.jwttoken=this.auth.getToken();

    return this.httpclient.request(req);

}


  public forUser() {
    return this.httpclient.get(this.API + '/forUser', {
      responseType: 'text',
    });
  }

  public forAdmin() {
    return this.httpclient.get(this.API + '/forAdmin', {
      responseType: 'text',
    });
  }

  verification(verificationcode: any): Observable<Object> {
    return this.httpclient.get(`${this.API}/verify/${verificationcode}`);
  }
  public roleMatch(allowedRoles : any) :boolean{
    let isMatch = false;
    const userRoles: any = this.auth.getRoles();
    if(userRoles) {
      for(let i = 0; i<userRoles.length; i++) {
        if(allowedRoles.indexOf(userRoles[i].roleName) !== -1){
         isMatch = true;
         break;
        }
      }
    }
    return isMatch;
    }


    getCustomerByEmail(email: any): Observable<any> {
      return this.httpclient.get(`${this.API}/customerbyemail/${email}`);
    }

}










