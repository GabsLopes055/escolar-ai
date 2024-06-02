import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {Observable} from "rxjs";
import {Chamado} from "../../../../../../models/chamado.interface";

const URL_BASE= `${environment.BACKEND_API}/chamado`;

@Injectable({
  providedIn: 'root'
})
export class SuportAtendimentoService {

  constructor(private readonly http: HttpClient) { }

  findall(idUser: number): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${URL_BASE}/chamados/${idUser}`);
  }
}
