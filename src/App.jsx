import React from 'react'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Banner from './components/banner/Banner'
import BlockTitle from './components/BlockTitle'
import Technologies from './components/technologies/Technologies'

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
      <BlockTitle
        title="TÉCNOLOGIAS"
        align="start"
      >
      </BlockTitle>
      <Technologies

      >
      </Technologies>
      <Footer
        copyRight="© 2022 henriqueneubert.dev"
        title="Henrique Neubert"
        backgroundColor="dark">
      </Footer>
    </div>
  )
}

export default App
