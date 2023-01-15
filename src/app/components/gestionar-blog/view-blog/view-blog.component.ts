import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  constructor(private blogService:BlogService, private router:Router) { }

  listadoBlogs:any;
  ngOnInit(): void {

    this.blogService.listarBlogs().subscribe(
      data =>{
        this.listadoBlogs = data;

        console.log(this.listadoBlogs)
      }
    );
  }


  actualizarBlog(idBlog:number){
    this.router.navigate(['dashboard/actualizar-blog',idBlog]);

  }

  eliminarBlog(idBlog:number){
    swal.fire({
      title:'Eliminar Blog',
      text:'¿Estás seguro de eliminar este Blog?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((res)=> {
      if(res.isConfirmed){
        this.blogService.eliminarBlog(idBlog).subscribe(
          (data)=>{
            this.listadoBlogs  = this.listadoBlogs.filter((blog:any) => blog.idBlog != idBlog);
  
            swal.fire('Blog Eliminado','El Blog ha sido eliminado', 'success');
          },
  
          (error) =>{
            swal.fire('Error', 'Error al eliminar el Blog', 'error');
          }
        );
      }
    })
  }

}
