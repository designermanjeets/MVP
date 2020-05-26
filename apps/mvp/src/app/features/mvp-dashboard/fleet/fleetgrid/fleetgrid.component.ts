import { Component, OnInit, Input } from '@angular/core';
import { MvpdashboardService } from './../../_services/mvpdashboard.service';

@Component({
  selector: 'workspace-fleetgrid',
  templateUrl: './fleetgrid.component.html'
})
export class FleetgridComponent implements OnInit {

  @Input() fleetGridData;
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
