import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Incident } from '../../models/incident';
import { IncidentService } from "../../services/incident.service";

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit{

  incidentForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<IncidentFormComponent>, public is: IncidentService) { }

  ngOnInit(): void {
    this.incidentForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      sender: new FormControl('', Validators.required),
      details: new FormControl(''),
      send_date: new FormControl(''),
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    let incident = this.incidentForm.value as Incident;
    incident.votes = 0;
    this.is.postIncident(incident);
    
    this.dialogRef.close();
  }

}
