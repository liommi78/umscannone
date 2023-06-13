import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }
  deleteUser(){
    this.userDeleted.emit(this.user);
  }
  updateUser(){
    console.log(this.user);
    this.onSelectUser.emit(this.user);
}
}
