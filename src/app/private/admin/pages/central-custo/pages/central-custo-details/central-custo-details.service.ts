import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CentralCustoDetailsService {

  filtroDeBuscaTexto = new BehaviorSubject<string | null>(null)

}
