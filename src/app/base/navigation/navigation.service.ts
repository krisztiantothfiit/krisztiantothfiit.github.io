import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  displayWhite: boolean = false;
  toClose: boolean = false;

  changeColorToWhite() {
    this.displayWhite = true;
  }

  changeColorToBlack() {
    this.displayWhite = false;
  }

  toggleNav() {
    this.toClose = !this.toClose;
  }
}
