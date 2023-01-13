import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteService } from 'src/app/services/docente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-docente',
  templateUrl: './view-docente.component.html',
  styleUrls: ['./view-docente.component.css']
})
export class ViewDocenteComponent implements OnInit {

  listaDocentes:any;
  constructor(private docenteService:DocenteService, private router:Router) { }

  ngOnInit(): void {

    this.docenteService.listarDocentes().subscribe(
      data =>{
        this.listaDocentes = data;
      }
    );
  }


  actualizarDocente(idDocente:number){
    this.router.navigate(['dashboard/actualizar-docente/', idDocente]);
  }

  eliminarDocente(idDocente:number){
    swal.fire({
      title:'Eliminar Docente',
      text:'¿Estás seguro de eliminar al docente?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((res)=> {
      if(res.isConfirmed){
        this.docenteService.eliminarDocente(idDocente).subscribe(
          (data)=>{
            this.listaDocentes  = this.listaDocentes.filter((docente:any) => docente.id != idDocente);

            swal.fire('Docente Eliminado','El docente ha sido eliminado', 'success');
          },

          (error) =>{
            swal.fire('Error', 'Error al eliminar al docente', 'error');
          }
        );
      }
    })

  }
}
