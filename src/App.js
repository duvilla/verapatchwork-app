import './App.css';
import Patchwork from './components/Patchwork';
import logo from './images/vera-logo.jfif'

import hurdur from './images/hurdur.png'
import testePatchwork from './images/teste-patchwork.png'
import testePatchwork2 from './images/teste-patchwork2.png'

function App() {
  const categorias = [
    "Almofadas",
    "Bolsas",
    "Infantil",
    "Máscaras",
    "Quadros",
    "Necessaire",
    "Trilhos",
    "Toalhas"
  ]

  const patchworkList = [
    {
      nome: 'Hurdur',
      imagem: hurdur,
      preco: '60.00'
    },
    {
      nome: 'Cavalo',
      imagem: testePatchwork,
      preco: '45.00'
    },
    {
      nome: 'Flor',
      imagem: testePatchwork2,
      preco: '145.00'
    },
    {
      nome: 'item a mais',
      imagem: testePatchwork2,
      preco: '200.00'
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="content-area">
          <img src={logo} alt="logo" />
        </div>
      </header>

      <div className="content-area meio">
        <nav>
          <h2>Categorias</h2>
          {categorias.map(cat => {
            return (
              <div key={cat}>
                <a className="link" href="/#">{cat}</a>
              </div>
            )
          })}
        </nav>
        <div className="galeria">
          {patchworkList.map(patchwork => {
            return (
              <Patchwork
                className="item-galeria"
                nome={patchwork.nome}
                imagem={patchwork.imagem}
                preco={patchwork.preco}
              />
            )
          })}
        </div>
      </div>

      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
