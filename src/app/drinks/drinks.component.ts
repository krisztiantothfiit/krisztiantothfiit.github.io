import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationService } from '../base/navigation/navigation.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html'
})
export class DrinksComponent implements OnInit, OnDestroy {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.changeColorToWhite();
  }

  ngOnDestroy(): void {
    this.navigationService.changeColorToBlack();
  }

}
