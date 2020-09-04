import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = ["/assets/image/cover1.jpg", "/assets/image/cover2.jpg", "/assets/image/cover3.jpg"];

};
