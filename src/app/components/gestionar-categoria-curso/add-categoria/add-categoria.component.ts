import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {
  categoria={
    tituloCategoriaCurso: '',
    descripcion : ''
  }
  constructor(private categoriaService:CategoriaService, private activatedRoute:ActivatedRoute,
    private snack: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
  }


  agregarCategoria(){
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

  else {
    this.categoriaService.crearCategoria(this.categoria).subscribe(
      data =>{
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La categoría fue creada con exito',
          showConfirmButton: false,
          timer: 1000,
        });

        this.router.navigate(['dashboard/ver-categoria-curso']);
      }

    );

  }
}

}
