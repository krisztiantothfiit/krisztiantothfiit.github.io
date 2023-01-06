import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-pump',
  templateUrl: './air-pump.component.html'
})
export class AirPumpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el = document.getElementById('top');
    if (el) {
        el.scrollIntoView({behavior: 'smooth'});
    }
  }

}
