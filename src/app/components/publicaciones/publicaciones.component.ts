import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private blogService:BlogService) { }
listadoBlog:any;
  ngOnInit(): void {
  this.blogService.listarBlogs().subscribe(
    data =>{
      this.listadoBlog = data;
      console.log(this.listadoBlog);
    }
  );
  }

}
