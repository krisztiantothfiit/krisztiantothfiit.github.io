import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  elementPos!: number;
  windowHeight!: number;
  x = 0;

  constructor(private element: ElementRef,  private renderer: Renderer2) { }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.windowHeight = window.innerHeight;
  }

  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0;
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.renderer.setStyle(this.element.nativeElement, 'transform', `translateY(${0 - window.scrollY * this.parallaxRatio}px)`)
  }

  ngAfterViewInit() {
    setTimeout(() => this.saveDimensions(), 100)
  }
}
