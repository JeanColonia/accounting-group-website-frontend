import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.css']
})
export class ActualizarCategoriaComponent implements OnInit {
  idCategoria:number=0;
  categoria:any;
  constructor(private categoriaService:CategoriaService, private activatedRoute:ActivatedRoute,
    private snack: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {

    this.idCategoria = this.activatedRoute.snapshot.params['idCategoria'];    this.categoriaService.obtenerCategoria(this.idCategoria).subscribe(
      data =>{
        this.categoria = data;
      }
    );
    
  }


  actualizarCategoria(){

    if(this.categoria.tituloCategoriaCurso =='' || this.categoria.tituloCategoriaCurso == null){
      this.snack.open('Se requiere nombre de Categoría','',{
        duration:2000
      });

    }
    else    if(this.categoria.descripcion =='' || this.categoria.descripcion == null){
      this.snack.open('Se requiere descripción de Categoría','',{
        duration:2000
      });

    }
    else{
      this.categoriaService.actualizarCategoria(this.categoria).subscribe(
      data =>{
        console.log(data);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se Actualizó el usuario correctamente',
          showConfirmButton: false,
          timer: 1000,
        });

        this.router.navigate(['dashboard/ver-categoria-curso']);
      }
      );
    }
    
  }

}
