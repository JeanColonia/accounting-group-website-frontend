import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImagenService } from 'src/app/services/imagen.service';
import { UsuarioService } from '../../../services/usuario.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css'],
})
export class AddUsuarioComponent implements OnInit {
  @ViewChild('imagenInputFile', { static: false }) imagenFile: ElementRef | any;

  hide = true;
  listaTipoUsuario: string[] = ['Administrador', 'Invitado', 'Docente', 'Otro'];

  formUsuario = {
    nombres: '',
    apellidos: '',
    email: '',
    nombreUsuario: '',
    tipoUsuario: '',
    pass: '',
    activo: false,
    imagenUsuario: '',
  };

  listaEstadoUsuario: string[] = ['Activo', 'Inactivo'];
  constructor(
    private usuarioService: UsuarioService,
    private imagenService: ImagenService,
    private snack: MatSnackBar,
    private router: Router
  ) {}

  imagen: any;
  imagenURL: string = '';

  imagenMiniatura: any;

  ngOnInit(): void {}

  onUpload(): void {
    this.imagenService.crearImagen(this.imagen).subscribe(
      (data) => {
        console.log(data);
        this.formUsuario.imagenUsuario = data.imagenUrl;
        console.log(this.formUsuario.imagenUsuario);
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
    this.formUsuario.imagenUsuario = '';
  }

  formReset() {
    this.formUsuario.nombres = '';
    this.formUsuario.apellidos = '';
    this.formUsuario.email = '';
    this.formUsuario.nombreUsuario = '';
    this.formUsuario.tipoUsuario = '';
    this.formUsuario.pass = '';
    this.formUsuario.activo = false;
    this.formUsuario.imagenUsuario = '';
  }

  agregarUsuario() {
    console.log(this.formUsuario);
    if (
      this.formUsuario.nombres.trim() == '' ||
      this.formUsuario.nombres == null
    ) {
      this.snack.open('El nombre de usuario es requerido *', '', {
        duration: 2000,
      });
    } else if (
      this.formUsuario.apellidos.trim() == '' ||
      this.formUsuario.apellidos == null
    ) {
      this.snack.open('Los Apellidos del usuario son requeridos *', '', {
        duration: 2000,
      });
    } else if (
      this.formUsuario.email.trim() == '' ||
      this.formUsuario.email == null
    ) {
      this.snack.open('El email del usuario es requerido *', '', {
        duration: 2000,
      });
    } else if (
      this.formUsuario.nombreUsuario.trim() == '' ||
      this.formUsuario.nombreUsuario == null
    ) {
      this.snack.open('El Username es requerido *', '', {
        duration: 2000,
      });
    } else if (
      this.formUsuario.pass.trim() == '' ||
      this.formUsuario.pass == null
    ) {
      this.snack.open('La contraseña es requerida *', '', {
        duration: 2000,
      });
    } else if (
      this.formUsuario.tipoUsuario.trim() == '' ||
      this.formUsuario.tipoUsuario == null
    ) {
      this.snack.open('El Tipo de usuario es requerido *', '', {
        duration: 2000,
      });
    } else if (
      this.formUsuario.imagenUsuario.trim() == '' ||
      this.formUsuario.imagenUsuario == null
    ) {
      this.snack.open(
        'El Usuario debe tener una imagen obligatoriamente...',
        '',
        {
          duration: 2000,
        }
      );
    } else {
      this.usuarioService.crearUsuario(this.formUsuario).subscribe(
        (data) => {
          console.log(data);
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se creó el usuario correctamente',
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
