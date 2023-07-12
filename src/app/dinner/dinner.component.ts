import { Component } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html'
})
export class DinnerComponent {

  scroll() {
    const el = document.getElementById('lunch-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
