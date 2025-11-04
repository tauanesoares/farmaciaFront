import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlearta";

function FormTema() {

  const navigate = useNavigate()
  
  const [tema, setTema] = useState<Tema>({} as Tema)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {usuario, handleLogout} = useContext(AuthContext)
  const token = usuario.token
  const {id} = useParams<{id: string}>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: {Authorization: token}
      })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        console.log(error);
        ToastAlerta('Sessão expirada!', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Necessario logar!', 'info')
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    if(id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value
    })
  }

  function retornar() {
    navigate('/temas')
  }

  async function gerarNovoTema(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    if (id !== undefined) {
      try {
        await atualizar('/temas', tema, setTema, {
          headers: {Authorization: token}
        })
        ToastAlerta('Tema atualizado com sucesso!', 'info')
      } catch (error: any) {
        if(error.toString().includes('401')) {
          ToastAlerta('Sessão expirada!', 'info')
          handleLogout()
        } else {
          ToastAlerta('Falha ao atualizar o tema!', 'erro')
        }
      }
    } else {
      try {
        await cadastrar('/temas', tema, setTema, {
          headers: {Authorization: token}
        })
        ToastAlerta('Tema atualizado com sucesso!', 'sucesso')
      } catch (error: any) {
        if(error.toString().includes('401')) {
          ToastAlerta('Sessão expirada!', 'info')
          handleLogout()
        } else {
          ToastAlerta('Falha ao cadastrar o tema!', 'erro')
        }
      }
    }

    setIsLoading(false)
    retornar()
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center my-8 font-bold font-mono">{id === undefined ? 'Cadastrar' : 'Atualizar'} tema</h1>
      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do novo tema</label>
          <input
            type="text"
            placeholder="Digite o novo tema aqui..."
            id="descricao"
            name="descricao"
            className="border-2 border-stone-800 rounded p-2"
            value={tema.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <button
            className="bg-stone-600 py-2 text-lg font-bold text-white w-1/3 mx-auto hover:bg-stone-800 cursor-pointer rounded"
            type="submit"
          >
            {isLoading ? <ClipLoader size={24} color="#fff" /> : <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormTema;