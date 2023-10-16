import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Equipamentos.scss'
import { List, X } from "phosphor-react"

import logotipo from '../imagens/logotipo.png'
import imagem from '../imagens/equipamentos.png'







function Equipamentos() {

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
                    <X size={32} color="#ff5b79" />
                  ) : (
                    <List size={32} color="#ff5b79" />
                  )
                }
              </button>

            </div>
            <div className={`options ${abrirMenu === true && `open`}`}>
              <h1 className="topo">-- Equipamentos --</h1>
              <hr />
              <nav className="">
                <div className="navfundo">
                  <Link to={"/"}>Inicio</Link>

                </div>
                <div className="hr"><hr /></div>
                <div className="navfundo">
                  <Link to={"/objetivo"}>Objetivo</Link>
                </div>
                <div className="hr"><hr /></div>
                <div className="navfundo">
                  <Link to={"/Publico"}>Público</Link>
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
              <Link to={"/"}>Inicio</Link>
            </div>
            <div className="navfundo">
              <Link to={"/objetivo"}>Objetivo</Link>
            </div>
            <div className="navfundo">
              <Link to={"/Publico"}>Público</Link>
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
            <h1>D.M.A</h1>
          </div>

          <div className="titulo">
            <h2>Equipamentos</h2>
          </div>
        </section >
        <section className="imagemp">
          <img src={imagem} alt="imagen-do-projeto" />
        </section>

        <section className="texto">
          <p>Esses equipamentos foram selecionados e integrados no projeto para possibilitar a detecção de luminosidade, a detecção de mosquitos e a ativação do LED, bem como a simulação da ejeção de uma pequena quantidade de veneno. Esses componentes são fundamentais para o funcionamento e a interação do sistema desenvolvido no projeto.
          </p>
        </section>


      </main>


    </>
  )
}
export default Equipamentos