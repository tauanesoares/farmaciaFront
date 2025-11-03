

export default interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    produtos?: Produto[]  // Relação opcional com Produtos
}