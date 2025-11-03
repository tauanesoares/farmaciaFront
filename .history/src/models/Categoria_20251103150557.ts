

export default interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    produtos?: Produto[] || null // Relação opcional com Produtos
}