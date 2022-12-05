import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-our-team-dialog',
  templateUrl: './our-team-dialog.component.html'
})
export class OurTeamDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { imgSrc: string, name: string, desc: string }, private dialogRef: MatDialogRef<OurTeamDialogComponent>) { }

  close() {
    this.dialogRef.close();
  }

}
