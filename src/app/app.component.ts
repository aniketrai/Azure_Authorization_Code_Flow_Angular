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
  constructor(public adalService: AdalService, private http: HttpClient) {
    adalService.init(environment.adalConfig);
  }

  ngOnInit() {
    this.adalService.handleWindowCallback();

    if (this.adalService.userInfo.authenticated) {
      console.log(this.adalService.userInfo.token);
      this.adalService.acquireToken("744e7ff9-802f-499f-bc4e-0a2b925d65c9").subscribe(
        data => {
          console.log(data);
        }
      );


      const param = {
        client_id: '2cc19000-7eec-4db6-8ba6-5e857b813cb2',
        code: this.adalService.userInfo.token,
        redirect_uri: 'http://localhost:4200',

      };

      // this.http.post<any>("https://login.microsoftonline.com/aniketrai2mindtree.onmicrosoft.com/oauth2/token", param).subscribe(
      //   data => {
      //     console.log(data);
      //   }
      // )
    }
  }

  login() {
    this.adalService.login();
  }

  logout() {
    this.adalService.clearCache();
    this.adalService.logOut();
  }
}
