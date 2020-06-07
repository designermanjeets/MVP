import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { INGESTION } from './../_models/ingestion.models';

@Component({
  selector: 'workspace-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrls: ['./ingestion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngestionComponent implements OnInit {

  ingestModel: any[];
  ingestArr: any[];
  enTable;
  xFills: [];

  pedInsightDataSource:MatTableDataSource<any>;

  constructor() { }

  ngOnInit(): void {

    this.enTable = Object.keys(INGESTION)[0];
    this.ingestModel = INGESTION.Ingestion[0].Operator;

    this.extractTrips();
    console.log(this.enTable);

  }

  extractTrips() {
    this.ingestArr = [];

    this.ingestModel.forEach(e => {
      if(e) {
        const apikeys = Object.keys(e.API[0]);
        this.ingestArr.push({'Operator': e.OperatorName, cols: apikeys, API: e.API})
      }
    });

  }

  getXfills(num) {
    return Array(num).fill(1).map((x,i) => i + 1); // [1,2,3,4,5]
  }

}
