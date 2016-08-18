import {Component,EventEmitter} from "@angular/core";

@Component({
  selector:"confirm-component",
  template:`
  <div>
     <h1>You submitted the following details. Is this correct?</h1>
     <p>Your name is {{myself.name}} you are {{myself.age}} years old.
      Please click on "Confirm" if you have made any changes in your details</p>
     <p>Your name: <input type="text" [(ngModel)]="myself.name" (keyup)="onKeyup()"/> </p>
     <p>Your age: <input type="text" [(ngModel)]="myself.age" (keyup)="onKeyup()"/> </p>
     <p>Filled out: {{isfilled}}</p>
     <p>Valid: {{isValid}}</p>
     <button [disabled]="!isValid" (click)="onSubmit()">Confirm</button>
  </div>
  `,
  inputs:['myself'],
  outputs:['confirmed']

})

export class ConfirmComponent{
 isfilled=false;
 isValid=false;
 myself={name:'',age:''};

 confirmed=new EventEmitter<{name:string,age:string}>();
 onSubmit(){
   this.confirmed.emit(this.myself);
 }

 onKeyup() {
   if(this.myself.name !='' && this.myself.age != ''){
     this.isfilled=true;
   }
   else{
     this.isfilled=false;
   }
   if(this.myself.name!='' && /^\d+$/.test(this.myself.age)){
     this.isValid=true;
   }
   else{
     this.isValid=false;
   }
 }
}
