import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Observable, forkJoin, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MVPNavbarService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getNotifications() {
    return this.http.get<any>(`${environment.apiUrl}/notifications`)
      .pipe(map(res => res.payload));
  }

  getMPVersions() {
    return this.http.get<any>(`${environment.apiUrl}/mpversions`)
      .pipe(map(res => res.payload));
  }

  getsettings() {
    return this.http.get<any>(`${environment.apiUrl}/settings`)
      .pipe(map(res => res.payload));
  }

  public reqFromMultiSources(): Observable<any[]> {
    const res1 = this.getNotifications();
    const res2 = this.getMPVersions();
    const res3 = this.getsettings();
    return forkJoin([res1, res2, res3]);
  }

}
