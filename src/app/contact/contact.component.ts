import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from './message.service';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formGroup: FormGroup;

  constructor(private dialog: MatDialog, private message: MessageService) {

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  public hasRequiredError(field: string): boolean {
    const formField = this.formGroup.get(field);
    return !!(formField && (formField.touched) && formField.hasError('required'));
  }

  public submit(): void {
    if (!this.formGroup.invalid) {
      this.message.sendMessage(
        {
          name: this.formGroup.value.name,
          email: this.formGroup.value.email,
          message: this.formGroup.value.message
        }
      )
      this.dialog.open(SuccessDialogComponent, {
        panelClass: 'success-dialog'
      });
    }
  }
}
