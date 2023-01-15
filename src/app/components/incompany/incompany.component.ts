import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-incompany',
  templateUrl: './incompany.component.html',
  styleUrls: ['./incompany.component.css']
})
export class IncompanyComponent implements OnInit {
  imgsCarouselCompany: any[] = [
    { id: 1, img: '../../../../assets/incompany/capacitacion-in-house-1.png' },
    { id: 2, img: '../../../../assets/incompany/capacitacion-in-house-2.png' }
  ];


  cursosContables:any[]=[];
  cursosTributarios: any[] = [];
  cursosLaborales: any[] = [];
  constructor(private _config: NgbCarouselConfig, private cursoService:CursoService) {
    _config.interval=2700,
    _config.pauseOnHover=true,
    _config.showNavigationArrows=false
  }
  ngOnInit(): void {
    this.cursoService.listarCursos().subscribe(
      data => {
        console.log(data);
        data.filter((curso:any)=>{
          if(curso.categoriacurso.tituloCategoriaCurso=='Contable'){
            this.cursosContables.push(curso);
          }
          else if(curso.categoriacurso.tituloCategoriaCurso=='Laboral'){
            this.cursosLaborales.push(curso);
          }
          else if(curso.categoriacurso.tituloCategoriaCurso=='Tributario'){
            this.cursosTributarios.push(curso);
          }
        })
      }
    );

  }

}
