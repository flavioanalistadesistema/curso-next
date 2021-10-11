import Titulos from "../../components/Titulos";

export default function titulo() {
    return (
        <>
            <Titulos 
                primario = 'Aula de Next e React'
                secundario = 'Estudar para conhecer e desenvolver'
            />
            <Titulos 
                primario = 'Anallista de Sistema'
                secundario = 'A melhor profissão do mundo'
                extra = {true}
            />
            <Titulos 
                primario = 'Amantes de TI'
                secundario = 'Programadores amam o que fazem'
                extra = {false}
            />
        </>
        
    )
}

// usando um componet externo e implatando em nossa function
// enviando parametro para o componente