import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Giorgio',
      lastname: 'Cannone',
      email: 'giorgio@gmail.com',
      fiscalcode: 'RDGEGRWFED53',
      province: 'Roma',
      phone: '436551848',
      age: 28
    },
    {
      id: 2,
      name: 'Giulia',
      lastname: 'Verdi',
      email: 'giulia@gmail.com',
      fiscalcode: 'GLVRDWJN53',
      province: 'Milano',
      phone: '80837272',
      age: 26
    },
    {
      id: 3,
      name: 'Mario',
      lastname: 'Rossi',
      email: 'mario@gmail.com',
      fiscalcode: 'MRSSSEIJSO4829',
      province: 'Torino',
      phone: '9583727',
      age: 51
    },
    {
      id: 4,
      name: 'Sofia',
      lastname: 'Bianchi',
      email: 'sofia@gmail.com',
      fiscalcode: 'SBSJASK33',
      province: 'Genova',
      phone: '5081081',
      age: 35
    }
  ];

  getUsers(): User[] {

    return this.users;
  }
  getUser(id: number): User | undefined {

    return this.users.find(user => user.id === id);
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
