import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoping-list/shopping-list-service.service';
import { receipe } from 'src/app/receipe/receipe-model/receipe.model';

@Component({
  selector: 'app-summary-dialog',
  templateUrl: './summary-dialog.component.html',
  styleUrls: ['./summary-dialog.component.css']
})
export class SummaryDialogComponent implements OnInit {

  quantity=0;

  amountWithCurrency;

  amount=0;

  constructor(private service:ShoppingListService) { }

  ngOnInit() {
    this.service.shoppingList.forEach((value,key)=>{
      this.quantity+=value['quantity'];
      this.amount+=+value['totalAmount'].split(' ')[1];
    });
    this.amountWithCurrency='₹ '+this.amount;
  }

  onClickClose(){
    this.service.paymentDialogstatus=false;
  }

}
