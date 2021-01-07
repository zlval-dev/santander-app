import React from 'react'

class Search extends React.Component{
    render(){
        if(this.props.search !== ""){
            return(
                <div className="results">
                    <h2>Resultado: </h2>
                    <h3>{ this.props.search }</h3>
                    <div className="result-card">
                        <p><strong>Nome do filme: </strong>Dora</p>
                        <p><strong>Realizador: </strong>Joao</p>
                        <p><strong>Protagonistas: </strong>Claudia, Sara, Duarte</p>
                        <p><strong>Ano de lançamento: </strong>1789</p>
                    </div>
                    <div className="result-card">
                        <p><strong>Nome do filme: </strong>Exploradora</p>
                        <p><strong>Realizador: </strong>Valdemar</p>
                        <p><strong>Protagonistas: </strong>David, Andre, Inacio</p>
                        <p><strong>Ano de lançamento: </strong>1987</p>
                    </div>
                    <div className="result-card">
                        <p><strong>Nome do filme: </strong>Teste</p>
                        <p><strong>Realizador: </strong>Berenguer</p>
                        <p><strong>Protagonistas: </strong>Teresa, Joaquim, Idalina, Analia, Lucia</p>
                        <p><strong>Ano de lançamento: </strong>1672</p>
                    </div>
              </div>
            )    
        }else{
            return null
        }
    }
}

export default Search