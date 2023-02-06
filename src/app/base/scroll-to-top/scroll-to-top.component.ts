import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html'
})
export class ScrollToTopComponent implements OnInit {
    showScrollButton = false;
    scroller: Subscription | undefined;

    ngOnInit(): void {
        this.scroller = fromEvent(window, 'scroll')
        .pipe(debounceTime(100))
        .subscribe(() => this.dealWithScroll(window.scrollY));
    }

    scrollToTop(): void {
        const el = document.getElementById('top');
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        }
    }

    dealWithScroll(y: number): void {
        if (!this.showScrollButton) {
            this.showScrollButton = true;
        }
        if (y === 0) {
            this.showScrollButton = false;
        }
    }
}
