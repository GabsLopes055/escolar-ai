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