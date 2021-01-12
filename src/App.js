import './App.css';
import Logo from './img/logo.jpg'
import Search from './components/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import $ from 'jquery'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  // Funçao para começar a pesquisa quando o utilizador pressionar o 'Enter'
  const startSearch = (e) => {
    if(e.key === 'Enter'){
      window.location.href = '/result/' + $('#input').val()
    }
  }

  return (
    <Router>
      <div>
        <header>
          <div className="logo">
            <h1>Santander App</h1>
            <img src={ Logo } alt="logo"/>
          </div>
          <div className="search" onClick={ () => { $('#input').focus() } }>
            <FontAwesomeIcon icon={ faSearch } style={{ marginLeft: '5px' }} />
            <input type="text" name="search" autoFocus autoComplete="off" id="input" onKeyDown={ startSearch } placeholder="Nome do ator ou realizador" />
          </div>
        </header>
        <Route path="/result/:search" component={ Search }>
        </Route>
      </div>
    </Router>
  );
}

export default App;
