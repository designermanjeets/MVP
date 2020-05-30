import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'workspace-policydonuts',
  templateUrl: './policydonuts.component.html',
  styleUrls: ['./policydonuts.component.scss']
})

export class PolicydonutsComponent implements OnInit {

  @Input() policyArr;
  @Input() policyOrigArr;
  @Input() licenseArr;

  constructor() { }

  ngOnInit(): void {
  }

}
