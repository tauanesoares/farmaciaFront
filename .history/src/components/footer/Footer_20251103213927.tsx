import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"


function Footer() {

    let data = new Date().getFullYear()
    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            FarmaGen | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/tauanesoares" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                         <a href="">
                            <InstagramLogoIcon size={48} weight='bold' />
                         </a>
                        
                        <a href="">
                            <LinkedinLogoIcon size={48} weight='bold' />
                         </a>
                    </div>
                </div>
            </div>
        </>  
    );
}

export default Footer