import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-curso',
  templateUrl: './view-curso.component.html',
  styleUrls: ['./view-curso.component.css']
})
export class ViewCursoComponent implements OnInit {

  listaCursos:any;
  constructor(private cursoService: CursoService, private router:Router) { }

  ngOnInit(): void {
  this.cursoService.listarCursos().subscribe(
    (data:any) =>{
    this.listaCursos = data;
    },
    (error) => {
      console.error(error)
    }
    );
  }


  RutaActualizarCurso(){
    this.router.navigate(['/dashboard/actualizar-curso']);
  }


  EliminarCurso(){
    
  }
}
