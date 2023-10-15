import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Objetivo.scss'
import { List, X } from "phosphor-react"

import logotipo from '../imagens/logotipo.png'
import imagem from '../imagens/imagem-projeto.png'
import fundo from '../imagens/botao-fundo.png'






function Home() {

    const [abrirMenu, setAbrirMenu] = useState(false)

    function handleAbrirFecharMenu() {
        if (abrirMenu === true) {
            setAbrirMenu(false)
            return
        }

        setAbrirMenu(true)
    }

    return (
        <>

            <header>
                <div className="nv">

                    <div className='mobile'>
                        <div className='menu'>
                            <button onClick={handleAbrirFecharMenu}>
                                {
                                    abrirMenu === true ? (
                                        <X size={32} color="#ff5b79"/>
                                    ) : (
                                        <List size={32} color="#ff5b79"/>
                                    )
                                }
                            </button>

                        </div>
                        <div className={`options ${abrirMenu === true && `open`}`}>
                        <h1 className="topo">-- objetivo --</h1>
                        <hr />
                            <nav className="">
                                <div className="navfundo">
                                    <Link to={"/"}>Inicio</Link>
                                
                                </div>
                                <div className="hr"><hr /></div>
                                <div className="navfundo">
                                    <Link to={"/Publico"}>Publico</Link>
                                </div>
                                <div className="hr"><hr /></div>
                                <div className="navfundo">
                                    <Link to={"/equipamentos"}>Equipamentos</Link>
                                </div>
                                <div className="hr"><hr /></div>
                                <div className="navfundo">
                                    <Link to={"/funcionamento"}>Funcionamento</Link>
                                </div>
                                <div className="hr"><hr /></div>
                                <div className="navfundo">
                                    <Link to={"/creditos"}>Créditos</Link>
                                </div>
                                <div className="hr"><hr /></div>
                            </nav>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={logotipo} alt="logo do site" />
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