import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-conditioner',
  templateUrl: './air-conditioner.component.html'
})
export class AirConditionerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el = document.getElementById('top');
    if (el) {
        el.scrollIntoView({behavior: 'smooth'});
    }
  }

}
