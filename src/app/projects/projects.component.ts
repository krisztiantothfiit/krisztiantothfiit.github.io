import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  @Input() showAll = true;

  private numberOfProjects = 18;

  oddNumbers: number[] = [];

  evenNumbers: number[] = [];

  constructor(private router: Router, private scroller: ViewportScroller) { }

  ngAfterViewInit(): void {
    if (this.showAll) {
      const projekty = document.getElementById('projekty');
      const aboutUs = document.getElementById('about-us');
      const nav = document.getElementById('nav');
      
      if (projekty && aboutUs && nav) {
        if (window.innerWidth < 769){
          this.scroller.scrollToPosition([0, projekty.offsetTop - aboutUs.offsetHeight - nav.offsetHeight])
        } else {
          this.scroller.scrollToPosition([0, projekty.offsetTop - aboutUs.offsetHeight])
        }
      }
    }
  }

  ngOnInit() {
    if (!this.showAll) {
      this.numberOfProjects = 6;
    }
    this.oddNumbers = Array.from({ length: this.numberOfProjects / 2 }, (e, i) => (i * 2) + 1);
    this.evenNumbers = Array.from({ length: this.numberOfProjects / 2 }, (e, i) => (i * 2));
  }

  navigateToProjects() {
    this.router.navigate(['projekty']);
  }

}
