import { Injectable } from '@angular/core';
import { SubjectSubscriber, Subject } from 'rxjs/internal/Subject';
import { receipe } from '../receipe/receipe-model/receipe.model';

@Injectable({
  providedIn: 'root'
})
export class ReceipeDataService {

  receipeList:receipe[]=[ 
    new receipe('assets/chicken-briyani.jpg','Chicken Briyani','Spicy Chicken Dum briyani','₹ 80',80),
    new receipe('assets/dosa.jpg','Dosai','Delicious Yummy Dosai','₹ 8',8),
    new receipe('assets/mutton-briyani.jpg','Mutton Briyani','Hyderabad Mutton Briyani','₹ 100',100),
    new receipe('assets/chicken-lollipop.jpg','Chicken Lollipop','Special Chicken Lollipop','₹ 60',60),
    new receipe('assets/fish-fry.jpg','Fish Fry','Vanjaram Fish Fry','₹ 250',250),
    new receipe('assets/fish-finger.jpg','Fish Finger','Fish Finger','₹ 120',120)
  ];

  receipeImgMap={};

  isReceipeChanged=new Subject<any>();

  isPaymentClicked=new Subject<any>();

  constructor() {
    this.setImagePathMap();
   }

   setImagePathMap(){
     var data={};
    this.receipeList.forEach((value,key)=>{
      data[value.header.toString()]=value;
    });
    this.receipeImgMap=data;
   }
  
}
