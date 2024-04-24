import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest, Solicitacao, Token } from '../../models/authentication.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const URL_BASE = `${environment.BACKEND_API}/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }


  logar(authenticationRequest: AuthenticationRequest): Observable<Token> {
    return this.http.post<Token>(`${URL_BASE}/authenticate`, authenticationRequest);
  }

  registerEmpresa(solicitacaoRequest: Solicitacao): Observable<Solicitacao> {
    return this.http.post<Solicitacao>(`${URL_BASE}/register-empresa`, solicitacaoRequest);
  }
}
