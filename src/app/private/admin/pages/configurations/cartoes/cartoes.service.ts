import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Cartao } from '../../../../../models/cartao.interface';
import {Observable} from "rxjs";
import {environment} from "../../../../../../environments/environment";

const URL_BASE = `${environment.BACKEND_API}/cartao`;

@Injectable({
  providedIn: 'root'
})
export class CartoesService {

  constructor(private readonly http: HttpClient) { }

  cadastrar(cartao: Cartao): Observable<Cartao> {
    return this.http.post<Cartao>(`${URL_BASE}`, cartao);
  }

  delete(id: number): Observable<Cartao> {
    return this.http.delete<Cartao>(`${URL_BASE}/${id}`);
  }
  listar(empresaId: number): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(`${URL_BASE}/empresa/${empresaId}`);
  }
}
