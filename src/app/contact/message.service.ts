import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(body: any) {
    return this.http.post('http://localhost:3000/sendmail', body).subscribe();
  }
}
