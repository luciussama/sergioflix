import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

  const valoresInicias = {
    nome: 'Filme',
    descricao: 'É coisa de vagabundo, taokei?',
    cor: '#A52A2A'
  }

  const [valoresFormularios, setValoresFormularios] = useState(valoresInicias);
  const [categorias, setCategorias] = useState(['Teste']);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valoresFormularios
        ]);
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              placeholder={valoresFormularios.nome}
              onChange = {function Handler(infoEvento){
                setValoresFormularios(infoEvento.target.value);
              }}
            />
          </label>
          <div/>
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              placeholder={valoresFormularios.descricao}
              onChange = {function Handler(infoEvento){
                setValoresFormularios(infoEvento.target.value);
              }}
            />
          </label>
        </div>
            
            <div>
              
            </div>
          <label>
            Cor:
            <input
              type="color"
              placeholder={valoresFormularios.cor}
              onChange = {function Handler(infoEvento){
                setValoresFormularios(infoEvento.target.value);
              }}
            />
          </label>
        </div>
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, i) => {
          return(
          <li key={categoria + i}>
            {categoria}
          </li>
          );
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;