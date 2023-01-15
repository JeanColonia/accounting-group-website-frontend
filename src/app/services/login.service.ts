import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL:string = 'https://grupo-contable-backend-app.herokuapp.com';
  constructor() { }


  getToken(){
    return localStorage.getItem('token');
  }



}
