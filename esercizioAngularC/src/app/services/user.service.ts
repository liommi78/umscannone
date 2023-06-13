import { Injectable } from "@angular/core";
import { User } from "../classes/User";
import { UserInterface } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [{
    id: 1,
    name: 'Giorgio',
    lastname: 'Cannone',
    email: 'giorgio@gmail.com',
    fiscalcode: 'RFAFRWFD23431',
    province: 'Roma',
    phone: '21521498391',
    age: 28
  },
  {
    id: 2,
    name: 'Giulia',
    lastname: 'Verdi',
    email: 'giulia@gmail.com',
    fiscalcode: 'GETEETGET42',
    province: 'Milano',
    phone: '25995729923',
    age: 30
  },
  {
    id: 3,
    name: 'Mario',
    lastname: 'Rossi',
    email: 'mario@gmail.com',
    fiscalcode: 'MRSSSEGEFS32',
    province: 'Torino',
    phone: '21521498391',
    age: 35
  },
  {
    id: 4,
    name: 'Franco',
    lastname: 'Verdi',
    email: 'franco@gmail.com',
    fiscalcode: 'FRRJJNIN525',
    province: 'Roma',
    phone: '4652315',
    age: 43
  }
]
getUsers() {
  return this.users;
}

deleteUser(user: User) {
  const index = this.users.indexOf(user);
  if (index > -1) {
    this.users.splice(index, 1);
  }
}

updateUser(user: UserInterface) {
  const idx = this.users.findIndex(v => v.id === user.id);
  if (idx !== -1) {
    this.users[idx] = { ...user };
  }
}

createUser(user: UserInterface) {
  this.users.splice(0, 0, { ...user });
  }
}
