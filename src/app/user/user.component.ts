import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
//Type aliases
//type User = {
//  id: string;
//  avatar: string;
//  name: string;
//}

//interface
//interface User {
//    id: string;
//    avatar: string;
//   name: string;
//}


@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
  //@Input({ required: true }) id!: string;
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();


  //Using input signal
 /* 

 import { Component, computed, input, output } from '@angular/core';

    id = input.required<string>();
    avatar = input.required<string>();
    name = input.required<string>();
    select = output<string>();

    imagePath = computed(() => {
      return 'assets/users/'+this.avatar(); 
    } )

    on html - 

     <button (click)="onSelectUser()">
        <img [src]="imagePath()" [alt]="name()"/>
        <span>{{ name() }}</span>
    </button>

    onSelectUser() {
    this.select.emit(this.id());

  }

  */ 

  get imagePath() {
    return 'assets/users/'+this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);

  }
 
}
