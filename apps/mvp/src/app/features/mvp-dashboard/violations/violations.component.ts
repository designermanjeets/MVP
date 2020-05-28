import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  violationDataSource: MatTableDataSource<any>;

  today= Date.now();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
          this.voilationArr.push({'OperatorName': ele.OperatorName, ...vio});
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
    console.log(this.policyOrigArr);  

    this.violationDataSource = new MatTableDataSource(this.voilationArr);
    this.violationDataSource.paginator = this.paginator;
    this.cdr.detectChanges();

  }

}
