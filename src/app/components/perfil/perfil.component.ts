import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

    listadoUsuarios:any;
    nombreUsuario:any;
    email:any;
    getUsuarioData:any;

  constructor(private dashboardService:DashboardService, private usuarioService:UsuarioService) { }

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
            console.log(this.getUsuarioData);
               
          }
        })
      },
      error =>{
        console.log(error);
      }
    );

  
    
  }


}
