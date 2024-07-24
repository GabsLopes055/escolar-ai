import {Empresa} from "./empresa.interface";
import { FiltroDeBusca } from "./filtro-busca.interface";

export interface User {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    dataNascimento: Date;
    role : Role;
    sexo: string;
    empresaId: number
}

export interface UserEntity {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  dataNascimento: Date;
  role : Role;
  sexo: string;
  empresa: Empresa
}

export interface UserRequest {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  dataNascimento: Date;
  role : Role;
  sexo: string;
  empresaId: number
}

export interface UserPutRequest extends UserRequest {
  id?: number;
}

export enum Role {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER',
    SUPPORT = 'SUPPORT'
}

export interface SolicitacaoUser {
  id: number;
  nome: string;
  email: string;
  empresa: Empresa;
  role: Role;
}
export interface SolicitacaoUserRequest extends FiltroDeBusca {
  nome?: string | null;
  email?: string | null;
  role?: Role | null;
  statusUser?: Status | null;
  empresaId?: number | null;
}

export enum Status {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO'
}
