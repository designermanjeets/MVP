import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/login.model';
import { MvpLoginService } from './_services/mvp-login.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'workspace-mvp-login',
  templateUrl: './mvp-login.component.html',
  styleUrls: ['./mvp-login.component.scss']
})
export class MvpLoginComponent implements OnInit {

  model = <User>{};

  constructor(
    private mvpLoginService: MvpLoginService,
    private router: Router,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.mvpLoginService.logout(); //  Clear Session
  }

  onSubmit() {
    this.ngxService.start();
    this.mvpLoginService.login(this.model.username, this.model.password).subscribe(val => {
      val && this.router.navigate(['dashboard']);
    });
  }

}
