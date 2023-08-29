import { Component, OnInit } from '@angular/core';
import { Marque } from '../models/marque.model';
import { MarqueService } from '../service/marque.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {


  marques:Array<Marque>=[];
  MARQUESS:Array<Array<string>>=[]
  comm:Array<Marque>=[]
  M!:Array<any>;
  Cat!:Marque;
  firstColumn: Array<string> = [];
    constructor(private marque:MarqueService) { }

    ngOnInit(): void {
      this.marque.getAll().subscribe(result => {
        this.marques = result
        console.log(this.marques);

        // Find common products between the two lists
        //this.commonProducts = this.Products.filter(product1 => this.produits.includes(product1.code));
        //console.log(this.commonProducts);
      });

      this.marque.getMarques().subscribe(result => {
        this.MARQUESS = result['5716'];

        if (Array.isArray(this.MARQUESS)) {
          this.firstColumn = this.MARQUESS.map(row => row[0]);
          console.log(this.firstColumn);
          console.log(this.MARQUESS);
        } else {
          console.error('Expected an array but received', this.MARQUESS);
        }

      // Find common products between the two lists
      this.comm = this.marques.filter(marque1 => marque1.nommarque && this.firstColumn.includes(marque1.nommarque));
      console.log(this.comm);

      }
      );
        // Find common products between the two lists


    }
}
