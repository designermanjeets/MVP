import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { displayedColsPurpose, colorScheme } from './../_models/trip.model';
import { MvpdashboardService } from './../_services/mvpdashboard.service';

@Component({
  selector: 'workspace-trip-purposes',
  templateUrl: './trip-purposes.component.html',
  styleUrls: ['./trip-purposes.component.scss']
})
export class TripPurposesComponent implements OnInit {
  displayedColumns: string[] = displayedColsPurpose;
  dataSource: any;
  @ViewChild(MatSort, {static: true }) sort: MatSort;

  //Pie
  commutePieResult: any[] = [];
  view: any[] = [400, 200];
  showLegend = true;
  colorScheme = colorScheme;
  showLabels = false;
  explodeSlices = false;
  doughnut = false;

  constructor(
    private mvpdashboardService: MvpdashboardService
  ) { }

  ngOnInit(): void {
    this.getTripsPurposeTable();
  }

  getCommPie(res) {
    const pieArr = [];
    for (const iter in res) {
      if(iter) {
        pieArr.push({name: iter, value: res[iter]})
      }
    }
    return pieArr;
  }

  getTripsPurposeTable() {
    this.mvpdashboardService.getTripsPurposeTable().subscribe(val => {
      if (val) {
        this.dataSource = new MatTableDataSource(val['TRIP PURPOSE']);
        this.dataSource.sort = this.sort;
        this.commutePieResult = this.getCommPie(val['TRIP CATEGORY']);
      }
    });
  }

}
