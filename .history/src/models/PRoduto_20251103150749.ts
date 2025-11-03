import type Categoria from "./Categoria";

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;
    usuario: Usuario | null;
}