import { Link } from "react-router-dom"

import '../styles/Publico.scss'
import { List } from "phosphor-react"

import logotipo from '../imagens/logotipo.png'
import imagem from '../imagens/publico.png'

function handleAbrirFecharMenu() {
  const [abrirMenu, setAbrirMenu] = useState(false)

  if (abrirMenu === true) {
    setAbrirMenu(false)
    return
  }

  setAbrirMenu(true)
}


function Publico() {
  return (
    <>

      <header>

        <div className="logo">

          <img src={logotipo} alt="logo do site" />

          <div class="mobile-navbar">
            <button class="menu-m" onclick="handleAbrirFecharMenu()"><List size={32} /></button>
            <nav class="mobile-menu" id="mobileMenu">
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/objetivo"}>Objetivo</Link></li>
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
              <Link to={"/"}>Home</Link>
            </div>
            <div className="navfundo">
              <Link to={"/objetivo"}>Objetivo</Link>
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
            <h1>Publico</h1>
          </div>

          <div className="titulo">
            <h2>Publico Alvo</h2>
          </div>
        </section >
        <section className="imagemp">
          <img src={imagem} alt="imagen-do-projeto" />
        </section>

        <section className="texto">
          <p>O nosso público-alvo para este projeto é composto por indivíduos e famílias preocupados com o controle de mosquitos e a iluminação noturna em suas residências. O projeto visa atender aqueles que desejam uma solução automatizada e eficiente para a detecção de mosquitos e a iluminação adequada durante a noite, proporcionando maior conforto e segurança em seus lares.</p>
        </section>


      </main>


    </>
  )
}

export default Publico