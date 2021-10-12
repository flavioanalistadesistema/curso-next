import style from "./integracao2.module.css"

export default function integracao2() {

    return (
        <div id={style.integracao2}>
        <div className={style.vermelho}>Texto #1</div>
        <div className={style.azul}>Texto #2</div>
        <div className={style.branco}>Texto #3</div>
        </div>
    )
}

/*
/ O que sinaliza para o NEXT que estamos usanco o CSS MODULE é a extensão module
/ É necessário convencionar o arquivo CSS para importar em nosso arquivo JSX
/ Ele vai usar o CSS MODULE somente pelo fato de nomear meus arquivos css com .module.css
/ Ele usa essa convenção de nome, ao invés de configurar
/ Acessar as classes como se fossem objeto
*/