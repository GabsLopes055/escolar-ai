import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {Observable} from "rxjs";
import {Chamado, FiltroDeBuscaChamado} from "../../../../../../models/chamado.interface";
import { EntityPaginated } from '../../../../../../models/filtro-busca.interface';

const URL_BASE= `${environment.BACKEND_API}/chamado`;

@Injectable({
  providedIn: 'root'
})
export class SuportAtendimentoService {

  constructor(private readonly http: HttpClient) { }

  findall(filtro: FiltroDeBuscaChamado): Observable<EntityPaginated<Chamado>> {
    return this.http.post<EntityPaginated<Chamado>>(`${URL_BASE}/chamados/listar-por-filtro`, filtro);
  }
}
