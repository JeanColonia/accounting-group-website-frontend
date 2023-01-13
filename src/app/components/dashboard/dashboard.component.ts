import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listadoUsuarios:any;
  nombreUsuario:any;
  email:any;
  getUsuarioData:any;
  rol:any;

  constructor(private router: Router, private loginService:LoginService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe(
      data =>{
        this.listadoUsuarios = data;
        this.nombreUsuario = localStorage.getItem('user');
        this.email = localStorage.getItem('email');
    
        this.listadoUsuarios.find((usuario:any) =>{
          if (
            usuario['nombreUsuario'] === this.nombreUsuario &&    
            usuario['email'] === this.email
          ) {
    
            this.getUsuarioData = usuario;
            this.rol = usuario.tipoUsuario;
            console.log("ROLLLLLLLLLLLLLLLLLLLL",this.rol);
               
          }
        })
      },
      error =>{
        console.log(error);
      }
    );
  }


 




Salir(){
  if(this.loginService.getToken() !==null || this.loginService.getToken() !==''){
    localStorage.removeItem('token');
  window.location.href='/';

  }
}


}
