import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'workspace-fleetcircles',
  templateUrl: './fleetcircles.component.html',
  styleUrls: ['./fleetcircles.component.scss']
})
export class FleetcirclesComponent implements OnInit {

  @Input() fleetInsightsArr: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
