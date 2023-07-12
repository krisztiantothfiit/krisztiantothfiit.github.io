import { Component } from '@angular/core';

@Component({
  selector: 'app-brunch',
  templateUrl: './brunch.component.html'
})
export class BrunchComponent {

  scroll() {
    const el = document.getElementById('brunch-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
