import { useEffect, useState } from "react";
import CardCategoria from "../cardcategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";


function ListaCategorias() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategoria] = useState<Categoria[]>([])
 

  async function buscarCategorias() {
  try {
    setIsLoading(true)
    // busca simples, sem headers de autorização
    await buscar('/categorias', setCategoria)
  } catch (error: any) {
    console.log('Erro ao buscar categorias:', error)
  } finally {
    setIsLoading(false)
  }
}

 useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

  
  return (
    <>
        <h2 className='text-center font-bold text-3xl'>Lista de temas</h2>
        {isLoading && (
        <div className='flex justify-center my-8'><SyncLoader size={32} color='#131515' /></div>
        )}
            
        {(!isLoading && categorias.length === 0) && (
            <span className="text-3xl text-center my-8">
                Nenhuma Categoria foi encontrada!
            </span>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 container mx-auto">
            {
            categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria}/>
            ))
            }
        </div>     
    </>
  )
}

export default ListaCategorias;