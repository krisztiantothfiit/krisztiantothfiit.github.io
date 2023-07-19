import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  animations: [
    trigger('fadeInOut', [
      state('in', style({
        opacity: '1'
      })),
      state('out', style({
        opacity: '0'
      })),
      transition('in => out', [
        animate('1s')
      ]),
      transition('out => in', [
        animate('1s')
      ]),
    ]),
  ],
})
export class AboutUsComponent {
  isIn = false;

  triggerAnimationIn() {
    console.log('appeared')
    this.isIn = true;
  }
  triggerAnimationOut() {
    console.log('disappeared')
    this.isIn = false;
  }
}
