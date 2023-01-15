import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  BASE_URL:string = 'https://grupo-contable-backend-app.herokuapp.com';
  constructor(private http: HttpClient) { }


  listarBlogs():Observable<any>{
    return this.http.get(`${this.BASE_URL}/blog/api/`);
  }

  
  obtenerBlog(idBlog:number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/blog/api/${idBlog}`);
  }

  crearBlog(blog:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}/blog/api/`, blog);
  }

  actualizarBlog(blog:any):Observable<any>{
    return this.http.put(`${this.BASE_URL}/blog/api/`, blog);
  }
  eliminarBlog(idBlog:number):Observable<any>{
    return this.http.delete(`${this.BASE_URL}/blog/api/${idBlog}`);
  }
}
