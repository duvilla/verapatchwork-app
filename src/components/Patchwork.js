import './Patchwork.css'
function Patchwork(props) {
  const { nome, foto, preco, className } = props
  return (
    <div className={`patchwork-base ${className}`}>
      <div className="image-container">
        <img src={foto} alt={`${nome}`} className="imagem" />
      </div>
      <div className="rodape">
        <p>{nome}</p>
        <p>{preco}</p>
      </div>
    </div>
  )
}

export default Patchwork
