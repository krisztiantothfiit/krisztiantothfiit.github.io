import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MailService } from './mail-service.service';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  formGroup: FormGroup;

  constructor(private dialog: MatDialog, private mailService: MailService, private translate: TranslateService) {

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      people: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      email: new FormControl('', []),
      phone: new FormControl('', [Validators.required]),
      message: new FormControl('', [])
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
        subject: `Rezervácia trikvety`,
        text: `Meno a priezvisko: ${this.formGroup.value.name}\n\nPočet ľudí: ${this.formGroup.value.people}\n\nČas: ${this.formGroup.value.time}\n\nMobilné číslo: ${this.formGroup.value.phone}\n\nEmail: ${this.formGroup.value.email ? this.formGroup.value.email : 'neuvedené'}\n\nPoznámky (intolerancie, požiadavky): ${this.formGroup.value.message ? this.formGroup.value.message : 'neuvedené'}`
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
}
