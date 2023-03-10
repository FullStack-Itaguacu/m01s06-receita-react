function Ingredientes(props) {
  const listaIngredientes = props.ingrediente.map((ingrediente) => {
    return <li>{ingrediente}</li>;
  });

  return <ul>{listaIngredientes}</ul>;
}

export default Ingredientes;
