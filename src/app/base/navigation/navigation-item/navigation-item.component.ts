import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html'
})
export class NavigationItemComponent {
    @Input() title = '';
    @Input() textColor = '#000000';

    constructor(protected router: Router, public navigationService: NavigationService){}

    navigate() {
        this.router.navigate([this.title]);
    }
}
