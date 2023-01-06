import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html'
})
export class OfferingComponent {

  constructor(private router: Router) {
  }

  openPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }


}
