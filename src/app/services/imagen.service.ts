import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  BASE_URL:string = 'http://localhost:8080';
  constructor(private http:HttpClient) { }




  listarImagenes(){

    return this.http.get(`${this.BASE_URL}/cloudinary/list`);
  }

   crearImagen(imagen:File): Observable<any>{
    const formData = new FormData();
    formData.append('multipartFile', imagen)
    return this.http.post<any>(`${this.BASE_URL}/cloudinary/upload`, formData );
  }

  public delete(id:number):Observable<any>{
    return this.http.get(`${this.BASE_URL}/cloudinary/delete/${id}`)
  }

}
