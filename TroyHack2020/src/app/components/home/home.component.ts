import { Component } from '@angular/core';
import { IncidentFormComponent } from '../incident-form/incident-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(IncidentFormComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
