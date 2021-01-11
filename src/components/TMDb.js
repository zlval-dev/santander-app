// Função para obter os dados da TMDb API (the movie database)
const TMDb = async (search) => {
    // Array para obter os dados todos de pesquisa
    var data = []
    // Request para obter o número de páginas
    var response = await fetch("https://api.themoviedb.org/3/search/person?query=" + search + "&api_key=5cbb52d223777ef619261d5cb287e6bc")
    var totalPages = await response.json()
    // Loop para percorrer todas as páginas da pesquisa
    for(var i = 1; i <= totalPages.total_pages; i++){
        // Request para obter toda a informação que estão nas diferentes páginas
        response = await fetch("https://api.themoviedb.org/3/search/person?query=" + search + "&api_key=5cbb52d223777ef619261d5cb287e6bc&page=" + i)
        var searchResult = await response.json()
        // Percorrer todos os resultados encontrados na página
        searchResult.results.forEach(element => {
            // Verificar se pertence ao departamento da direção ou de atuação
            if(element.known_for_department === "Acting" || element.known_for_department === "Directing"){
                // Percorrer a secção de onde é conhecido e obter o id do filme para conseguirmos obter os atores e realizadores
                element.known_for.forEach(async el => {
                    // Verifciar se é um filme
                    if(el.media_type === "movie"){
                        // Resquest para obter os atores e realizadores
                        var response = await fetch("https://api.themoviedb.org/3/movie/" + el.id + "/credits?api_key=5cbb52d223777ef619261d5cb287e6bc")
                        var finalSearchResult = await response.json()
                        // Obter todos os realizadores
                        var directors = []
                        finalSearchResult.crew.forEach(person => {
                            if(person.job === "Director"){
                                directors.push(person.original_name)
                            }
                        })
                        // Verificação se a pessoa procurada é do departamento da direção e no caso de ser, verificar se é o realizador
                        if((element.known_for_department === "Directing" && directors.includes(element.name)) || element.known_for_department === "Acting"){
                            // Neste caso esta tudo correto e inserimos todos os dados para depois ser mostrado ao utilizador
                            // Obter os dados de todos atores
                            var actors = []
                            finalSearchResult.cast.forEach(person => {
                                if(person.known_for_department === "Acting"){
                                    actors.push(person.original_name)
                                }
                            })
                            // Guardar os dados necessários para apresentar ao utilizador
                            data.push({
                                nome: el.title,
                                realizadores: directors,
                                atores: actors,
                                ano: el.release_date
                            })
                        }
                    }
                })
            }
        })
    }
    return data
}

export default TMDb