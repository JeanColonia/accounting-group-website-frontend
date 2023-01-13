import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  BASE_URL:string = 'http://localhost:8080';
  constructor(private http:HttpClient) { }


  listarCursos():Observable<any>{
    return this.http.get(`${this.BASE_URL}/curso/api/`);
  }


  obtenerCurso(id:number){
    return this.http.get(`${this.BASE_URL}/curso/api/${id}`);
  }

  actualizarCurso(curso:any){
    return this.http.post(`${this.BASE_URL}/curso/api/`, curso);
  }


  crearCurso(curso:any){
    return this.http.put(`${this.BASE_URL}/curso/api/`, curso);
  }

  eliminarCurso(id:number){
    return this.http.delete(`${this.BASE_URL}/curso/api/${id}`);
  }


}
