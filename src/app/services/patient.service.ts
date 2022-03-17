import { Injectable } from '@angular/core';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients : Patient[] = [
    {name: "Daniel", illness: "Kidney Stones"},
    {name: "Bobby Smith", illness: "Broken Leg"},
    {name: "Jane Doe", illness: "Migraines"}
    ];
  constructor() { }
}
