import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  @Input() showAll = false;

  private numberOfProjects = 6;

  oddNumbers: number[] = [];

  evenNumbers: number[] = [];

  ngOnInit() {
    this.oddNumbers = Array.from({ length: this.numberOfProjects / 2 }, (e, i) => (i * 2) + 1);
    this.evenNumbers = Array.from({ length: this.numberOfProjects / 2 }, (e, i) => (i * 2));
  }

}
