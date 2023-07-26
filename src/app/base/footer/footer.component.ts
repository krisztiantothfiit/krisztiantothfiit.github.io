import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  @Input()
  white = false;

  constructor(private router: Router) {
  }

  getYear(): number {
    return new Date().getFullYear();
  }

  navigateToResouces() {
    this.router.navigate(['zdroje']);
  }

}
