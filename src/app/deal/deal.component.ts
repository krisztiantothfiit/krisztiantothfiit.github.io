import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type Deal = {
  price: number,
  kw: number, 
  name: string
}

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html'
})
export class DealComponent implements OnInit{
  deal: Deal = {
    price: 0,
    kw: 0,
    name: ''
  };

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get("assets/akcia.json").subscribe(data =>{
      console.log(data);
      this.deal = data as Deal;
    })
  }

}
