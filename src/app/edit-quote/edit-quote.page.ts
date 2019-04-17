import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.page.html',
  styleUrls: ['./edit-quote.page.scss']
})
export class EditQuotePage implements OnInit {
  model: any = {};
  id;
  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.dataService.getData(`quotes/${this.id}`).subscribe(data => {
        console.log(data);
        this.model = {
          title: data['title'].rendered,
          writer: data['writer'],
          status: data['status']
        };
      });
    }
  }
  onEditQuote(f) {
    console.log(f.value);
    if (this.id) {
      this.dataService.putData(`quotes/${this.id}`, f.value).subscribe(data => {
        console.log(data);
        this.dataService.refreshQuotes.next();
        this.router.navigateByUrl('/tabs');
      });
    } else {
      this.dataService.postData('quotes', f.value).subscribe(data => {
        console.log(data);
        this.dataService.refreshQuotes.next();
        this.router.navigateByUrl('/tabs');
      });
    }
  }
}
