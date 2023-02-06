import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public href: string = "";

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.href = val.url;
      }
    })
  }

  scrollToContact() {
    const el = document.getElementById("contact");
    if (el) {
        el.scrollIntoView({behavior: 'smooth'});
    }
}
}
