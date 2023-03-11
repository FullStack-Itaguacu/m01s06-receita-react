import PropTypes from "prop-types";

function Imagem(props) {
  return (
    <div>
      <img src={props.caminho} alt={props.textoAlternativo} />
    </div>
  );
}

Imagem.propTypes = {
  caminho: PropTypes.string.isRequired,
  textoAlternativo: PropTypes.string.isRequired,
};

export default Imagem;
