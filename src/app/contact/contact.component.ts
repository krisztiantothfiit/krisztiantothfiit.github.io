import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MailtrapClient } from 'mailtrap';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formGroup: FormGroup;
  TOKEN = "762ace8b8ed88072f00ddd617c37e498";
  SENDER_EMAIL = "info@perfect2003.sk";
  RECIPIENT_EMAIL = "fancyweb2022@gmail.com";

  client = new MailtrapClient({ token: this.TOKEN });
  sender = { name: "Mailtrap Test", email: this.SENDER_EMAIL };

  constructor(private dialog: MatDialog) {

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
      this.client
        .send({
          from: this.sender,
          to: [{ email: this.RECIPIENT_EMAIL }],
          subject: "Contact form",
          text: `
        <b>Správa cez kontaktný formulár</b><br />
        <br />
        <b>Meno: </b>${this.formGroup.value.name} <br />
        <b>Email: </b>${this.formGroup.value.email}<br />
        <br />
        <b>Správa:</b>
        <br /> ${this.formGroup.value.message}</b> `,
        })
        .then(() => this.dialog.open(SuccessDialogComponent, {
          panelClass: 'success-dialog'
        }));
    }
  }
}
