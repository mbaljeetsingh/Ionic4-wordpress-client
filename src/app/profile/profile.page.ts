import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogin(f) {
    console.log(f.value);
    this.authService.postLogin(f.value).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err.message);
      }
    );
  }
}
