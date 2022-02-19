import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import './App.css';
import Patchwork from './components/Patchwork';
import logo from './images/vera-logo.jfif'

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const [patchworkList, setPatchworkList] = useState([])
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

  function PatchworkList() {
    let query = useQuery()
    const categoria = query.get('categoria')

    const filteredPatchworks = patchworkList.filter(patchwork => patchwork.categoria === categoria)

    return (
      <div className="galeria">
        {filteredPatchworks.map(patchwork => {
          return (
            <Patchwork
              key={patchwork.nome}
              className="item-galeria"
              nome={patchwork.nome}
              imagem={patchwork.imagem}
              preco={patchwork.preco}
            />
          )
        })}
      </div>
    )
  }

  useEffect(() => {
    const loadPatchworks = async () => {
      const response = await fetch("http://localhost:1337/api/patchworks/?populate=*")
      const { data } = await response.json()
      const list = data.map(item => {
        const { attributes } = item
        const { titulo, preco, imagem, categoria } = attributes
        const { data: imagemData } = imagem
        const { attributes: imagemAttributes } = imagemData
        const { url } = imagemAttributes

        const { data: categoriaData } = categoria
        const { attributes: categoriaAttributes } = categoriaData
        const { titulo: categoriaTitulo } = categoriaAttributes

        return {
          nome: titulo,
          preco,
          imagem: `http://localhost:1337${url}`,
          categoria: categoriaTitulo
        }
      })
      setPatchworkList(list)
    }
    loadPatchworks();
  }, [])

  return (
    <div className="app">
      <Router>
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
                  <Link className="link" to={`/?categoria=${cat}`}>{cat}</Link>
                </div>
              )
            })}
          </nav>
          <Routes>
            <Route path="/" element={<PatchworkList />}></Route>
          </Routes>
        </div>

        <footer>
          footer
        </footer>
      </Router>
    </div>
  );
}

export default App;
