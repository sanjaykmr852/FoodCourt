import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receipe/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';
import { ZoomImageDirective } from './directives/zoom-image.directive';
import { DropdownOpenDirective } from './directives/dropdown-open.directive';
import {ShoppingListService} from './services/shoping-list/shopping-list-service.service'
import { UrlMapperModule } from './url-mapper/url-mapper.module';
import { SummaryDialogComponent } from './shopping-edit/summary-dialog/summary-dialog.component';
import { ShoppingListDirective } from './directives/shopping-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ZoomImageDirective,
    DropdownOpenDirective,
    SummaryDialogComponent,
    ShoppingListDirective
    ],
  imports: [
    BrowserModule,
    FormsModule,
    UrlMapperModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
