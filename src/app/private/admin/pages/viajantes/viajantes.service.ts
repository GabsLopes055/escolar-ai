import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {User, UserPutRequest} from "../../../../models/user.interface";

const URL_BASE = `${environment.BACKEND_API}/user`;
@Injectable({
  providedIn: 'root'
})
export class ViajantesService {

  constructor(private readonly http: HttpClient) { }

  listarPorEmpresa(empresaId: number): Observable<User[]> {
    return this.http.get<User[]>(`${URL_BASE}/empresa/${empresaId}`);
  }

  atualizar(userPut: UserPutRequest): Observable<User> {
    return this.http.put<User>(`${URL_BASE}`, userPut);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${URL_BASE}/${id}`);
  }
  buscar(id: number): Observable<User> {
    return this.http.get<User>(`${URL_BASE}/${id}`);
  }
}
