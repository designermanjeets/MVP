import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'workspace-policygrid',
  templateUrl: './policygrid.component.html',
  styleUrls: ['./policygrid.component.scss']
})

export class PolicygridComponent implements OnInit {

  @Input() voilationArr;
  @Input() displayedColumns;
  @Input() enTable;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  violationDataSource:MatTableDataSource<any>;

  constructor() { }

  ngOnInit(): void {
    this.violationDataSource = new MatTableDataSource(this.voilationArr);
    this.violationDataSource.paginator = this.paginator;
  }

}
