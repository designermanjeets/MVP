import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { VIOLATIONS, TEMP } from './../_models/violations.models';

@Component({
  selector: 'workspace-violations',
  templateUrl: './violations.component.html',
  styleUrls: ['./violations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViolationsComponent implements OnInit {

  enTable: string;

  licenseArr: any[];
  policyArr: any[];
  policyOrigArr: any[];
  voilationArr: any[];

  limePolicyPieRes: any[];

  displayedColumns: any[] = ['OperatorName', 'Area', 'Category', 'WhatHappened', 'When', 'Resolution', 'STATUS'];

  today= Date.now();

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getPolicyDis();
  }

  getPolicyDis() {
    this.enTable = Object.keys(VIOLATIONS)[0];

    this.licenseArr = VIOLATIONS.Violations.Operator;

    this.policyArr = [];
    this.voilationArr = [];
    this.policyOrigArr = [];

    VIOLATIONS.Violations.Operator.forEach((ele, i) => {

      if(ele.PolicyViolations) {
        ele.PolicyViolations.forEach(vio => {
          this.voilationArr.push({'OperatorName': ele.OperatorName, ...vio}); // Violation Grid Data
        });
      }


      if(ele.PolicyDistribution) {
        const pol = [];
        pol.push({'name': ele.OperatorName, 'data': []})
        ele.PolicyDistribution.forEach(elem => {
          pol[0]['data'].push({'name': elem.Name, 'y': elem.Percentage});
        });
        this.policyArr.push(pol);
        this.policyOrigArr.push({'name': ele.OperatorName, 'policies': ele.PolicyDistribution});
      }

    });

    this.cdr.detectChanges();

  }

}
