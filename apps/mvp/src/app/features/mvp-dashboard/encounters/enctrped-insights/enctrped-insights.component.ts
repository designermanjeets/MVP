import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'workspace-enctrped-insights',
  templateUrl: './enctrped-insights.component.html',
  styleUrls: ['./enctrped-insights.component.scss']
})
export class EnctrpedInsightsComponent implements OnInit {

  @Input() encounters;

  constructor() { }

  ngOnInit(): void {
  }

}
