import PropTypes from "prop-types";

const Cabecalho = ({ titulo, descricao }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </div>
  );
};

Cabecalho.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Cabecalho;
