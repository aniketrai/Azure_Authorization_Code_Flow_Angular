import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularAuth';
  constructor(public adalService: AdalService, private http : HttpClient) {
    adalService.init(environment.adalConfig);
  }

  ngOnInit() {
    this.adalService.handleWindowCallback();

    if (this.adalService.userInfo.authenticated) {
      console.log(this.adalService.userInfo.token);

    }
  }

  login() {
    this.adalService.login();
  }

  logout(){
    this.adalService.clearCache();
    this.adalService.logOut();
  }
}
