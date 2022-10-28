import React from 'react'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Header
        title="Henrique Neubert"
        backgroundColor="dark"
      />
      <Footer
        copyRight="© 2022 henriqueneubert.dev"
        title="Henrique Neubert"
        backgroundColor="dark"
      />
    </div>
  )
}

export default App
