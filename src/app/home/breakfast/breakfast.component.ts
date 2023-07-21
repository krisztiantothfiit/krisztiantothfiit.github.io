import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  animations: [
    trigger('slideInOutLeft', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-350%)' })),
      transition('in => out', [animate('1s')]),
      transition('out => in', [animate('1s')]),
    ]),
    trigger('slideInOutRight', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(350%)' })),
      transition('in => out', [animate('1s')]),
      transition('out => in', [animate('1s')]),
    ]),
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', [animate('1s')]),
      transition('out => in', [animate('1s')]),
    ]),
  ]
})
export class BreakfastComponent {
  isIn = false;

  triggerAnimationIn() {
    this.isIn = true;
  }
  triggerAnimationOut() {
    this.isIn = false;
  }
}
