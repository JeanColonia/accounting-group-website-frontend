import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagenService } from 'src/app/services/imagen.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  @ViewChild('imagenInputFile', { static: false }) imagenFile: ElementRef | any;

  hide = true;
  listaTipoUsuario: string[] = ['Administrador', 'Invitado', 'Docente', 'Otro'];

  usuario:any;
  constructor(
     private activatedRouter: ActivatedRoute,
     private usuarioService: UsuarioService,
     private imagenService: ImagenService,
     private snack: MatSnackBar,
     private router: Router

              ) { }

  idUsuario=0;

  imagen: any;
  imagenURL: string = '';

  imagenMiniatura: any;


  ngOnInit(): void {
    this.idUsuario = this.activatedRouter.snapshot.params['idUsuario'];

    this.usuarioService.obtenerUsuario(this.idUsuario).subscribe(
      (data)=>{
        console.log(data);
        this.usuario = data;
      },
      (error) =>{
        console.error(error);
      });

  }

  onUpload(): void {
    this.imagenService.crearImagen(this.imagen).subscribe(
      (data) => {
        console.log(data);
        this.usuario.imagenUsuario = data.imagenUrl;
        console.log(this.usuario.imagenUsuario);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se agregó la imagen',
          showConfirmButton: false,
          timer: 1000,
        });
      },
      (error) => {
        console.error(error);
        this.reset();
      }
    );
  }
  onFileChange(event: any) {
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (eve: any) => {
      this.imagenMiniatura = eve.target.result;
    };

    fr.readAsDataURL(this.imagen);
  }

  reset(): void {
    this.imagen = null;
    this.imagenMiniatura = null;
    this.imagenFile.nativeElement.value = '';
    this.usuario.imagenUsuario = '';
  }

  formReset() {
    this.usuario.nombres = '';
    this.usuario.apellidos = '';
    this.usuario.email = '';
    this.usuario.nombreUsuario = '';
    this.usuario.tipoUsuario = '';
    this.usuario.pass = '';
    this.usuario.activo = false;
    this.usuario.imagenUsuario = '';
  }

  agregarUsuario() {
    if (
      this.usuario.nombres.trim() == '' ||
      this.usuario.nombres == null
    ) {
      this.snack.open('El nombre de usuario es requerido *', '', {
        duration: 2000,
      });
    } else if (
      this.usuario.apellidos.trim() == '' ||
      this.usuario.apellidos == null
    ) {
      this.snack.open('Los Apellidos del usuario son requeridos *', '', {
        duration: 2000,
      });
    } else if (
      this.usuario.email.trim() == '' ||
      this.usuario.email == null
    ) {
      this.snack.open('El email del usuario es requerido *', '', {
        duration: 2000,
      });
    } else if (
      this.usuario.nombreUsuario.trim() == '' ||
      this.usuario.nombreUsuario == null
    ) {
      this.snack.open('El Username es requerido *', '', {
        duration: 2000,
      });
    } else if (
      this.usuario.pass.trim() == '' ||
      this.usuario.pass == null
    ) {
      this.snack.open('La contraseña es requerida *', '', {
        duration: 2000,
      });
    } else if (
      this.usuario.tipoUsuario.trim() == '' ||
      this.usuario.tipoUsuario == null
    ) {
      this.snack.open('El Tipo de usuario es requerido *', '', {
        duration: 2000,
      });
    } else if (
      this.usuario.imagenUsuario.trim() == '' ||
      this.usuario.imagenUsuario == null
    ) {
      this.snack.open(
        'El Usuario debe tener una imagen obligatoriamente...',
        '',
        {
          duration: 2000,
        }
      );
    } else {
      this.usuarioService.crearUsuario(this.usuario).subscribe(
        (data) => {
          console.log(data);
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se actualizó el usuario correctamente',
            showConfirmButton: false,
            timer: 1000,
          });
          this.reset();
          this.formReset();
          this.router.navigate(['dashboard/ver-usuarios']);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
