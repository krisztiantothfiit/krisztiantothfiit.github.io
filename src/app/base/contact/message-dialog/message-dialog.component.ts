import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-message-dialog',
    templateUrl: './message-dialog.component.html'
})
export class MessageDialogComponent implements OnInit {

    constructor(protected dialogRef: MatDialogRef<MessageDialogComponent, void>, @Inject(MAT_DIALOG_DATA) public data: any) {
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

