import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { perfilAcesso, perfilAcessoRequest } from '../../../../../models/perfil-acesso.interface';

const URL_BASE = `${environment.BACKEND_API}/settings-empresa`;

@Injectable({
  providedIn: 'root'
})


export class PerfilAcessoService {

  constructor(
    private readonly http: HttpClient
  ) { }

  buscar(id: number): Observable<perfilAcesso> {
    return this.http.get<perfilAcesso>(`${URL_BASE}/empresa/${id}`);
  }

  atualizar(permissoes: perfilAcessoRequest): Observable<perfilAcesso> {

    console.log(permissoes)

    return this.http.put<perfilAcesso>(`${URL_BASE}`, permissoes)
  }
}
