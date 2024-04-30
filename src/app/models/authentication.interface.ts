export interface AuthenticationRequest {
    email: string;
    password: string;
}

export interface Token {
    token: string;
}

export interface Solicitacao {
    id?: number;
    nome: string;
    email: string;
    cnpj: string;
}

export interface UserRequest {
    nome: string;
    email: string;
    telefone: string;
    empresaId: number;
    password: string;
}