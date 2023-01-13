import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteService } from 'src/app/services/docente.service';
import { ImagenService } from 'src/app/services/imagen.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-docente',
  templateUrl: './actualizar-docente.component.html',
  styleUrls: ['./actualizar-docente.component.css']
})
export class ActualizarDocenteComponent implements OnInit {
  @ViewChild('imagenInputFile', { static: false }) imagenFile: ElementRef | any;

  idDocente:number=0;
  docente:any;


  imagen: any;
  imagenURL: string = '';

  imagenMiniatura: any;


  constructor(private docenteService:DocenteService, private activatedRouter: ActivatedRoute, private imagenService:ImagenService,
    private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.idDocente = this.activatedRouter.snapshot.params['idDocente'];
   this.docenteService.obtenerDocente(this.idDocente).subscribe(
    data =>{
      this.docente = data;
      console.log(this.docente);
    }
   );
  }



  onUpload(): void {
    this.imagenService.crearImagen(this.imagen).subscribe(
      (data) => {
       
        this.docente.fotografia = data.imagenUrl;
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se agregó la imagen del docente',
          showConfirmButton: false,
          timer: 1000,
        });

        console.log(this.docente.fotografia);
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
    this.docente.fotografia = '';
  }



  actualizarDocente(){

    if(this.docente.nombres =='' || this.docente.nombres ==null){
      this.snack.open('Los nombres del docente son requeridos *','',{
        duration:2000
      })
    }
    else if(this.docente.apellidos =='' || this.docente.apellidos ==null){
      this.snack.open('Los Apellidos del docente son requeridos *','',{
        duration:2000
      })
    }
    else if (
      this.docente.fotografia.trim() == '' ||
      this.docente.fotografia == null
    ) {
      this.snack.open(
        'El Usuario debe tener una imagen obligatoriamente...',
        '',
        {
          duration: 2000,
        }
      );
    } 
    else{

      this.docenteService.actualizarDocente(this.docente).subscribe(
        data =>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se actualizaron los datos del docente con éxito',
            showConfirmButton: false,
            timer: 1000,
          });
          this.reset();
          this.router.navigate(['dashboard/ver-docentes']);
        }
      );
    }
  }


}
