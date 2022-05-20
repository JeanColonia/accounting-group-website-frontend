import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  imgsCarousel: any[] = [
    { id: 1, img: '../../../../assets/imgs/carousel/img1.png' },
    { id: 2, img: '../../../../assets/imgs/carousel/img2.png' },
    { id: 3, img: '../../../../assets/imgs/carousel/img3.png' },
    { id: 4, img: '../../../../assets/imgs/carousel/img4.png' },
    { id: 5, img: '../../../../assets/imgs/carousel/img5.png' },
    { id: 6, img: '../../../../assets/imgs/carousel/img6.png' },
    { id: 7, img: '../../../../assets/imgs/carousel/img7.png' },
    { id: 8, img: '../../../../assets/imgs/carousel/img8.png' },
    { id: 9, img: '../../../../assets/imgs/carousel/img9.png' },
    { id: 10, img: '../../../../assets/imgs/carousel/img10.png' },
  ];

  constructor(private _config: NgbCarouselConfig) {
    _config.interval=2500,
    _config.pauseOnHover=true,
    _config.showNavigationArrows=false
  }

  ngOnInit(): void {
  

  }
}
