import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private _config: NgbCarouselConfig) {
    _config.interval=2700,
    _config.pauseOnHover=true,
    _config.showNavigationArrows=false
  }
  ngOnInit(): void {
  }

}
