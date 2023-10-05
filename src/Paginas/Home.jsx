import { Link } from "react-router-dom"
import '../styles/home.scss'
import { List, X } from "phosphor-react"

import logotipo from '../imagens/logotipo.png'
import imagem from '../imagens/imagem-projeto.png'
import fundo from '../imagens/botao-fundo.png'



function handleAbrirFecharMenu() {
    const [abrirMenu, setAbrirMenu] = useState(false)

    if (abrirMenu === true) {
        setAbrirMenu(false)
        return
    }

    setAbrirMenu(true)
}



function Home() {
    return (
        <>

            <header>

                <div className="logo">
                
                        <img src={logotipo} alt="logo do site" />
                   
                    <div class="mobile-navbar">
                        <button class="menu-m" onclick="handleAbrirFecharMenu()"><List size={32} /></button>
                        <nav class="mobile-menu" id="mobileMenu">
                            <ul>
                                <li><Link to={"/objetivo"}>Objetivo</Link></li>
                                <li><Link to={"/Publico"}>Publico</Link></li>
                                <li><Link to={"/equipamentos"}>Equipamentos</Link></li>
                                <li><Link to={"/funcionamento"}>Funcionamento</Link></li>
                                <li><Link to={"/creditos"}>Créditos</Link></li>
                            </ul>
                        </nav>
                    </div>


                </div>

                <div className="navbar">
                    <nav>
                        <div className="navfundo">
                            <Link to={"/objetivo"}>Objetivo</Link>
                        </div>
                        <div className="navfundo">
                        <Link to={"/Publico"}>Publico</Link>
                        </div>
                        <div className="navfundo">
                            <Link to={"/equipamentos"}>Equipamentos</Link>
                        </div>
                        <div className="navfundo">
                            <Link to={"/funcionamento"}>Funcionamento</Link>
                        </div>
                        <div className="navfundo">
                            <Link to={"/creditos"}>Créditos</Link>
                        </div>
                    </nav>
                </div>
            </header >

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
                        <button className="botao">
                            <Link to={"/objetivo"}>Saiba mais</Link></button>
                    </div>
                </section>
            </main>


        </>
    )
}
export default Home