import { Link } from "react-router-dom";

function Navbar() {

  return (
      <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>

        <div className='container flex justify-between text-lg mx-8'>
          <Link to='/home' className="text-2xl font-bold">farmacia</Link>

          <div className='flex gap-4'>
            Produtos
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
          </div>
        </div>
      </div>
  );
  }


export default Navbar
