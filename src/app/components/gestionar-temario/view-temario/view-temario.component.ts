import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemarioService } from 'src/app/services/temario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-temario',
  templateUrl: './view-temario.component.html',
  styleUrls: ['./view-temario.component.css'],
})
export class ViewTemarioComponent implements OnInit {

  sinTemario:boolean=false;
  idCurso: number = 0;
  tituloCurso: string = '';

  temarioCurso: any;
  
  constructor(
    private temarioService: TemarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idCurso = this.activatedRoute.snapshot.params['idCurso'];
    this.temarioService
      .obtenerTemarioPorIdCurso(this.idCurso)
      .subscribe((data) => {
        this.temarioCurso = data;
        this.tituloCurso = this.temarioCurso[0].curso.titulo;
        console.log(this.tituloCurso);
        if(this.temarioCurso.length>0){
          this.sinTemario=true;
        }
      });
  }

  agregarTemario() {
    this.router.navigate(['dashboard/agregar-temario', this.idCurso]);
  }

  actualizarTemario(idTemario: number) {
    this.router.navigate(['dashboard/actualizar-temario', idTemario]);
  }

  deleteTemario(idTemario: number) {
    swal.fire({
      title:'Eliminar Temario',
      text:'¿Estás seguro de eliminar este temario?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((res)=> {
      if(res.isConfirmed){
        this.temarioService.deleteTemario(idTemario).subscribe(
          (data)=>{
            this.temarioCurso  = this.temarioCurso.filter((temario:any) => temario.idTemario != idTemario);
  
            swal.fire('Temario Eliminado','El Temario ha sido eliminado', 'success');
          },
  
          (error) =>{
            swal.fire('Error', 'Error al eliminar el temario', 'error');
          }
        );
      }
    })
  }
}
