import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private db: AngularFirestore) { }

  getIncidents(): any {
    return this.db.collection("incident");
  }
}
