import { Component, OnInit } from '@angular/core';
import { NgbDayTemplateData } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { UsuarioService } from '../../../services/usuario.service';
import swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-usuario',
  templateUrl: './view-usuario.component.html',
  styleUrls: ['./view-usuario.component.css']
})
export class ViewUsuarioComponent implements OnInit {


  listaUsuarios:any;
  constructor(private usuarioService: UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe(
      (data:any)=>{
        this.listaUsuarios = data;
      },
      (error)=> {
        console.error(error);
      }
    );
  }


  eliminarUsuario(idUsuario:number){

    swal.fire({
      title:'Eliminar Usuario',
      text:'¿Estás seguro de eliminar al usuario?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((res)=> {
      if(res.isConfirmed){
        this.usuarioService.eliminarUsuario(idUsuario).subscribe(
          (data)=>{
            this.listaUsuarios  = this.listaUsuarios.filter((usuario:any) => usuario.idUsuario != idUsuario);

            swal.fire('Usuario Eliminado','El usuario ha sido eliminado', 'success');
          },

          (error) =>{
            swal.fire('Error', 'Error al eliminar el usuario', 'error');
          }
        );
      }
    })
  }




  ActualizarUsuario(idUsuario:number){

    this.router.navigate(['dashboard/actualizar-usuario/', idUsuario]);

  }
}
