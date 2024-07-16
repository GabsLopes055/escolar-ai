import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user.interface';
import { environment } from '../../../../../environments/environment';

const URL_BASE = `${environment.BACKEND_API}/user`;

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(
    private readonly http: HttpClient
  ) { }

  buscar(id: number): Observable<User> {
    return this.http.get<User>(`${URL_BASE}/${id}`);
  }
}
