import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }


  BASE_URL:string = 'http://localhost:8080';

  obtenerUsuarios(){
    return this.http.get(`${this.BASE_URL}/usuario/api/`);
  }

  obtenerUsuario(id: number){
    return this.http.get(`${this.BASE_URL}/usuario/api/${id}`);
  }


}
