import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  SolicitacaoUser,
  UserEntity,
  UserRequest
} from "../../models/user.interface";

const URL_BASE = `${environment.BACKEND_API}/auth`;

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  constructor(private readonly http: HttpClient) { }

  buscarPorId(id: number):Observable<SolicitacaoUser> {
    return this.http.get<SolicitacaoUser>(`${URL_BASE}/solicitacao-user/${id}`);
  }

  cadastrar(userRequest: UserRequest): Observable<UserEntity> {
    return this.http.post<UserEntity>(`${URL_BASE}/register-user`, userRequest);
  }
}
