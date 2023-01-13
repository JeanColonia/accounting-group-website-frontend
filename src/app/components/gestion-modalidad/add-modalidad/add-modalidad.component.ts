import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ModalidadService } from 'src/app/services/modalidad.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-modalidad',
  templateUrl: './add-modalidad.component.html',
  styleUrls: ['./add-modalidad.component.css']
})
export class AddModalidadComponent implements OnInit {

  modalidad={
    nombre :'',
    descripcion: ''
  }
  constructor(private router:Router, private snack:MatSnackBar, private modalidadService: ModalidadService) { }

  ngOnInit(): void {
  }


  agregarModalidad(){
    
    if(this.modalidad.nombre=='' || this.modalidad.nombre == null){
      this.snack.open('El nombre de modalidad es requerida *','',{
        duration:2000
      })
    }
    else if(this.modalidad.descripcion=='' || this.modalidad.descripcion == null){
      this.snack.open('La descripcion de modalidad es requerida *','',{
        duration:2000
      })
    }
    else{
      this.modalidadService.crearModalidad(this.modalidad).subscribe(
        data =>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'La categoría fue creada con exito',
            showConfirmButton: false,
            timer: 1000,
          });
          this.router.navigate(['dashboard/ver-modalidades']);
        }
      );
    }
    
  }
}
