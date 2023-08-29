import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from 'src/app/http-service.service';

import { CartService } from 'src/app/service/cart.service';
import { AuthentificationService } from '../service/authentification.service';
import { User } from '../models/user';
@Component({
  selector: 'app-check-final',
  templateUrl: './check-final.component.html',
  styleUrls: ['./check-final.component.css']
})
export class CheckFinalComponent implements OnInit {
  commandes: any[] = [];
  user!:User
  cd!:String
  constructor(private cartService:CartService,private http:HttpServiceService,private actRoute :ActivatedRoute,private Au:AuthentificationService) {
    this.commandes = this.cartService.getCmd();
    this.getNomEtPrenom();
  }

  ngOnInit(): void {

}
getNomEtPrenom(): void {
  if (this.commandes && this.commandes.length > 0) {
    const nomsEtPrenoms: string[] = this.commandes.map(cmd => cmd.nom_et_prenom);
    console.log(nomsEtPrenoms);
  } 
}


  }
