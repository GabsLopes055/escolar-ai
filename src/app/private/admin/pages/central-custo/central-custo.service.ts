import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {
  CentralDeCusto,
  CentralDeCustoRequest,
  CentralDeCustoSolicitacao
} from "../../../../models/central-de-custo.interface";
import { EntityPaginated } from '../../../../models/filtro-busca.interface';

const URL_BASE = `${environment.BACKEND_API}/central-custo`;

@Injectable({
  providedIn: 'root'
})
export class CentralCustoService {

  showlist = new BehaviorSubject(true);
  showDetails = new BehaviorSubject(false);
  idCentralSelected = new BehaviorSubject<number | null>(null)
  nomeCentralSelected = new BehaviorSubject<string | null>(null)


  constructor(private readonly http: HttpClient) { }

  cadastrar(centralDeCustoRequest: CentralDeCustoRequest): Observable<CentralDeCusto> {
    return this.http.post<CentralDeCusto>(`${URL_BASE}`,centralDeCustoRequest);
  }

  listarPor(filtro: CentralDeCustoSolicitacao):Observable<EntityPaginated<CentralDeCusto[]>> {
    return this.http.post<EntityPaginated<CentralDeCusto[]>>(`${URL_BASE}/listar`, filtro);
  }

  deletar(id: number): Observable<CentralDeCusto> {
    return this.http.delete<CentralDeCusto>(`${URL_BASE}/${id}`);
  }

}
