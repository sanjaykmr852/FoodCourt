import { receipe } from "src/app/receipe/receipe-model/receipe.model";


export class ShoppingListService{

    shoppingList:Map<any,any>=new Map();

    paymentDialogstatus=false;
    
    constructor(){
    }

    addtoShoppingList(key:receipe,receipe:object){
        this.shoppingList.set(key.header,receipe);
    }

    removeFromShoppingList(key:string){
        this.shoppingList.delete(key);
    }
}