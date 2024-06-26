import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../../environments/environment";
import {
  Chamado,
  FinalizarChamadoRequest,
  MenssagemChamado, MenssagemChamadoRequest
} from "../../../../../../../../models/chamado.interface";

const URL_BASE= `${environment.BACKEND_API}/chamado`;

@Injectable({
  providedIn: 'root'
})
export class DetalheAtendimentoService {

  constructor(private readonly http: HttpClient){ }

  getMenssagens(idChamado: number): Observable<MenssagemChamado[]> {
    return this.http.get<MenssagemChamado[]>(`${URL_BASE}/menssagens/${idChamado}`);
  }

  responderChamado(menssagemChamadoRequest: MenssagemChamadoRequest): Observable<MenssagemChamado> {
    return this.http.post<MenssagemChamado>(`${URL_BASE}/responder-chamado`, menssagemChamadoRequest);
  }
  finalizarChamado(finalizar: FinalizarChamadoRequest): Observable<Chamado> {
    return this.http.post<Chamado>(`${URL_BASE}/finalizar`, finalizar);
  }
  avaliar(finalizar: FinalizarChamadoRequest): Observable<Chamado> {
    return this.http.post<Chamado>(`${URL_BASE}/avaliar`, finalizar);
  }

  buscar(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(`${URL_BASE}/${id}`);
  }
}
