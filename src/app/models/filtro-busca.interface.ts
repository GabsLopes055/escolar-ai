export interface FiltroDeBusca {
  pagina: number;
  tamanhoPagina: number;
}

export interface EntityPaginated<T> {
  totalCount: number;
  itens: T[];
}
