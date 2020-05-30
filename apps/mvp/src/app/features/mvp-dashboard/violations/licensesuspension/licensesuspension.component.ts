import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'workspace-licensesuspension',
  templateUrl: './licensesuspension.component.html',
  styleUrls: ['./licensesuspension.component.scss']
})
export class LicensesuspensionComponent implements OnInit {

  @Input() licenseArr;
  @Input() enTable;

  constructor() { }

  ngOnInit(): void {
  }

}
