import { Component } from '@angular/core';
import {InputComponent} from './input-component';
import {ConfirmComponent} from './confirm-component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <div class="inside">
      <input-component (submitted)="onSubmit($event)" [myself]="myconfirmed"></input-component>
    </div>
    <hr/>
    <div class="inside">
      <confirm-component [myself]="myself" (confirmed)="onConfirm($event)"></confirm-component>
    </div>
  `,
  styleUrls: ['app.component.css'],
  directives:[InputComponent,ConfirmComponent]
})
export class AppComponent {

  myself={name:'',age:''};
  myconfirmed={name:'',age:''};

  onSubmit(myself: {name:string,age:string}){
    this.myself={name:myself.name,age:myself.age};
  }
  onConfirm(myself: {name:string,age:string}){
     this.myconfirmed={name:myself.name,age:myself.age};
  }

}
