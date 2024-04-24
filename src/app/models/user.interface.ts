export interface User {
    nome: string;
    email: string;
    telefone: string;
    role : Role;
    empresaId: number
}

export enum Role {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER',
    SUPPORT = 'SUPPORT'
}