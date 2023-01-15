import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import Swiper, { Autoplay } from 'swiper';
import SwiperCore, { SwiperOptions } from 'swiper';
Swiper.use([Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cursosContables:any[]=[];
  cursosTributarios: any[] = [];
  cursosLaborales: any[] = [];
  ancho: number | undefined;
  elementos: number | undefined;

  config: SwiperOptions = {
    slidesPerView: 4.5,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 500,
    },
  };

  constructor(private cursoService: CursoService) {}

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
    this.calcElements();
  }

  onSlideChange() {
    console.log('slide change');
  }

  calcElements() {
    this.ancho = document.body.clientWidth;
    if (this.ancho < 400) {
      this.elementos = 1.2;
    } else {
      this.elementos = 4.3;
    }
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 50,
      },
      slidesPerView: this.elementos,
      spaceBetween: 100,
    });
  }
  panelOpenState = false;
}
