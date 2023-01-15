import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Router } from '@angular/router';
import { TooltipPosition } from '@angular/material/tooltip';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-curso',
  templateUrl: './view-curso.component.html',
  styleUrls: ['./view-curso.component.css']
})
export class ViewCursoComponent implements OnInit {

  listaCursos:any;
  constructor(private cursoService: CursoService, private router:Router) { }
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  ngOnInit(): void {
  this.cursoService.listarCursos().subscribe(
    (data:any) =>{
    this.listaCursos = data;
    },
    (error) => {
      console.error(error)
    }
    );
  }


  

  actualizarElCurso(idcourse:number){
    this.router.navigate(['/dashboard/actualizar-curso/', idcourse]);

  }


  RutaTemario(idCurso:number){
   this.router.navigate(['dashboard/ver-temario/', idCurso]);
 }


 EliminarCurso(idCourse:number){
  swal.fire({
    title:'Eliminar Curso',
    text:'¿Estás seguro de eliminar este curso?',
    icon:'warning',
    showCancelButton:true,
    confirmButtonText:'Eliminar',
    cancelButtonText:'Cancelar'
  }).then((res)=> {
    if(res.isConfirmed){
      this.cursoService.eliminarCurso(idCourse).subscribe(
        (data)=>{
          this.listaCursos  = this.listaCursos.filter((curso:any) => curso.idCurso != idCourse);

          swal.fire('Curso Eliminado','El Curso ha sido eliminado', 'success');
        },

        (error) =>{
          swal.fire('Error', 'Error al eliminar el curso', 'error');
        }
      );
    }
  })
    
 }


}
