import React from 'react'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './components/banner/Banner'
import BlockTitle from './components/BlockTitle'
import Technologies from './components/technologies/Technologies'
import ImageBackground from "../public/fundo2.jpg";
import Social from "./components/social/Social"

function App() {

  return (
    <div className="App">
      <Header
        title="Henrique Neubert"
        backgroundColor="dark">
      </Header>
      <Banner
        title="Me chamo Henrique Neubert, sou Desenvolvedor Front End Junior"
        description="lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur"
        titleButton="GitHub"
        alignAll="center">          
      </Banner>
      <Social>
        
      </Social>
      <section className='position-relative py-5 z-index-2'>
        <img className='backgroundImage' src={ImageBackground} alt="" />
        <BlockTitle
          title="TÉCNOLOGIAS"
          align="start"
          >
        </BlockTitle>
        <Technologies
          
          >
        </Technologies>
      </section>
      <Footer
        copyRight="© 2022 henriqueneubert.dev"
        title="Henrique Neubert"
        backgroundColor="dark">
      </Footer>
    </div>
  )
}

export default App
