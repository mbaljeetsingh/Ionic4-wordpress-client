import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.page.html',
  styleUrls: ['./edit-quote.page.scss']
})
export class EditQuotePage implements OnInit {
  model: any = {};
  constructor(private dataService: DataService) {}

  ngOnInit() {}
  onEditQuote(f) {
    console.log(f.value);
    this.dataService.postData('quotes', f.value).subscribe(data => {
      console.log(data);
    });
  }
}
