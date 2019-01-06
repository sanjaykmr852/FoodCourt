import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ReceipeComponent } from '../receipe/receipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

const routes:Routes=[
  {path:'receipe', component:ReceipeComponent},
  {path:'shoppingList', component:ShoppingListComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class UrlMapperModule { }
