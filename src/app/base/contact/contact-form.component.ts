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

  insurances = ['majetkuObcanov', 'motorovychVozidiel', 'osob', 'podnikatelov',
    'bytovychDomov', 'cestovne', 'vykonuPrace', 'profesii', 'kybernetickychRizik',
    'agro', 'dopravnychProstriedkov', 'do']

  constructor(private dialog: MatDialog, private mailService: MailService, private translate: TranslateService) {

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      insurance: new FormControl('', [Validators.required]),
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
    console.log(this.formGroup.value.insurance, this.translate.instant(`contact.form.insurance.${this.formGroup.value.insurance}`))
    if (!this.formGroup.invalid) {
      const mailOptions = {
        subject: `Správa od ${this.formGroup.value.name}`,
        text: `${this.formGroup.value.message}\n\nMeno odosielateľa: ${this.formGroup.value.name}\n\nOdosielateľ má záujem o: ${this.formGroup.value.insurance}\n\nE-mailová adresa odosielateľa: ${this.formGroup.value.email}\n\Mobilné číslo odosielateľa: ${this.formGroup.value.phone}`
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
