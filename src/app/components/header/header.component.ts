import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token:any;
  constructor(private loginService:LoginService, private router:Router) { }

  navbarfixed:boolean=false;
  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY>100){
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }
  }

  ngOnInit(): void {
    
    this.token = this.loginService.getToken();
    console.log(this.token);
    
  }

  removeToken(){

    localStorage.removeItem('token');
  window.location.href='/';

  }
  

}
