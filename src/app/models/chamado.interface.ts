import {User, UserEntity} from "./user.interface";

export interface Chamado {
  id: number;
  createdAt: Date;
  dataFinalizacao: Date;
  assunto: string;
  notaAtendimento: string;
  user: UserEntity;
  status: StatusChamado;
}

export interface MenssagemChamado {
  id: number;
  createdAt: Date;
  menssagem: string;
  chamado: Chamado;
  user: UserEntity;
}

export interface MenssagemChamadoRequest {
  menssagem: string;
  userId: number;
  chamadoId: number;
}

export interface ChamadoRequest {
  assunto: string;
  menssagem: string;
  userId: number
}

export interface FinalizarChamadoRequest {
  chamadoId: number;
  notaAvaliacao: number;
}

export enum StatusChamado {
  ABERTO = "ABERTO",
  EM_ATENDIMENTO = "EM_ATENDIMENTO",
  FECHADO = "FECHADO",
}
