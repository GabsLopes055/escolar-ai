import { Injectable } from '@angular/core';
import { environment } from '../../../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CentralCustoEquipeEntity, CentralCustoEquipeFiltro, CentralCustoEquipeRequest } from '../../../../../../../models/central-de-custo.interface';
import { Observable } from 'rxjs';
import { EntityPaginated } from '../../../../../../../models/filtro-busca.interface';

const URL = `${environment.BACKEND_API}/equipe-central-custo`;
@Injectable({
  providedIn: 'root'
})
export class EquipeCentralCustoService {

  constructor(
    private readonly http: HttpClient
  ) { }

    cadastrarUsuarioEquipeCentralCusto(centralCustoEquipe: CentralCustoEquipeRequest): Observable<CentralCustoEquipeEntity> {
      return this.http.post<CentralCustoEquipeEntity>(`${URL}`, centralCustoEquipe);
    }

    listarEquipesCentralCusto(filtroEquipeCentralBusco: CentralCustoEquipeFiltro) : Observable<EntityPaginated<CentralCustoEquipeEntity>> {
      return this.http.post<EntityPaginated<CentralCustoEquipeEntity>>(`${URL}/listar`, filtroEquipeCentralBusco);
    }

    delete(id: number): Observable<CentralCustoEquipeEntity> {
      return this.http.delete<CentralCustoEquipeEntity>(`${URL}/${id}`);
    }
}
