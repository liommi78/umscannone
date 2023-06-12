import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }
}
