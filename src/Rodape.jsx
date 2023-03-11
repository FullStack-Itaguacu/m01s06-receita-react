import PropTypes from "prop-types";

function Rodape(props) {
  return (
    <div>
      <p>Tempo de preparo: {props.tempoDePreparo}</p>
      <p>Rendimento: {props.rendimento}</p>
    </div>
  );
}

Rodape.propTypes = {
  tempoDePreparo: PropTypes.number,
  rendimento: PropTypes.number,
};

export default Rodape;
