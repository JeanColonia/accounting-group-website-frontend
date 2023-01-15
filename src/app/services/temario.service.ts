import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TemarioService {
  constructor(private http: HttpClient) {}
  BASE_URL:string = 'https://grupo-contable-backend-app.herokuapp.com';

  listarTemarios(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/temario/api/`);
  }

  obtenerTemario(idTemario: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/temario/api/${idTemario}`);
  }

  crearTemario(temario: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/temario/api/`, temario);
  }
  actualizarTemario(temario: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/temario/api/`, temario);
  }

  deleteTemario(idTemario: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/temario/api/${idTemario}`);
  }

  obtenerTemarioPorIdCurso(idCurso:number){
    return this.http.get(`${this.BASE_URL}/temario/api/curso/${idCurso}`)
  }

}
