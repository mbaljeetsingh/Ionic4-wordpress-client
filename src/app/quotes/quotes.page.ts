import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss']
})
export class QuotesPage implements OnInit {
  quotes: any = [];
  constructor(
    private dataSerivce: DataService,
    public authService: AuthService
  ) {
    this.dataSerivce.getData('quotes').subscribe(data => {
      console.log(data);
      this.quotes = data;
      // setTimeout(() => {
      //   this.quotes = data;
      // }, 2000);
    });
  }

  ngOnInit() {}
}
