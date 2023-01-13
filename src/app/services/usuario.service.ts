import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  BASE_URL: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  listarUsuarios():Observable<any> {
    return this.http.get(this.BASE_URL + '/usuario/api/');
  }

  obtenerUsuario(idUsuario:number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/usuario/api/${idUsuario}`);
  } 

  crearUsuario(usuario:any):Observable<any>{
    return this.http.post(this.BASE_URL + '/usuario/api/', usuario);
  }

  eliminarUsuario(id:number):Observable<any>{
    return this.http.delete(`${this.BASE_URL}/usuario/api/${id}`);
  }

  
}
