import axios from 'axios';

const api = axios.create({
    baseURL: 'https://blogpessoal-umwc.onrender.com'
}); 

export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}
export const deletar = async (url: string) => {
    await api.delete(url)
}