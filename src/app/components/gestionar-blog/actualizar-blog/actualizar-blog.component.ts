import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-blog',
  templateUrl: './actualizar-blog.component.html',
  styleUrls: ['./actualizar-blog.component.css']
})
export class ActualizarBlogComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private blogService:BlogService, private imagenService:ImagenService, private snack:MatSnackBar, private router:Router, private activatedRoute:ActivatedRoute) { }

  @ViewChild('imagenInputFile', { static: false }) imagenFile: ElementRef | any;
  imagen: any;
  imagenURL: string = '';

  date = new Date().toISOString();
  idBlog:any;
  listaUsuarios: any;
  username = localStorage.getItem('user');
  email = localStorage.getItem('email');

  imagenMiniatura: any;

  listaModalidad: any;
  listaCategoria: any;
  listaDocentes: any;
  idUser: any;

  blog: any = {
    titulo: '',
    fecha: '',
    descripcion: '',
    imagen: '',
    fechaRegistrada: this.date,
    tipoPublicacion:'',
    usuario: {
      idUsuario: 0,
    },
  };

  ngOnInit(): void {

    this.idBlog = this.activatedRoute.snapshot.params['idBlog'];
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.listaUsuarios = data;

      this.listaUsuarios.find((usuario: any) => {
        if (
          this.username == usuario.nombreUsuario &&
          this.email == usuario.email
        ) {
          this.idUser = usuario.idUsuario;
          this.blog.usuario.idUsuario = this.idUser;
        }
      });
    });

    this.blogService.obtenerBlog(this.idBlog).subscribe((data) => {
      this.blog = data;
    },
    error =>{
      console.error(error);
    }
    )


  }

  onUpload(): void {
    this.imagenService.crearImagen(this.imagen).subscribe(
      (data) => {
        this.blog.imagen = data.imagenUrl;
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se agregó la imagen del evento',
          showConfirmButton: false,
          timer: 1000,
        });

        console.log(this.blog.imagen);
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
    this.blog.imagen = '';
  }

  actualizarBlog() {

    if (this.blog.titulo == '' || this.blog.titulo == null) {
      this.snack.open('El titulo del blog es requerido **', '', {
        duration: 2000
      })
    }
    else if (this.blog.fecha == '' || this.blog.fecha == null) {
      this.snack.open('La fecha del blog es requerida **', '', {
        duration: 2000
      })
    }

 
    else if (this.blog.descripcion == '' || this.blog.descripcion == null) {
      this.snack.open('La Descripción del blog es requerido **', '', {
        duration: 2000
      })
    }

    else{

         this.blogService.actualizarBlog(this.blog).subscribe(
        data =>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se Actualizó el blog con éxito',
            showConfirmButton: false,
            timer: 1000,
          });
          this.reset();
          this.router.navigate(['dashboard/ver-blogs']);
        },
        error => console.error(error)
      );
    }
    
  }
}
