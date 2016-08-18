import {Component,EventEmitter} from "@angular/core";

@Component({
  selector:"input-component",
  template:`
    <div>
       <h1>Your details, please</h1>
       <p>Your name: <input type="text" [(ngModel)]="myself.name" (keyup)="onKeyup()"/> </p>
       <p>Your age: <input type="text" [(ngModel)]="myself.age" (keyup)="onKeyup()"/> </p>
       <p>Filled out: {{isfilled}}</p>
       <p>Valid: {{isValid}}</p>
       <button [disabled]="!isValid" (click)="onSubmit()">Submit</button>
    </div>
  `,
  outputs:['submitted'],
  inputs:['myself']
})

export class InputComponent{
  isfilled=false;
  isValid=false;
  myself={name:'', age:''};
  submitted=new EventEmitter<{name:string,age:string}>();

  onSubmit(){
    this.submitted.emit(this.myself);
  };
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
