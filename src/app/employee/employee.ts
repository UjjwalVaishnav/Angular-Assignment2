export interface employee{
  id:number;
  fname:string;
  lname:string;
  email:string;
  contact:number;
  address:string;
  username:string;
  password:string;
  gender:string;
  qualification:string;
  experience:number;
  codingLanguages:string[];
}
export interface ProductResolved {
  employee: employee;
  error?: any;
}
