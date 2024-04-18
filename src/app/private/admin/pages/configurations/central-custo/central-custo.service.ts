import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentralCustoService {

  showlist = new BehaviorSubject(true);
  showDetails = new BehaviorSubject(false);
  idCentralSelected = new BehaviorSubject<number | null>(null)

  constructor() { }
}
