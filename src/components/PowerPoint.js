import pptxgen from 'pptxgenjs'

const PowerPoint = (results) => {
    let powerpoint = new pptxgen()
    results.forEach(el => {
        let slide = powerpoint.addSlide()
        let texto
        if(el.realizadores.length === 0){
            texto = "Nome do filme: " + el.nome
            + "\nAtores: " + el.atores
            + "\nAno: " + el.ano
        }else{
            texto = "Nome do filme: " + el.nome
            + "\nRealizadores: " + el.realizadores
            + "\nAtores: " + el.atores
            + "\nAno: " + el.ano
        }
        let posicaoInicial = { x:0, y:'50%', w:'100%', fontSize:10 }
        slide.addText(texto, posicaoInicial)
    })
    powerpoint.writeFile("SantanderApp")
}

export default PowerPoint