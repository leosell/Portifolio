import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Conteudo = () => {
    return (
        <div className="flex flex-col justify-center w-full h-full">
            <div className="flex flex-col ">
                <h1 className="text-8xl skew-x-12 font-bold text-end my-4">Leonardo Sell</h1>
                <h3 className="flex justify-end text-3xl">Desenvolvedor Back-End</h3>
            </div>

            <div className="w-3/4 h-14 text-start m-16 pl-28">
                <h3 className="text-base font-sans">
                    Focado em cada dia melhorar mais nessa área que escolhi para a vida.<br/>
                    E desfrutar da liberdade que essa profissão fornece para todos os profissionais da área.
                </h3>
                
                <div className='flex gap-3 py-4'>
                    <a href="https://github.com/leosell" target='_blanck'><BsGithub size={40} className='#FFF hover:text-cinza' /></a>
                    <a href="https://www.linkedin.com/in/leonardo-cabral-sell-353ba71b5/" target='_blanck'><BsLinkedin size={40} className='#FFF hover:text-cinza' /></a>
                    <a href="https://www.instagram.com/leo_sell_/" target='_blanck'><BsInstagram size={40} className='#FFF hover:text-cinza' /></a>
                </div>
            </div>
        </div>
    )
}

export default Conteudo