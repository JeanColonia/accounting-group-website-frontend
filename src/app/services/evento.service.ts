import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventoService {
  BASE_URL:string = 'https://grupo-contable-backend-app.herokuapp.com';
  constructor(private http: HttpClient) { }


  listarEventos():Observable<any>{
    return this.http.get(`${this.BASE_URL}/evento/api/`);
  }


  obtenerEvento(idEvento:number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/evento/api/${idEvento}`);
  }

  crearEvento(evento:any):Observable<any>{
    return this.http.post(`${this.BASE_URL}/evento/api/`, evento);
  }

  actualizarEvento(evento:any):Observable<any>{
    return this.http.put(`${this.BASE_URL}/evento/api/`, evento);
  }

  eliminarEvento(idEvento:number):Observable<any>{
    return this.http.delete(`${this.BASE_URL}/evento/api/${idEvento}`);
  }
}
