import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  images=[
    {
      header:'Chatbots Will Be Your New Best Friend',
      pargraphs:'This carousel uses customized default values.',
      imageUrl:'../../assets/carsol/img (1).jpg'
    },

    {
     header:'Chatbots are being used by businesses to drive more sales and improve customer support',
      pargraph:'This carousel doesn\'t pause or resume on mouse events',
      imageUrl:'../../assets/carsol/img (2).jpg'
    },

    {
      header:'about 80% of businesses are planning to incorporate chatbots by the year 2020',
      pargraph:'This carousel uses customized default values.',
      imageUrl:'../../assets/carsol/img (3).jpg'
    },
    {
     header:'you should message a business just the way you would message a friends',
      pargraph:'hello',
      imageUrl:'../../assets/carsol/img (4).jpg'
    }
  ];


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
  }

}
