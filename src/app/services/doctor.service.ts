import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  doctors : Doctor[] = [
  {name: "John Cross", specialization: "Dentistry"},
  {name: "Emannuel Onu", specialization: "Computer Science"},
  {name: "Peter Pan", specialization: "Urology"}
  ];
  
  constructor() { }
}
