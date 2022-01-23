import './Patchwork.css'
function Patchwork(props) {
  const { nome, imagem, preco, className } = props
  return (
    <div className={className}>
      <div className="image-container">
        <img src={imagem} alt={`${nome}`} className="imagem" />
      </div>
      <div className="rodape">
        <p>{nome}</p>
        <p>{preco}</p>
      </div>
    </div>
  )
}

export default Patchwork