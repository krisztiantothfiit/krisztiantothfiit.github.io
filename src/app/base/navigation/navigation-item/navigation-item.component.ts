import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html'
})
export class NavigationItemComponent {
    @Input() title = '';

    scroll() {
        const el = document.getElementById(this.title);
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        }
    }
}
