import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {

  incidentForm: FormGroup
  
  constructor() { }

  ngOnInit() {
    this.incidentForm = new FormGroup({
      subject: new FormControl('', Validators.required),
      sender: new FormControl('', Validators.email),
      details: new FormControl(''),
      send_date: new FormControl(''),
    });
  }

}
