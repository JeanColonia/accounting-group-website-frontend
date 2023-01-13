import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalidadService } from 'src/app/services/modalidad.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-modalidad',
  templateUrl: './view-modalidad.component.html',
  styleUrls: ['./view-modalidad.component.css']
})
export class ViewModalidadComponent implements OnInit {

  listaModalidad:any;
  constructor(private modalidadService:ModalidadService, private router:Router) { }

  ngOnInit(): void {

    this.modalidadService.listarModalidades().subscribe(
      data=>{
        this.listaModalidad = data;
        console.log(this.listaModalidad);
      }
    );
  }
  actualizarModalidad(idModalidad:number){
    this.router.navigate(['dashboard/actualizar-modalidad/',idModalidad]);

  }

  eliminarModalidad(idModalidad:number){
    
 
    swal.fire({
      title:'Eliminar Categoría',
      text:'¿Estás seguro de eliminar esta categoría?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((res)=> {
      if(res.isConfirmed){
        this.modalidadService.eliminarModalidad(idModalidad).subscribe(
          (data)=>{
            this.listaModalidad  = this.listaModalidad.filter((categoria:any) => categoria.idModalidad != idModalidad);
  
            swal.fire('Modalidad Eliminada','La Modalidad ha sido eliminada', 'success');
          },
  
          (error) =>{
            swal.fire('Error', 'Error al eliminar Modalidad', 'error');
          }
        );
      }
    })
  }
}
