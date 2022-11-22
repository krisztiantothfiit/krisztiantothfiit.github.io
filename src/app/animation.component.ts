import { Component, HostListener, Input } from "@angular/core";

@Component({ template: '' })
export abstract class AnimationComponent {
    animation = false;
    @Input() delay = '';

    @HostListener('window:scroll', ['$event'])
    isScrolledIntoView() {

        const el = document.getElementById(this.delay);
        if (el) {
            const rect = el.getBoundingClientRect();
            const topShown = rect.top >= 0;
            const bottomShown = rect.bottom <= window.innerHeight;

            const temp = topShown && bottomShown;
            if (!this.animation && temp) {
                this.animation = temp;
            }
        }
    }
}