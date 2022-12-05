import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OurTeamDialogComponent } from './dialog/our-team-dialog.component';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html'
})
export class OurTeamComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(data: any): void {
    this.dialog.open(OurTeamDialogComponent, { data });
  }
}
