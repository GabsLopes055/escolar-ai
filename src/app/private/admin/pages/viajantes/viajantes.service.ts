import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {SolicitacaoUserRequest, User, UserPutRequest} from "../../../../models/user.interface";
import { EntityPaginated } from '../../../../models/filtro-busca.interface';

const URL_BASE = `${environment.BACKEND_API}/user`;
@Injectable({
  providedIn: 'root'
})
export class ViajantesService {

  statusBehavior = new BehaviorSubject<any | null>(null);
  perfilBehavior = new BehaviorSubject<any | null>(null);
  inputBehavior = new BehaviorSubject<any | null>(null);


  constructor(private readonly http: HttpClient) { }

  listarPor(filtro: SolicitacaoUserRequest): Observable<EntityPaginated<User[]>> {
    return this.http.post<EntityPaginated<User[]>>(`${URL_BASE}/listar`, filtro);
  }

  atualizar(userPut: UserPutRequest): Observable<User> {
    return this.http.put<User>(`${URL_BASE}`, userPut);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${URL_BASE}/${id}`);
  }
  buscar(id: number): Observable<User> {
    return this.http.get<User>(`${URL_BASE}/${id}`);
  }
}
