import { BiCopyright } from '@react-icons/all-files/bi/BiCopyright.esm'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import './index.css'

const Conteudo = () => {
    return (
        <div className='container'>
            <div className='containerTitulo'>
                <h1>Leonardo Sell</h1>
                <h3>Desenvolvedor FullStack<BiCopyright size={15} /></h3>
            </div>

            <div className='containerSubTitulo'>
                <h3>
                    Focado em cada dia melhorar mais nessa área que escolhi para a vida.<br/>
                    E desfrutar da liberdade que essa profissão fornece para todos os profissionais da área.
                </h3>
                
                <div className='icones'>
                    <a href="https://github.com/leosell" target='_blanck'><BsGithub size={40} color='#FFF' /></a>
                    <a href="https://www.linkedin.com/in/leonardo-cabral-sell-353ba71b5/" target='_blanck'><BsLinkedin size={40} color='#FFF' /></a>
                    <a href="https://www.instagram.com/leo_sell_/" target='_blanck'><BsInstagram size={40} color='#FFF' /></a>
                </div>
            </div>
        </div>
    )
}

export default Conteudo