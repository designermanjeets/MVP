import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MvpLoginService } from './features/mvp-login/_services/mvp-login.service';
import { User } from './features/mvp-login/_models/login.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mvp';
  isLoggedIn: User;
  subs: Subscription;

  constructor(
    private mvpLoginService: MvpLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subs = this.mvpLoginService.currentUser.subscribe(val => {
      this.isLoggedIn = val;
      !val && this.router.navigate(['login']);
    });
  }

  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();    
  }

}
