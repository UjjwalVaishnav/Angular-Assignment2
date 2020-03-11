import { InMemoryDbService } from 'angular-in-memory-web-api';

import { employee } from './employee';

export class EmployeeData implements InMemoryDbService {

  createDb() {
    const employee: employee[] = [
      {
        id:1,
        fname:'ujjwal',
        contact:19898988,
        address:'nadiad',
        email:'a@gmail.com',
        experience:0,
        gender:'male',
        lname:'vaishnav',
        password:'123',
        qualification:'BCA',
        username:'uv',
        codingLanguages:['java']
      },
      {
        id:2,
        fname:'vipul',
        contact:11111,
        address:'nadiad',
        email:'vipul@gmail.com',
        experience:0,
        gender:'male',
        lname:'vasava',
        password:'123',
        qualification:'BCA',
        username:'vipul',
        codingLanguages:['java']
      },
      {
        id:3,
        fname:'hitman',
        contact:444444,
        address:'nadiad',
        email:'hit@gmail.com',
        experience:0,
        gender:'male',
        lname:'pool',
        password:'123',
        qualification:'BCA',
        username:'hitmanpool',
        codingLanguages:['java']
      }
    ];
    return { employee };
  }
}
