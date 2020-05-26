import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'workspace-densitygrid',
  templateUrl: './densitygrid.component.html',
  styleUrls: ['./densitygrid.component.scss']
})
export class DensitygridComponent implements OnInit {

  @Input() desnityDataSource;
  @Input() displayedColumns;

  constructor() { }

  ngOnInit(): void {
  }

}
