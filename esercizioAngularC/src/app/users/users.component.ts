
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-users',

  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit, AfterViewInit {
  title = 'Users'
  public users$: Observable<User[]> = this.service.getUsers();

  @Output('updateUser') updateUser = new EventEmitter<User>();
  @ViewChildren(UserComponent, {read: ElementRef}) trs!: QueryList<ElementRef>

  constructor(private service: UserService) {
  }
  ngAfterViewInit(): void {
    console.log('after view init', this.trs);
  }
  ngOnInit(): void {
  }
  onDeleteUser(user: User) {
    this.service.deleteUser(user).subscribe(res =>{
      this.trs.forEach(elements => {
        const el = elements.nativeElement;
        if(Number (el.id) === user.id) {
          el.parentNode.removeChild(elements.nativeElement);
        }
      })
    });
  }
  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);

  }
}
