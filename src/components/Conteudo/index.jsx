import { BiCopyright } from '@react-icons/all-files/bi/BiCopyright.esm'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Conteudo = () => {
    return (
        <div>
            <div>
                <h1>LEONARDO SELL</h1>
                <h1>LEONARDO SELL</h1>
                <h3>Desenvolvedor FullStack <BiCopyright /></h3>
            </div>

            <div>
                <h3>
                    Focado em cada dia melhorar mais nessa área que escolhi para a vida.
                    E desfrutar da liberdade que essa profissão fornece para todos os profissionais da área.
                </h3>
                
                <div>
                    <BsGithub />
                    <BsLinkedin />
                    <BsInstagram />
                </div>
            </div>
        </div>
    )
}

export default Conteudo