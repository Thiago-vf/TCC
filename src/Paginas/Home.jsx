import { Link } from "react-router-dom"
import '../styles/home.scss'

import logotipo from '../imagens/logotipo.png'
import imagem from '../imagens/imagem-projeto.png'
import fundo from '../imagens/botao-fundo.png'






function Home() {
    return (
        <>
           
            <header>
            <div className="logo">
                <img src={logotipo} alt="logo do site" />
            </div>      

            <div className="navbar">
            <nav>
                <div className="navfundo">
                    <a href="#">Objetivo</a>
                </div>
                <div className="navfundo">
                    <a href="#">Itens</a>
                </div>
                <div className="navfundo">
                    <a href="#">Equipamentos</a>
                </div>
                <div className="navfundo">
                    <a href="#">Funcionamento</a>
                </div>
                <div className="navfundo">
                    <a href="#">Créditos</a>
                </div>
            </nav>
        </div>
        <div class="menu-icon">
    <span class="icon">&#9776;</span>
  </div>
            </header>

            <main>


                <section className="titulos">
                    <div className="sub">
                        <h1>Projeto TCC</h1>
                    </div>

                    <div className="titulo">
                        <h2>Sistema de iluminação e detecção de mosquitos</h2>
                    </div>
                    </section >
                    <section className="imagemp">
                        <img src={imagem} alt="imagen-do-projeto" />
                </section>

                <section className="texto">
                    <p>Neste projeto, vamos explorar uma aplicação do Arduino para criar um sistema que combina um sensor de luminosidade com a detecção de mosquitos...</p>
                    </section>
                
                <section className="saiba-mais">
                    <div className="fundo-botao">
                        <img src={fundo} alt="imagem de fundo do botão saiba mais" />
                        <button className="botao">Saiba mais</button>
                    </div>
                </section>
            </main>


        </>
    )
}
export default Home