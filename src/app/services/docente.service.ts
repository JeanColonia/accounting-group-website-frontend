import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  BASE_URL:string = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  listarDocentes():Observable<any>{
    return this.http.get(`${this.BASE_URL}/docente/api/`);
  }

  obtenerDocente(idDocente:number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/docente/api/${idDocente}`);
  }

  crearDocente(docente:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}/docente/api/`, docente);
  }

  actualizarDocente(docente:any):Observable<any>{
    return this.http.put(`${this.BASE_URL}/docente/api/`, docente);
  }

  eliminarDocente(idDocente:number):Observable<any>{
    return this.http.delete(`${this.BASE_URL}/docente/api/${idDocente}`);
  }
}
