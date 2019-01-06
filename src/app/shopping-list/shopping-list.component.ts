import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shoping-list/shopping-list-service.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private service:ShoppingListService) { }

  ngOnInit() {
  }

}
