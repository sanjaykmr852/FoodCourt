import { Component } from '@angular/core';
import { ShoppingListService } from './services/shoping-list/shopping-list-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  headerSelect:String='receipe';

  constructor(private service:ShoppingListService){}

  getSelectedHeader(selectedItem:String){
    this.headerSelect=selectedItem;
  }
}
