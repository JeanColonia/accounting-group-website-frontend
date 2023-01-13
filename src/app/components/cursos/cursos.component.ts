
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';
import Swiper, { Autoplay} from 'swiper';
import SwiperCore, { SwiperOptions } from 'swiper';

Swiper.use([Autoplay]);
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, AfterViewInit {

cursosContables: Course[]= [];
cursosTributarios: Course[]= [];
cursosLaborales: Course[]= [];
ancho:number | undefined;
elementos:number | undefined;


  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.calcElements();
  }

  onSlideChange() {
    console.log('slide change');
  }

  

  calcElements(){
    this.ancho = document.body.clientWidth;
    if(this.ancho<400){
      this.elementos =1.2;
    }
    else{
      this.elementos = 4.3
    }
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 200,
      },
      slidesPerView:this.elementos,
      spaceBetween:100
   
    });
 
}
}
