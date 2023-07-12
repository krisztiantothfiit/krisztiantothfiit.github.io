import { Component } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html'
})
export class LunchComponent {

  scroll() {
    const el = document.getElementById('lunch-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
