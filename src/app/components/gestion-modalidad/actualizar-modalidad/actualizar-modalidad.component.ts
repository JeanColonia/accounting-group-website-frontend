import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalidadService } from 'src/app/services/modalidad.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-modalidad',
  templateUrl: './actualizar-modalidad.component.html',
  styleUrls: ['./actualizar-modalidad.component.css']
})
export class ActualizarModalidadComponent implements OnInit {
modalidad:any;
idModalidad:number=0;
  constructor(private modalidadService: ModalidadService, private snack:MatSnackBar, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idModalidad = this.activatedRoute.snapshot.params['idModalidad'];
    this.modalidadService.obtenerModalidad(this.idModalidad).subscribe(
      data =>{
        this.modalidad = data;
        console.log(this.modalidad);
      }
    );
  }

  actualizarModalidad(){
    this.modalidadService.actualizarModalidad(this.modalidad).subscribe(
      data => {

        if(this.modalidad.nombre =='' || this.modalidad.nombre ==null){
          this.snack.open('El nombre de la modalidad es requerido','',{
            duration:2000
          })
        }

        else if(this.modalidad.descripcion=='' || this.modalidad.descripcion==null){
          this.snack.open('La descripción de la modalidad es requerida', '', {
            duration:2000
          })
          
        }
        else{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se Actualizó la modalidad correctamente',
            showConfirmButton: false,
            timer: 1000,
          });

          this.router.navigate(['dashboard/ver-modalidades']);
        }
      }
    );
  }

}
