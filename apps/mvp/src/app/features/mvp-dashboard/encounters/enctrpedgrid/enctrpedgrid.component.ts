import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'workspace-enctrpedgrid',
  templateUrl: './enctrpedgrid.component.html',
  styleUrls: ['./enctrpedgrid.component.scss']
})
export class EnctrpedgridComponent implements OnInit {

  @Input() pedInsightArr;
  @Input() displayedColumns;
  @Input() enTable;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  pedInsightDataSource:MatTableDataSource<any>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pedInsightArr);
    this.pedInsightDataSource = new MatTableDataSource(this.pedInsightArr);
    this.pedInsightDataSource.paginator = this.paginator;
  }

}
