import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-view-categoria',
  templateUrl: './view-categoria.component.html',
  styleUrls: ['./view-categoria.component.css']
})
export class ViewCategoriaComponent implements OnInit {

  listaCategorias:any;
  constructor(private categoriaService: CategoriaService, private router:Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      data =>{
        this.listaCategorias = data;
        console.log(this.listaCategorias)
      }
    );
  }



  actualizarCategoria(id:number){
    this.router.navigate(['dashboard/actualizar-categoria/', id]);

  }

  eliminarCategoria(idCategoriaCurso:number){
   
    swal.fire({
      title:'Eliminar Categoría',
      text:'¿Estás seguro de eliminar esta categoría?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((res)=> {
      if(res.isConfirmed){
        this.categoriaService.eliminarCategoria(idCategoriaCurso).subscribe(
          (data)=>{
            this.listaCategorias  = this.listaCategorias.filter((categoria:any) => categoria.idCategoriaCurso != idCategoriaCurso);
  
            swal.fire('Categoría Eliminada','La categoría ha sido eliminada', 'success');
          },
  
          (error) =>{
            swal.fire('Error', 'Error al eliminar categoría', 'error');
          }
        );
      }
    })
  }   
}
