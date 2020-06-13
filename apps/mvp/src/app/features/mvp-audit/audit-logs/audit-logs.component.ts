import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AuditModel, AUDIT_DATA } from '../_models/audit.models';

@Component({
  selector: 'workspace-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.scss']
})
export class AuditLogsComponent implements OnInit {

  profileForm: FormGroup;

  displayedColumns: string[] = ['Action', 'User', 'Office', 'IPAddress', 'DateTimeStamp'];
  dataSource = new MatTableDataSource<AuditModel>();

  actions = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 }
  ]

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFilterForm();
    this.dataSource = new MatTableDataSource(AUDIT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  initFilterForm() {
    this.profileForm = this.fb.group({
      actions: [''],
      collab: [''],
      datefrom: [''],
      dateto: ['']
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

}
