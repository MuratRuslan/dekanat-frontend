import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './service/authentication-service';
import {Router} from '@angular/router';
import {isUndefined} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthenticationService,
              private router: Router) {
    if (authService.hasNoToken() || authService.isTokenExpired()) {
      console.log('expired or no token ' + authService.token);
      console.log('hasNoToken: ' + authService.hasNoToken() + ' \n ' + authService.isTokenExpired())
      this.login();
    }
  }

  login() {
    this.authService.login('ANONYMOUS', 'ANONYMOUS').subscribe(
      (res) => {
        if (res) {
          console.log('successs');
        }else {
          console.log('not succcc');
        }
      }
    );
    console.log(this.authService.token);
    console.log('hello from login');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['main']);
  }
}
