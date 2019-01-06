import { Component, OnInit } from '@angular/core';
import { receipe } from './receipe-model/receipe.model';
import { ReceipeDetail } from './receipe-model/receipe-detail.model';
import { ReceipeDataService } from '../services/receipe-data.service';

@Component({
  selector: 'receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {
 selectedReceipe:receipe;
 clearQuantity:boolean;

 
  receipeList:receipe[]=[];
  
    constructor(private receipeDataService:ReceipeDataService) {
      this.receipeList=this.receipeDataService.receipeList;
     }

  ngOnInit() {
  }
  
  getSelectedReceipeFromChild(receipeData:{receipe:receipe}){
    this.selectedReceipe=receipeData.receipe;
    this.clearQuantity=true;
  }

}
