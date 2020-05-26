import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'workspace-tripurposesgrid',
  templateUrl: './tripurposesgrid.component.html',
  styleUrls: ['./tripurposesgrid.component.scss']
})
export class TripurposesgridComponent implements OnInit {

  @Input() dataSource;
  @Input() displayedColumns;
  @Input() enTable;

  constructor() { }

  ngOnInit(): void {
  }

}
