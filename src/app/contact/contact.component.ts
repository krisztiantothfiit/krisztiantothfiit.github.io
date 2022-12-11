import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MailServiceService } from './mail-service.service';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formGroup: FormGroup;

  constructor(private dialog: MatDialog, private mailService: MailServiceService) {

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
      const mailOptions = {
        subject: `Mail from ${this.formGroup.value.name}`,
        text: `${this.formGroup.value.message}\n\nSender mail: ${this.formGroup.value.email}`
      }

      this.mailService.sendMail(mailOptions)
        .subscribe((result: any) => {
          if (result.output == 'success') {
            this.dialog.open(SuccessDialogComponent, {
              panelClass: 'success-dialog'
            })
          }
        });
    }
  }
}
