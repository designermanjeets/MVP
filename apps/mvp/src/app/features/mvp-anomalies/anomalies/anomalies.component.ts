import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AnomaliesModel, ANOMALIES_DATA, anomalyData, DeviationsModel, DEVIATION_DATA, DeviationsPopModel, DEVIATION_POP_DATA } from './_models/anomalies.models';
import { AnomaliesService } from './../_services/anomalies.service';
import * as moment from 'moment'
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'workspace-anomalies',
  templateUrl: './anomalies.component.html',
  styleUrls: ['./anomalies.component.scss']
})
export class AnomaliesComponent implements OnInit {

  chartData: any[];
  displayedColumns: string[] = [ 'Operator', 'Anomalies' ];
  dataSource = new MatTableDataSource<AnomaliesModel>();
  displayedColumnsDv: string[] = [ 'Operator', 'Deviations' ];
  dataSourceDv = new MatTableDataSource<DeviationsModel>();
  dataSourceDvPop = new MatTableDataSource<DeviationsPopModel>();
  tabIndex: number;

  constructor(
    private anomaliesService: AnomaliesService
  ) { }

  ngOnInit(): void {

    this.chartData = this.extractTrips(anomalyData);
    this.dataSource = new MatTableDataSource(ANOMALIES_DATA);
    this.dataSourceDv = new MatTableDataSource(DEVIATION_DATA);
    this.dataSourceDvPop = new MatTableDataSource(DEVIATION_POP_DATA);

  }

  extractTrips(val) {
    const temp = [];
    // this.enTable = Object.keys(val)[0];
    val.TRIP.forEach(ele => {
      for (const item in ele) {
        if(Array.isArray(ele[item])) {
          ele[item].forEach((timeline, i) => {
            for (const el in timeline.timeline) {
              if(el) {
                const data = [];
                for (const ele2 in timeline.timeline[el]) {
                  if(ele2) {
                    const time = moment.utc(ele2, "HH:mm");
                    const name = time.format('LT');
                    data.push(Number(timeline.timeline[el][ele2]))
                  }
                }
                temp.push({'name': item, data});
              }
            }
          });
        }
      }
    });
    return temp;
  }

  checkForBrace(data) {
    return this.anomaliesService.getNegPosValue(data);
  }

  selectedTabChange($event: MatTabChangeEvent) {
    this.tabIndex = $event.index;
  }

}
