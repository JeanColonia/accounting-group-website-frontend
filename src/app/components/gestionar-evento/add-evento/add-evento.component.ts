import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { ModalidadService } from 'src/app/services/modalidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css'],
})
export class AddEventoComponent implements OnInit {
  constructor(
    private snack: MatSnackBar,
    private eventoService: EventoService,
    private usuarioService: UsuarioService,
    private imagenService: ImagenService,
    private modalidadService: ModalidadService,
    private router:Router
  ) {}

  @ViewChild('imagenInputFile', { static: false }) imagenFile: ElementRef | any;
  imagen: any;
  imagenURL: string = '';

  date = new Date().toISOString();

  listaUsuarios: any;
  username = localStorage.getItem('user');
  email = localStorage.getItem('email');

  imagenMiniatura: any;

  listaModalidad: any;
  listaCategoria: any;
  listaDocentes: any;
  idUser: any;

  evento: any = {
    titulo: '',
    fecha: '',
    descripcion: '',
    fotografia: '',
    fechaRegistrada: this.date,
    modalidad_evento: {
      idModalidad: 0,
    },
    usuario: {
      idUsuario: 0,
    },
  };

  ngOnInit(): void {
    this.modalidadService.listarModalidades().subscribe(
      (data) => {
        this.listaModalidad = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.listaUsuarios = data;

      this.listaUsuarios.find((usuario: any) => {
        if (
          this.username == usuario.nombreUsuario &&
          this.email == usuario.email
        ) {
          this.idUser = usuario.idUsuario;
          this.evento.usuario.idUsuario = this.idUser;
        }
      });
    });
  }

  onUpload(): void {
    this.imagenService.crearImagen(this.imagen).subscribe(
      (data) => {
        this.evento.fotografia = data.imagenUrl;
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se agregó la imagen del evento',
          showConfirmButton: false,
          timer: 1000,
        });

        console.log(this.evento.fotografia);
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
    this.evento.fotografia = '';
  }

  crearEvento() {
    if (this.evento.titulo == '' || this.evento.titulo == null) {
      this.snack.open('El titulo del evento es requerido **', '', {
        duration: 2000,
      });
    } else if (this.evento.fecha == '' || this.evento.fecha == null) {
      this.snack.open('La fecha del evento es requerido **', '', {
        duration: 2000,
      });
    } else if (this.evento.fotografia == '' || this.evento.fotografia == null) {
      this.snack.open('La imagen del evento es requerido **', '', {
        duration: 2000,
      });
    
    } else {
      this.eventoService.crearEvento(this.evento).subscribe(
        (data) => {
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se creó el evento con éxito',
            showConfirmButton: false,
            timer: 1000,
          });
          this.reset();
          this.router.navigate(['dashboard/ver-eventos']);
        },
        (error) => console.error(error)
      );
    }
  }
}
