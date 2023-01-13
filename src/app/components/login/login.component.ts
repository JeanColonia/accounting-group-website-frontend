import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  token: string =
    '30B36A207230BA9234A83022B4D21BAF4CE8E4AE4B25FFDE0360A3350DC53678';

  formLogin = {
    nombreUsuario: '',
    pass: '',
  };

  ListaUsuarios: [] = [];

  hide: boolean = true;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.ListaUsuarios = data;
    });
  }

  Ingresar() {
    this.ListaUsuarios.find((user) => {
      if (
        user['nombreUsuario'] === this.formLogin.nombreUsuario &&
        user['pass'] === this.formLogin.pass
      ) {
        localStorage.setItem('token', this.token);
        localStorage.setItem('user', user['nombreUsuario']);
        localStorage.setItem('email', user['email']);
       window.location.href='/dashboard';
           
      }
      else{
        if(user['nombreUsuario'] != this.formLogin.nombreUsuario ){
          this.snack.open('El nombre de usuario es incorrecto *', '', {
            duration: 2000,
          });
          
        }
        else  if(user['pass'] != this.formLogin.pass ){
          this.snack.open('La contraseña es incorrecta *', '', {
            duration: 2000,
          });
      } 
    
    }


    });
  }
}
