import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CursoService } from 'src/app/services/curso.service';
import { DocenteService } from 'src/app/services/docente.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { ModalidadService } from 'src/app/services/modalidad.service';
import swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {
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

  curso = {
    titulo: "",
    fecha: "",
    imagen: "",
    horaInicio: "",
    horaFin: "",
    descripcion: "",
    fechaRegistrada: this.date,
    linkCarrito: "",
    modalidad: {
      idModalidad: 0
    },
    docente: {
      id: 0
    },
    categoriacurso: {
      idCategoriaCurso: 0
    },
    usuario: {
      idUsuario: 0
    }
  }


  constructor(private cursoService: CursoService, private imagenService: ImagenService, private modalidadService: ModalidadService, private categoriaService: CategoriaService, private docenteService: DocenteService, private usuarioService: UsuarioService, private snack: MatSnackBar, private router:Router) { }
  idUser: any;
  ngOnInit(): void {
    this.modalidadService.listarModalidades().subscribe(
      data => {
        this.listaModalidad = data;
      },
      error => {
        console.error(error);
      }
    );

    this.categoriaService.listarCategorias().subscribe(
      data => {
        this.listaCategoria = data;
      },
      error => {
        console.error(error);
      }
    );

    this.docenteService.listarDocentes().subscribe(
      data => {
        this.listaDocentes = data;
      },
      error => {
        console.error(error);
      }
    );

    this.usuarioService.listarUsuarios().subscribe(
      data => {
        this.listaUsuarios = data;

        this.listaUsuarios.find((usuario: any) => {
          if (this.username == usuario.nombreUsuario && this.email == usuario.email) {
            this.idUser = usuario.idUsuario;
            this.curso.usuario.idUsuario = this.idUser;
          }
        })
      }
    );


  }




  onUpload(): void {
    this.imagenService.crearImagen(this.imagen).subscribe(
      (data) => {

        this.curso.imagen = data.imagenUrl;
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se agregó la imagen del curso',
          showConfirmButton: false,
          timer: 1000,
        });

        console.log(this.curso.imagen);
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
    this.curso.imagen = '';
  }


  crearCurso() {
  
    if (this.curso.titulo == '' || this.curso.titulo == null) {
      this.snack.open('El titulo del curso es requerido **', '', {
        duration: 2000
      })
    }
    else if (this.curso.fecha == '' || this.curso.fecha == null) {
      this.snack.open('La fecha del curso es requerido **', '', {
        duration: 2000
      })
    }
    else if (this.curso.imagen == '' || this.curso.imagen == null) {
      this.snack.open('La imagen del curso es requerido **', '', {
        duration: 2000
      })
    }
    else if (this.curso.horaInicio == '' || this.curso.horaInicio == null) {
      this.snack.open('La hora de inicio del curso es requerido **', '', {
        duration: 2000
      })
    }
    else if (this.curso.horaFin == '' || this.curso.horaFin == null) {
      this.snack.open('La hora fin del curso es requerido **', '', {
        duration: 2000
      })
    }
    else if (this.curso.descripcion == '' || this.curso.descripcion == null) {
      this.snack.open('La Descripción del curso es requerido **', '', {
        duration: 2000
      })
    }

    else{
      this.cursoService.crearCurso(this.curso).subscribe(
        data =>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se creó el curso con éxito',
            showConfirmButton: false,
            timer: 1000,
          });
          this.reset();
          this.router.navigate(['dashboard/ver-cursos']);
        },
        error => console.error(error)
      );
    }

  }

}
