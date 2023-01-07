import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  HostListener
} from "@angular/core";

@Component({
  selector: "animated-digit",
  templateUrl: "animated-digit.component.html"
})
export class AnimatedDigitComponent implements OnChanges {
  @Input() duration!: number;
  @Input() digit!: number;
  @Input() steps!: number;
  @ViewChild("animatedDigit") animatedDigit!: ElementRef;
  isInView: boolean = false;

  animateCount() {
    if (!this.duration) {
      this.duration = 1000;
    }

    if (typeof this.digit === "number") {
      this.counterFunc(this.digit, this.duration, this.animatedDigit);
    }
  }

  counterFunc(endValue: number, durationMs: number, element: ElementRef<any>) {
    if (!this.steps) {
      this.steps = 12;
    }

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      if (!element) { return; }

      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;
      element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes["digit"]) {
      this.animateCount();
    }
  }

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.animatedDigit) {
      const rect = this.animatedDigit.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      let inView = topShown && bottomShown;

      if (!this.isInView && inView) {
        this.isInView = true;
        if (this.digit) {
          this.animateCount();
        }
      }

      if (this.isInView && !inView) {
        this.isInView = false;
      }
    }
  }
}
