import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private http: HttpClient) { }

  public sendMail(mailOptions: any) {
    return this.http.post('https://perfect-2b857.web.app/send-mail', { body : mailOptions });
  }
}
