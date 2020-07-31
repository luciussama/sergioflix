import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import PageDefault from './../../components/PageDefault/index';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Dá para suportar mais vídeos da Yuna? Mas a pergunta é: temos escolha?"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <BannerMain
        videoTitle={dadosIniciais.categorias[2].videos[2].titulo}
        url={dadosIniciais.categorias[2].videos[2].url}
        videoDescription={"Início das coisas nerds. Essa é para o pai."}
      />
      
      <Carousel
        category={dadosIniciais.categorias[2]}
      />     

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Carousel
        category={dadosIniciais.categorias[6]}
      /> 
      
    </PageDefault>
  );
}

export default Home;
