import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {
  CentralDeCusto,
  CentralDeCustoRequest
} from "../../../../../models/central-de-custo.interface";

const URL_BASE = `${environment.BACKEND_API}/central-custo`;

@Injectable({
  providedIn: 'root'
})
export class CentralCustoService {

  showlist = new BehaviorSubject(true);
  showDetails = new BehaviorSubject(false);
  idCentralSelected = new BehaviorSubject<number | null>(null)

  constructor(private readonly http: HttpClient) { }

  cadastrar(centralDeCustoRequest: CentralDeCustoRequest): Observable<CentralDeCusto> {
    return this.http.post<CentralDeCusto>(`${URL_BASE}`,centralDeCustoRequest);
  }

  listarPorEmpresa(empresaId: number):Observable<CentralDeCusto[]> {
    return this.http.get<CentralDeCusto[]>(`${URL_BASE}/empresa/${empresaId}`);
  }

  deletar(id: number): Observable<CentralDeCusto> {
    return this.http.delete<CentralDeCusto>(`${URL_BASE}/${id}`);
  }
}
