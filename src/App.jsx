import Cabecalho from "./Cabecalho";
import Instrucoes from "./Instrucoes";
import Ingredientes from "./Ingredientes";
import Rodape from "./Rodape";
import receitas from "./receitas.json";
import Imagem from "./Imagem";

const App = () => {
  const receita = receitas[1];
  return (
    <div>
      <Cabecalho titulo={receita.titulo} descricao={receita.descricao} />
      <Imagem
        caminho="https://www.casalcozinha.com.br/wp-content/uploads/2020/11/receita-simples-e-caseira-de-torta-de-maca-1300x932.png"
        textoAlternativo="qualquer coisa"
      />
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
