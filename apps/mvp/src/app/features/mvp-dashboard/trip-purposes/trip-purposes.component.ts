import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { displayedColsPurpose, TripPurposeElement } from './../_models/trip.model';
import { MvpdashboardService } from './../_services/mvpdashboard.service';

@Component({
  selector: 'workspace-trip-purposes',
  templateUrl: './trip-purposes.component.html',
  styleUrls: ['./trip-purposes.component.scss']
})
export class TripPurposesComponent implements OnInit {
  displayedColumns: string[] = displayedColsPurpose;
  dataSource: MatTableDataSource<TripPurposeElement>;
  @ViewChild(MatSort, {static: true }) sort: MatSort;

  constructor(
    private mvpdashboardService: MvpdashboardService
  ) { }

  ngOnInit(): void {
    this.getTripsPurposeTable();
  }

  getTripsPurposeTable() {
    this.mvpdashboardService.getTripsPurposeTable().subscribe(val => {
      if (val) {
        this.dataSource = new MatTableDataSource(val.payload);
        this.dataSource.sort = this.sort;
      }
    });
  }

}
