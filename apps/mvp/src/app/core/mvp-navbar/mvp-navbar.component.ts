import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MvpLoginService } from './../../features/mvp-login/_services/mvp-login.service';
import { MVPNavbarService } from './_services/mvpnavbar.service';

@Component({
  selector: 'workspace-mvp-navbar',
  templateUrl: './mvp-navbar.component.html',
  styleUrls: ['./mvp-navbar.component.scss']
})
export class MvpNavbarComponent implements OnInit {
  notifications: any[] = [];
  mpVersions: any[] = [];
  settings: any[] = [];

  constructor(
    private mvpLoginService: MvpLoginService,
    private mvpNavbarService: MVPNavbarService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.mvpNavbarService.reqFromMultiSources().subscribe(response => {
      if (response) {
        [this.notifications, this.mpVersions, this.settings] = response;
        this.ngxService.stop();
      }
    });
  }

  logout() {
    this.mvpLoginService.logout();
  }

}
