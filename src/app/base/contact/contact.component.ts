import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MailService } from './mail-service.service';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formGroup: FormGroup;

  constructor(private dialog: MatDialog, private mailService: MailService) {

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  public hasRequiredError(field: string): boolean {
    const formField = this.formGroup.get(field);
    return !!(formField && (formField.touched) && formField.hasError('required'));
  }

  public hasPatternError(field: string): boolean {
    const formField = this.formGroup.get(field);
    return !!(formField && (formField.touched) && formField.hasError('pattern'));
  }

  public submit(formDirective: FormGroupDirective): void {
    if (!this.formGroup.invalid) {
      const mailOptions = {
        subject: `Správa od ${this.formGroup.value.name}`,
        text: `${this.formGroup.value.message}\n\nE-mailová adresa odosielateľa: ${this.formGroup.value.email}\n\nTelefónne číslo odosielateľa: ${this.formGroup.value.phone}`
      }

      this.mailService.sendMail(mailOptions)
        .subscribe((result: any) => {
          if (result.output == 'success') {
            this.dialog.open(MessageDialogComponent, {
              panelClass: 'success-dialog',
              data: 'success'
            })
          } else {
            this.dialog.open(MessageDialogComponent, {
              panelClass: 'success-dialog',
              data: 'fail'
            })
          }

          formDirective.resetForm();
          this.formGroup.reset();
        });
    }
  }

  openFacebook() {
    window.open("https://www.facebook.com/profile.php?id=100090247062700", "_blank");
  }
}
