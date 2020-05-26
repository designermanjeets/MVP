import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MvpdashboardService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getTrips() {
    return this.http.get<any>(`${environment.apiUrl}/trips`)
      .pipe(map(res => res),
      catchError(this.handleError) // then handle the error
  )}

  getTripsPurposeTable() {
    return this.http.get<any>(`${environment.apiUrl}/trippurposetable`)
    .pipe(map(res => res),
    catchError(this.handleError) // then handle the error
  )};

  getFleetInsights() {
    return this.http.get<any>(`${environment.apiUrl}/fleetinsights`)
    .pipe(map(res => res),
    catchError(this.handleError) // then handle the error
  )};

  getFleetModes() {
    return this.http.get<any>(`${environment.apiUrl}/fleetmodes`)
    .pipe(map(res => res),
    catchError(this.handleError) // then handle the error
  )};

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getNegPosValue(data) {
    const reg = /\((.*)\)/;
    let wrapped = data.match(reg) && data.match(reg)[1];
    if(wrapped) {
      data = data.replace(wrapped, '');
      if(wrapped.includes('+')) {
        wrapped = `<span class="color-lime">(${wrapped})</span>`
      } else if(wrapped.includes('-')) {
        wrapped = `<span class="color-bird">(${wrapped})</span>`
      }
      data = data.replace(/[()]/g, '');
      return `${data}${wrapped}`;
    } else {
      return data;
    } 
  }

}