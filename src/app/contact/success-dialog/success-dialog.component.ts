import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-success-dialog',
    templateUrl: './success-dialog.component.html'
})
export class SuccessDialogComponent implements OnInit {

    constructor(protected dialogRef: MatDialogRef<SuccessDialogComponent, void>) {
    }

    ngOnInit(): void {
        this.dialogRef.afterOpened()
            .subscribe(
                () => {
                    setTimeout(() => {
                        this.dialogRef.close();
                    }, 1500);
                });
    }

    public closeDialog(): void {
        this.dialogRef.close();
    }
}

