import {
  ElementRef, Output, Directive, OnDestroy, EventEmitter, AfterViewInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fromEvent } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[appear]'
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output() appear: EventEmitter<void>;
  @Output() disappear: EventEmitter<void>;

  elementPos!: number;
  elementHeight!: number;

  scrollPos!: number;
  windowHeight!: number;

  subscriptionScroll!: Subscription;
  subscriptionResize!: Subscription;

  pause: boolean = false;
  isBelow: boolean = false;

  constructor(private element: ElementRef) {
    this.appear = new EventEmitter<void>();
    this.disappear = new EventEmitter<void>();
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility() {
    if (this.isVisible()) {
      this.saveDimensions();
      if (this.isVisible()) {
        if (!this.pause) {
          this.isBelow = !this.isBelow;
          this.appear.emit();
        }
        this.pause = true;
      }
    }

    if (this.pause && this.isInvisible()) {
      this.saveDimensions();
      if (this.isInvisible()) {
        if (this.pause) {
          this.disappear.emit();
        }
        this.pause = false;
      }
    }
  }
  isVisible() {
    // Ak chceme zmenit kedy je element povazovany za visible treba pripocitat cislo k this.elementPos na konci
    // napr. ak chceme aby bol visible ked je cely element viditelny tak treba pridat + this.elementHeight
    if (!this.isBelow) {
      return (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight / 2);
    }
    return this.scrollPos <= (this.elementPos + this.elementHeight / 2);
  }

  isInvisible() {
    if (this.isBelow) {
      return (this.scrollPos + this.windowHeight) >= (this.elementPos + this.windowHeight + this.elementHeight / 2);
    }
    return (this.scrollPos + this.windowHeight) <= (this.elementPos + this.elementHeight / 2);

  }

  subscribe() {
    this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
      .subscribe(() => {
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }
  unsubscribe() {
    if (this.subscriptionScroll) {
      this.subscriptionScroll.unsubscribe();
    }
    if (this.subscriptionResize) {
      this.subscriptionResize.unsubscribe();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.subscribe(), 100)

  }
  ngOnDestroy() {
    this.unsubscribe();
  }
}
