import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  public sendMail(mailOptions: any) {
    return this.http.post('https://us-central1-i-imko.cloudfunctions.net/app/send-mail', { body : mailOptions });
  }
}
