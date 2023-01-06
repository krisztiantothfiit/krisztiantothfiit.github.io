import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  constructor(private router: Router) {
  }

  getYear(): number {
    return new Date().getFullYear();
  }

  openPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}
