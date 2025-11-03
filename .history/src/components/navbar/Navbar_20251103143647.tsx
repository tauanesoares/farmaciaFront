function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {

    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate('/')
  }

  let component: ReactNode

  if (usuario.token !== "") {

    component = (

      <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>

        <div className='container flex justify-between text-lg mx-8'>
          <Link to='/home' className='text-2xl font-bold'>Blog Pessoal</Link>

          <div className='flex gap-4'>
            Postagens</Link>
            Temas
            Cadastrar tema
            Perfil
            Sair
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      { component }
    </>
  )
}

export default Navbar
