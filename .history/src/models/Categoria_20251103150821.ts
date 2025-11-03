import Produto from "./PRoduto";

export default interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    postagem?: Produto[] | null;
}