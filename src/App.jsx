import React from 'react'
import './App.css'

import Header from './components/header'
import Aside from './components/aside'
import Main from './components/main'
import { ThemeProvider } from 'styled-components';
import myTheme from './styles/theme'

function App() {
  //! HEADER

  //@ use this endpoint with a calendar:
  // const casesEndPoint = `https://disease.sh/v3/covid-19/historical/all?lastdays=all`


  // const worldWideEndPoint = `https://disease.sh/v3/covid-19/all`

  //@ use this endpoint to filter countries
  // const countriesEndPoint = `https://disease.sh/v3/covid-19/countries/${search}`

  //@ DESIGN REF
  // https://dribbble.com/shots/11045762-Corona-Covid-19-Situation-Live-Dashboard
  // https://dribbble.com/shots/10796247-Corona-Covid19-Situation-Live-Board


  return (
    // <ThemeProvider theme={myTheme}>
      <div className="container">
        <Aside />

        <div className="container__content">
          {/* <Header className="header"/> */}

          <Main />

        </div>
      </div>
    // </ThemeProvider>
  )
}

export default App
