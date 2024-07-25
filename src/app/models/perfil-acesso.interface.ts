import { Empresa } from './empresa.interface';

export interface perfilAcesso extends Empresa {
  empresa: Empresa;
  id: number;
  passageiroReserva: boolean;
  passageiroViaja: boolean;
  gestorConvida: boolean;
  gestorReserva: boolean;
  gestorViaja: boolean;
  gestorCriaCentral: boolean;
  gestorVerMenu: boolean;
}

export interface perfilAcessoRequest {
  id: number;
  passageiroViaja: boolean;
  passageiroReserva: boolean;
  gestorReserva: boolean;
  gestorConvida: boolean;
  gestorViaja: boolean;
  gestorCriaCentral: boolean;
  gestorVerMenu: boolean;
  empresaId: number;
}
