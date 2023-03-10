import Cabecalho from "./Cabecalho";
import Imagem from "./Imagem";
import Instrucoes from "./Instrucoes";
import Ingredientes from "./Ingredientes";
import Rodape from "./Rodape";
import receitas from "./receitas.json";

const App = () => {
  const receita = receitas[1];
  return (
    <div>
      <Cabecalho titulo={receita.titulo} descricao={receita.descricao} />
      <Imagem src="https://github.com/mikansc.png" alt="Michael" />
      <Ingredientes ingrediente={receita.ingredientes} />
      <Instrucoes lista={receita.preparo} />
      <Rodape
        tempoDePreparo={receita.tempo_preparo}
        rendimento={receita.rendimento}
      />
    </div>
  );
};

export default App;
