import {User} from './models/user.interface';

export const Users: [User] = [
  {
    name: 'test',
    password: 'test',
    email: 'test@mail.ru',
    id: '1'
  },
  {
    email: 'admin',
    name: 'admin@mail.com',
    password: 'admin',
    id: '2'
  }, {
    name: 'admin@admin.com',
    email: 'admin@admin.com',
    id: '3',
    password: 'admin'
  }
];
