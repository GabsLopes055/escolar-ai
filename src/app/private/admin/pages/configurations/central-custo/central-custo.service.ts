import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentralCustoService {

  showlist = new BehaviorSubject(false);
  showDetails = new BehaviorSubject(true);
  idCentralSelected = new BehaviorSubject<number | null>(null)

  constructor() { }
}
