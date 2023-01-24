import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  @Input() showAll = true;

  private numberOfProjects = 18;

  oddNumbers: number[] = [];

  evenNumbers: number[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    if (!this.showAll) {
      this.numberOfProjects = 6;
    }
    this.oddNumbers = Array.from({ length: this.numberOfProjects / 2 }, (e, i) => (i * 2) + 1);
    this.evenNumbers = Array.from({ length: this.numberOfProjects / 2}, (e, i) => (i * 2));
    console.log(this.oddNumbers, this.evenNumbers)
  }

  navigateToProjects(){
    this.router.navigate(['projekty']);
  }

}
