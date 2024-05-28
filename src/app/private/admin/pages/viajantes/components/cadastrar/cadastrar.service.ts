import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {
  SolicitacaoUser,
  SolicitacaoUserRequest
} from "../../../../../../models/user.interface";
import {Observable} from "rxjs";

const URL_BASE = `${environment.BACKEND_API}/solicitacao-usuario`;
@Injectable({
  providedIn: 'root'
})
export class CadastrarService {

  constructor(private readonly http: HttpClient) { }

  solicitarCadastro(solicitacaoUserRequest: SolicitacaoUserRequest): Observable<SolicitacaoUser> {
    return this.http.post<SolicitacaoUser>(`${URL_BASE}`, solicitacaoUserRequest);
  }
}
