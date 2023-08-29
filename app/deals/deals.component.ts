import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../service/marque.service';
import { Marque } from '../models/marque.model';
import { DealComponent } from '../deal/deal.component';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor(private marque:MarqueService) { }

  ngOnInit(){



}}
