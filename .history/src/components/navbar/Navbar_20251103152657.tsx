import { Link } from "react-router-dom";

function Navbar() {

  return (
      <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>

        <div className='container flex justify-between text-lg mx-8'>
          <Link to='/home' className="text-2xl font-bold">farmacia</Link>

          <div className='flex gap-4'>
            Postagens
            <Link to='/temas' className='hover:underline'>Temas</Link>
            Cadastrar tema
            Perfil
            Sair
          </div>
        </div>
      </div>
  );
  }


export default Navbar
