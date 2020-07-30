import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import ModalContatos from './components/ModalContatos/index';

function SergioLogo(){
  return(
   <div>
     <b>Quer saber mais sobre o Sérgio? Ligue para 123456789</b>
   </div>
  )
}
function Pagina404(){
  return("https://www.youtube.com/watch?v=oavMtUWDBTM");
} 

ReactDOM.render(
<BrowserRouter>
<Switch>
<Route path  = "/" component ={Home} exact/>
  <Route path="/cadastro/video" component={CadastroVideo} />
  <Route path="/saibamais" component={ModalContatos} />
  <Route component={Pagina404} />
</Switch>
</BrowserRouter>,

  document.getElementById('root')
);
