import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnomaliesService {

  constructor() { }

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
