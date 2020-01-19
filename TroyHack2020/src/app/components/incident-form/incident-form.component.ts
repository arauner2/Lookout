import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent {

  constructor(public dialogRef: MatDialogRef<IncidentFormComponent>, @Inject(MAT_DIALOG_DATA) public data: FormGroup) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createIncident(): void {
    //TODO: create
    this.dialogRef.close();
  }

}
