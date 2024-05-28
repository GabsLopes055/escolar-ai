import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../../../models/user.interface";

const URL_BASE = `${environment.BACKEND_API}/user`;
@Injectable({
  providedIn: 'root'
})
export class ViajantesService {

  constructor(private readonly http: HttpClient) { }

  listarPorEmpresa(empresaId: number): Observable<User[]> {
    return this.http.get<User[]>(`${URL_BASE}/empresa/${empresaId}`);
  }
}
