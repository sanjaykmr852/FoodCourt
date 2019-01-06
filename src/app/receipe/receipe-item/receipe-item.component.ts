import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { receipe } from '../receipe-model/receipe.model';
import { ReceipeListComponent } from '../receipe-list/receipe-list.component';
import { ReceipeDataService } from 'src/app/services/receipe-data.service';

 
@Component({
  selector: 'receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  list:{}={};
  @Input() receipeList:receipe[];

  @Output() selectedReceipeItem=new EventEmitter<{receipe:receipe}>();


  constructor(private receipeDataservice:ReceipeDataService) {
    
   }
  ngOnInit() {
    for(var i=0;i<this.receipeList.length;i++){
      var receipe=this.receipeList[i];
     var key=receipe['header'];
     this.list[key.toString()]=receipe;
    }
  }

  onClickItem(event){
    var id=event.currentTarget.getAttribute('id');
    var receipeDetailName=document.getElementById('receipe-detail-name');
    if(receipeDetailName.textContent.search(id)<0){
      this.selectedReceipeItem.emit({receipe: this.list[id]});
    this.receipeDataservice.isReceipeChanged.next(event);
    }
  }

  

}
