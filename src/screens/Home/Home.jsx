import Header from '../../components/Header'
import Logo from '../../components/Logo';
import Conteudo from '../../components/Conteudo';
import './index.css'

const Home = () => {
    return (
        <div className="container">
            <Header />
            <main className='conteudoMain'>
                <section className='sectionConteudo'>
                    <Conteudo />
                </section>

                <section className='sectionImage'>
                    <Logo />
                </section>
            </main>
        </div>
    )
}

export default Home