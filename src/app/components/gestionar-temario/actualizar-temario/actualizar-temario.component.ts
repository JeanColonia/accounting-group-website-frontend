import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TemarioService } from 'src/app/services/temario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-temario',
  templateUrl: './actualizar-temario.component.html',
  styleUrls: ['./actualizar-temario.component.css']
})
export class ActualizarTemarioComponent implements OnInit {
  idTemario:number=0;
  temario:any;
  idCurso:any;
  constructor(private temarioService:TemarioService, private snack:MatSnackBar, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.idTemario = this.activatedRoute.snapshot.params['idTemario'];
    this.temarioService.obtenerTemario(this.idTemario).subscribe(
      data =>{
        this.temario = data;
        this.idCurso = this.temario.curso.idCurso;
        console.log(this.idCurso)
      }
    );  
  }


  actualizarTemario(){
    if(this.temario.titulo.trim()=='' || this.temario.titulo == null){
      this.snack.open('El titulo del temario es requerido ****', '', {
        duration:200
      });
    }
    else{
      this.temarioService.actualizarTemario(this.temario).subscribe(
        data =>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se Actualizó el temario con éxito',
            showConfirmButton: false,
            timer: 1000,
          });
          this.router.navigate(['dashboard/ver-temario/', this.idCurso]);
        }

      );
    }

  }


  Cancelar(){

    this.router.navigate(['dashboard/ver-temario', this.idCurso])
    
  }

}
