import Postagem from "./Postagem";

export default interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    postagem?: Postagem[] | null;
}