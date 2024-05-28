import {Empresa} from "./empresa.interface";

export interface User {
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    dataNascimento: Date;
    role : Role;
    sexo: string;
    empresaId: number
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
export interface SolicitacaoUserRequest {
  nome: string;
  email: string;
  empresaId: number;
  role: Role;
}
