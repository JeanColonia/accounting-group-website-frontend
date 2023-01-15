import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  BASE_URL:string = 'https://grupo-contable-backend-app.herokuapp.com';
  constructor(private http: HttpClient) { }

  listarCategorias():Observable<any>{
    return this.http.get(`${this.BASE_URL}/categoria-curso/api/`);
  }


  obtenerCategoria(idCategoria:number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/categoria-curso/api/${idCategoria}`)
  }

  actualizarCategoria(categoria:any):Observable<any>{
    return this.http.put(`${this.BASE_URL}/categoria-curso/api/`, categoria);
  }

  eliminarCategoria(idCategoria:number):Observable<any>{
    return this.http.delete(`${this.BASE_URL}/categoria-curso/api/${idCategoria}`);
  }

  crearCategoria(categoria:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}/categoria-curso/api/`, categoria);
  }

}
