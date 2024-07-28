import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoosService {
  vooIda = new BehaviorSubject<any[] | null>([]);
  vooVolta = new BehaviorSubject<any[] | null>([]);

  updateVoosIda(voo: any) {
    const valorAtual: any = this.vooIda.value;
    this.vooIda.next([...valorAtual, voo]);
  }

  updateVoosVolta(voo: any) {
    const valorAtual: any = this.vooVolta.value;
    this.vooVolta.next([...valorAtual, voo]);
  }
}
