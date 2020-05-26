import { Component, OnInit, Input } from '@angular/core';
import { MvpdashboardService } from './../../_services/mvpdashboard.service';

@Component({
  selector: 'workspace-tripsgrid',
  templateUrl: './tripsgrid.component.html',
  styleUrls: ['./tripsgrid.component.scss']
})
export class TripsgridComponent implements OnInit {

  @Input() tripGridData;
  @Input() displayColumns;
  @Input() enTable;

  constructor(
    private mvpdashboardService: MvpdashboardService
  ) { }

  ngOnInit(): void {
  }

  checkForBrace(data) {
    return this.mvpdashboardService.getNegPosValue(data);
  }

}
