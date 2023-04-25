import React from 'react'
import './App.css'

import Header from './components/header'
import Aside from './components/aside'
import Main from './components/main'

function App() {
  //! HEADER

  // const casesEndPoint = `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
  // const worldWideEndPoint = `https://disease.sh/v3/covid-19/all`
  // const countriesEndPoint = `https://disease.sh/v3/covid-19/countries/${search}`
  // const vaccinesEndPoint = `https://disease.sh/v3/covid-19/countries/${country}`

  return (
    <div className="container">
      <Aside />

      <div className="container__content">
        <Header className="header"/>

        <Main />

      </div>
    </div>
  )
}

export default App
