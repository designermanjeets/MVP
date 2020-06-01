import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ENCOUNTER } from './../_models/encounter.models';

@Component({
  selector: 'workspace-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EncountersComponent implements OnInit {

  enctrChart: any[] = [];
  enTable: any;
  encounters:any = ENCOUNTER.Encounters;
  fleetModesArr = ENCOUNTER.Encounters.Modes;
  encntrPieResult: any[];

  pedInsightArr: any[];
  displayedColumns: any[] = ['Operator', 'Condition', 'Severity', 'Category', 'Area', 'Zone', 'Attribute', 'When', 'Violation'];

  today= Date.now();

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.enTable = Object.keys(ENCOUNTER)[0];

    this.enctrChart = this.extractTrips(this.encounters);  // Getting Encounters Pie Chart Data
    this.encntrPieResult = this.convertEncountersModes();  // Encounters Pie Chart Data Conversion
    this.cdr.detectChanges();
  }

  extractTrips(val) {
    const temp = [];
    this.pedInsightArr = [];

    val.Operator.forEach(ele => {
      const data = [];

      for (const ite of ele.EncountersTimeLines) {
        data.push(Number(ite.Count));
      }
      temp.push({'name': ele.OperatorName, data}); // Encounters Line Chart Data
      
      
      for (const ite of ele.EncounterDetails) {
        this.pedInsightArr.push({'Operator': ele.OperatorName, ...ite}); // Pedestrians Grid Data
      }

    });

    return temp; // Return Encounters Pie Chart Data
  }

  convertEncountersModes() {
    const pieArr = [];
    this.fleetModesArr.forEach(ele => {
      const per = ele.Value.replace(/\% ?/g, "");
      pieArr.push({name: ele.Name, y: Number(per)})
    });
    return pieArr;
  }

}
