import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss']
})
export class QuoteDetailsPage implements OnInit {
  quote;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.dataService.getData(`quotes/${id}`).subscribe(data => {
      console.log(data);
      this.quote = data;
    });
  }

  onDelete() {
    this.dataService.deleteData(`quotes/${this.quote.id}`).subscribe(data => {
      console.log(data);
      this.dataService.refreshQuotes.next();
      this.router.navigateByUrl('/tabs');
    });
  }
}
