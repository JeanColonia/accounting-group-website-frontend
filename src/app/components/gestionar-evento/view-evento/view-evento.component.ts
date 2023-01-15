import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-evento',
  templateUrl: './view-evento.component.html',
  styleUrls: ['./view-evento.component.css']
})
export class ViewEventoComponent implements OnInit {

  listaEventos:any;
  constructor(private eventoService: EventoService, private router:Router) { }
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  
  ngOnInit(): void {
    this.eventoService.listarEventos().subscribe(
      data =>{
        this.listaEventos = data;
      }
    );
 
  }


  actualizarEvento(idcourse:number){
    this.router.navigate(['/dashboard/actualizar-evento/', idcourse]);

  }


  RutaTemario(idCurso:number){
   this.router.navigate(['dashboard/ver-temario/', idCurso]);
 }


 eliminarEvento(idEvento:number){
  swal.fire({
    title:'Eliminar Evento',
    text:'¿Estás seguro de eliminar este evento?',
    icon:'warning',
    showCancelButton:true,
    confirmButtonText:'Eliminar',
    cancelButtonText:'Cancelar'
  }).then((res)=> {
    if(res.isConfirmed){
      this.eventoService.eliminarEvento(idEvento).subscribe(
        (data)=>{
          this.listaEventos  = this.listaEventos.filter((evento:any) => evento.idEvento != idEvento);

          swal.fire('Evento Eliminado','El Evento ha sido eliminado', 'success');
        },

        (error) =>{
          swal.fire('Error', 'Error al eliminar el Evento', 'error');
        }
      );
    }
  })

    
 }

}
