import { Injectable } from '@angular/core';
import {environment} from "../../../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {
  Chamado,
  ChamadoRequest
} from "../../../../../../models/chamado.interface";
import {Observable} from "rxjs";

const URL_BASE = `${environment.BACKEND_API}/chamado`;
@Injectable({
  providedIn: 'root'
})
export class AbrirChamadoService {

  constructor(private readonly http: HttpClient) { }

  abrirChamado(chamadoRequest: ChamadoRequest): Observable<Chamado> {
    return this.http.post<Chamado>(`${URL_BASE}`,chamadoRequest);
  }
}
