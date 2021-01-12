import React from 'react'
import TMDb from './TMDb'
import Loader from 'react-loader-spinner'
import PowerPoint from './PowerPoint'

export default class Search extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            search: this.props.match.params.search,
            loading: true,
            results: []
        }
    }

    async componentDidMount(){
        this.setState({results: await TMDb(this.state.search)})
        setTimeout(()=>{
            this.setState({loading: false})
        }, 2000)
    }

    render(){
        if(this.state.loading){
            return(
                <Loader type="TailSpin" color="#808080" height={50} width={50} className="spinner" />
            )
        }else{
            return(
                <div className="results">
                    <h2>Resultados ({this.state.results.length})</h2>
                    <h3>{ this.state.search }</h3>
                    {/* No caso de não ter resultados não mostrar o botão de download do powerpoint */}
                    { this.state.results.length === 0 ? null : <button onClick={ ()=> PowerPoint(this.state.results) }>Download PowerPoint</button> }
                        {this.state.results.map((value, index) => {
                            var realizadores = ""
                            var atores = ""
                            // Colocar víruglas a separar os nomes dos atores
                            value.atores.forEach(el => {
                                if(atores === ""){
                                    atores += el
                                }else{
                                    atores += ", " + el
                                }
                            })
                            // Colocar víruglas a separar os nomes dos realizadores
                            value.realizadores.forEach(el => {
                                if(realizadores === ""){
                                    realizadores += el
                                }else{
                                    realizadores += ", " + el
                                }
                            })
                            return(
                                <div className="result-card" key={ index }>
                                    <p><strong>Nome do filme: </strong>{ value.nome }</p>
                                    {value.realizadores.length !== 0 ? (<p><strong>Realizadores: </strong>{ realizadores }</p>): null}
                                    <p><strong>Protagonistas: </strong>{ atores }</p>
                                    <p><strong>Ano de lançamento: </strong>{ value.ano }</p>        
                                </div>
                            )
                        })}
                </div>
            )
        }
    }
}