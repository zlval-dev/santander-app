import './App.css';
import Logo from './img/logo.jpg'
import Search from './components/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import $ from 'jquery'

function App() {

  // Variável para obter o que o utilizador introduziu para pesquisar
  const [search, setSearch] = useState('')

  // Funçao para começar a pesquisa quando o utilizador pressionar o 'Enter'
  const startSearch = (e) => {
    if(e.key === 'Enter'){
      setSearch($('#input').val())
      $('#input').blur()
    }
  }


  return (
    <div>
      <header>
        <div className="logo">
          <h1>Santander App</h1>
          <img src={ Logo } alt="logo"/>
        </div>
        <div className="search" onClick={ () => { $('#input').focus() } }>
          <FontAwesomeIcon icon={ faSearch } style={{ marginLeft: '5px' }} />
          <input type="text" name="search" autoFocus autoComplete="off" id="input" onKeyDown={ startSearch } placeholder="" onChange={ (e) => setSearch('') } />
        </div>
      </header>
      <Search search={ search } />
    </div>
  );
}

export default App;
