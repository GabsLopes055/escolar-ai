import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {

  steps = new BehaviorSubject<string>('listar-turmas');

  constructor() { }
}
