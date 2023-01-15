import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TemarioService } from 'src/app/services/temario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-temario',
  templateUrl: './add-temario.component.html',
  styleUrls: ['./add-temario.component.css']
})
export class AddTemarioComponent implements OnInit {

idCurso:any;
titulo:any;
  
  temario:any={
    titulo:'',
    descripcionTemario:'',
    curso:{}
  }
  constructor(private temarioService:TemarioService, private snack: MatSnackBar, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.idCurso = this.activatedRoute.snapshot.params['idCurso'];
    this.temario.curso['idCurso'] = this.idCurso;
    this.titulo = this.activatedRoute.snapshot.params['titulo'];

    
  }

  agregarTemario(){

    if(this.temario.titulo.trim() =='' || this.temario.titulo ==null){
      
      this.snack.open('El nombre del temario es requerido *****','',{
        duration:2000
      });
    }

    else{

      this.temarioService.crearTemario(this.temario).subscribe(
        data =>{
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Se creó el Temario con éxito',
              showConfirmButton: false,
              timer: 1000,
            });

            this.router.navigate(['dashboard/ver-cursos']);
        },
        error =>{
          console.log(error);
        }
      );
    }
    
   
    
  }


  Cancelar(){

    this.router.navigate(['dashboard/ver-temario/',this.idCurso])
  }

}
