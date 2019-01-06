import { Component, OnInit, Input } from '@angular/core';
import { receipe } from '../receipe-model/receipe.model';
import {ShoppingListService} from '../../services/shoping-list/shopping-list-service.service'
import { ReceipeDataService } from 'src/app/services/receipe-data.service';
@Component({
  selector: 'receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {

  quantity;
  amount;
  
  totalAmount;

  @Input () test:receipe;
  
  constructor(private shoppingService:ShoppingListService,private receipeDataService:ReceipeDataService) {
    this.amount=document.getElementById('amount-input');
      }

      addToShoopingList(event){
        var data={};
        data['itemName']=this.test.header;
        data['quantity']=this.quantity;
        data['totalAmount']=this.totalAmount;
        this.shoppingService.addtoShoppingList(this.test,data);
      }

      getQuantity(event){
        var amount;
        this.amount=document.getElementById('amount-input')['value'];
        this.quantity=event.target.value;
        //amount=this.amount.match('[1-9]')||this.amount.match('[1-9][1-9]');
        amount=this.test['receipeAmount'].split(' ');
        this.totalAmount='₹ '+(parseInt(amount[1])*parseInt(this.quantity));
      }

  ngOnInit() {
    this.amount=this.test.receipeAmount;
    this.receipeDataService.isReceipeChanged.subscribe(
      (data)=>{
        this.quantity=null;
        this.totalAmount=null;
      }
    )
  }

  

}
