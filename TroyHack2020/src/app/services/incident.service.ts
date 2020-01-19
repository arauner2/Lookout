import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private db: AngularFirestore) { }

  getIncidents(): any {
    return this.db.collection("incident");
  }

  postIncident(incident: Incident): void {
    this.db.collection("incident").add(incident);
  }

  updateIncident(id: string, update: any): void {
    this.db.collection("incident").doc(id).update(update);
  }
}
