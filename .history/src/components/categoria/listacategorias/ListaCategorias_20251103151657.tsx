import { useContext, useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlearta";

function ListaTemas() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [temas, setTemas] = useState<Tema[]>([])
  
    const navigate = useNavigate()


  useEffect(() => {
    // voltar o usuario pra tela de login
    if (token === '') {
      ToastAlerta('Voce precisa estar logado!', 'info')
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    buscarTemas()
  }, [temas.length])


  async function buscarTemas() {
    try {
      setIsLoading(true)
      // buscando pelos temas com autorização
      await buscar('/temas', setTemas, {
        headers: {
          Authorization: token
        }
      })
    } catch (error: any) {
      if(error.toString().includes('401')) {
        ToastAlerta('Sessão expirada!', 'info')
        handleLogout()
      }
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>

        <h2 className='text-center font-bold text-3xl'>Lista de temas</h2>
        {isLoading && (
        <div className='flex justify-center my-8'><SyncLoader size={32} color='#131515' /></div>
        )}
            
        {(!isLoading && temas.length === 0) && (
            <span className="text-3xl text-center my-8">
                Nenhum Tema foi encontrado!
            </span>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 container mx-auto">
            {
            temas.map((tema) => (
                <CardTema key={tema.id} tema={tema}/>
            ))
            }
        </div>
            
    </>
  )
}

export default ListaTemas;