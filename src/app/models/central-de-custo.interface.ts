import {Empresa} from "./empresa.interface";
import {Cartao} from "./professores.interface";
import { FiltroDeBusca } from "./filtro-busca.interface";
import { Status, User, UserEntity } from "./user.interface";

export interface CentralDeCustoRequest {
  nome: string;
  valor: number;
  empresaId: number;
  cartaoId: number;
}
export interface CentralDeCusto {
  id: number;
  nome: string;
  valor: number;
  status: Status;
  empresa: Empresa;
  cartao: Cartao;
}

export interface CentralDeCustoSolicitacao extends FiltroDeBusca {
  statusCentralCusto: statusCentralCusto | null,
  nome: string | null;
  empresaId: number | null;
}

export interface CentralCustoEquipeEntity {
  id: number,
  centralDeCusto: CentralDeCusto,
  user: UserEntity,
  aprovador: boolean
}

export interface CentralCustoEquipeRequest {
  centralDeCustoId: number| null,
  userId: number | null,
  aprovador: boolean
}

export interface CentralCustoEquipeFiltro extends FiltroDeBusca {
  email: string | null,
  statusUser: Status | null,
  centralDeCustoId: number | null
}

export enum statusCentralCusto {
  ATIVA = "ATIVA",
  INATIVA = "INATIVA"
}
