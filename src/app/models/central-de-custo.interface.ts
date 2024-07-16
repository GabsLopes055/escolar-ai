import {Empresa} from "./empresa.interface";
import {Cartao} from "./cartao.interface";
import {Status} from "../shared/status-circle/status-circle.component";
import { FiltroDeBusca } from "./filtro-busca.interface";

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

export enum statusCentralCusto {
  ATIVA = "ATIVA",
  INATIVA = "INATIVA"
}
