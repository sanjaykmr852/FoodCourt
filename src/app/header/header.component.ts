import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ReceipeDataService } from '../services/receipe-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('selectedHeaderItem') selectedHeader=new EventEmitter<String>();

  activeHeader:String='';

 

  constructor(private receipeDataService:ReceipeDataService) { }

  ngOnInit() {
  }

  onClickHeader(selctedItem:String){
    this.activeHeader=selctedItem;
    this.selectedHeader.emit(selctedItem);
    if(selctedItem=='payment'){
      this.receipeDataService.isPaymentClicked.next(true);
    }
      }

}
