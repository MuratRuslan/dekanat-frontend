import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './service/authentication-service';
import {Router} from '@angular/router';
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.login();
  }

  login() {
    if (isUndefined(this.authService.token)) {
      this.authService.login('ANONYMOUS', 'ANONYMOUS');
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['main']);
  }
}
