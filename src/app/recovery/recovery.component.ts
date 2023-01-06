import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html'
})
export class RecoveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el = document.getElementById('top');
    if (el) {
        el.scrollIntoView({behavior: 'smooth'});
    }
  }

}
