import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SolicitacaoUserRequest, User } from '../../../../../../models/user.interface';
import { EntityPaginated } from '../../../../../../models/filtro-busca.interface';

const URL_BASE = `${environment.BACKEND_API}/user`;
@Injectable({
  providedIn: 'root',
})
export class VoosService {

  confirmarVoo = new BehaviorSubject<boolean | null>(false);
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

  constructor(private readonly http: HttpClient) { }

  listarPor(filtro: SolicitacaoUserRequest): Observable<EntityPaginated<User[]>> {
    return this.http.post<EntityPaginated<User[]>>(`${URL_BASE}/listar`, filtro);
  }


}
