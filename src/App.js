import './App.css';
import Header from './components/Header';
import Logo from './components/Logo';
import Conteudo from './components/Conteudo';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <section>
          <Conteudo />
        </section>

        <section>
          <Logo />
        </section>
      </main>
    </div>
  )
}

export default App;
