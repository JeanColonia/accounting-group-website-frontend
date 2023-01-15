import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  BASE_URL:string = 'https://grupo-contable-backend-app.herokuapp.com';

  constructor(private http:HttpClient) { }


  listarModalidades():Observable<any>{
    return this.http.get(`${this.BASE_URL}/modalidad/api/`);
  }

  obtenerModalidad(idModalidad:number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/modalidad/api/${idModalidad}`)
  }

  crearModalidad(modalidad:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}/modalidad/api/`,modalidad);
  }

  actualizarModalidad(modalidad:any):Observable<any>{
    return this.http.put(`${this.BASE_URL}/modalidad/api/`,modalidad);
  }
  
  eliminarModalidad(idModalidad:number):Observable<any>{
    return this.http.delete(`${this.BASE_URL}/modalidad/api/${idModalidad}`)
  }

}
