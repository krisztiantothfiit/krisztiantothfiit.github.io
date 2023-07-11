import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html'
})
export class NavigationItemComponent {
    @Input() title = '';

    constructor(protected router: Router){}

    navigate() {
        this.router.navigate([this.title]);
    }
}
