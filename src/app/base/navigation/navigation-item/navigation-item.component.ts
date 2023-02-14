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
            var elementPosition = el.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - 56;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
           });
        }
    }
}
