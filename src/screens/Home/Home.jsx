import Logo from '../../components/Logo';
import Conteudo from '../../components/Conteudo';

const Home = () => {
    return (
        <div>
            <main className="flex pt-20">
                <section className="w-2/4 py-52 pl-44">
                    <Conteudo />
                </section>

                <section className="w-2/4">
                    <Logo />
                </section>
            </main>
        </div>
    )
}

export default Home