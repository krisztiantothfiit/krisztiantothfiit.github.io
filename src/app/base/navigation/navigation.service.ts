import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  displayWhite: boolean = false;

  changeColorToWhite() {
    this.displayWhite = true;
  }

  changeColorToBlack() {
    this.displayWhite = false;
  }
}
