import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoping-list/shopping-list-service.service';
import { ReceipeDataService } from 'src/app/services/receipe-data.service';
import { receipe } from 'src/app/receipe/receipe-model/receipe.model';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  data:object[]=[];

  confirmButtonStatus=false;
  confirmButtonId='false';
  deleteButtonId='invalid';
  constructor(public service:ShoppingListService,private receipeDataService:ReceipeDataService) {

   }

  ngOnInit() {
    this.setShopingListData();
    this.receipeDataService.isPaymentClicked.subscribe((data)=>{
      this.service.paymentDialogstatus=true;
    });
  }

  setShopingListData(){
    var result=[];
    this.service.shoppingList.forEach(function(value,key){
      let imgPath:receipe=this.receipeDataService.receipeImgMap[value.itemName];
      value['img']=imgPath.imgPath;
        result.push(value);
    },this);
    this.data=result;
  }

  onEnterConfirmButton(confirmbutton,data){
    this.confirmButtonId=confirmbutton['id'];
    this.deleteButtonId=data['itemName'];
    this.confirmButtonStatus=true;
  }

  onLeaveConfirmButton(){
    this.confirmButtonId='false';
    this.confirmButtonStatus=false;
    this.deleteButtonId='invalid';
  }

  onclickDanger(data){
    console.log(data);
    this.service.removeFromShoppingList(data['itemName']);
    this.setShopingListData();
  }
}
