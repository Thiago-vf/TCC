import { Link } from "react-router-dom"

import '../styles/Objetivo.scss'
import { List } from "phosphor-react"

import logotipo from '../imagens/logotipo.png'
import imagem from '../imagens/objetivo.png'

function handleAbrirFecharMenu() {
  const [abrirMenu, setAbrirMenu] = useState(false)

  if (abrirMenu === true) {
      setAbrirMenu(false)
      return
  }

  setAbrirMenu(true)
}

function Objetivo() {
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
                    <Link to={"/"}>Home</Link>
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
                <h1>Objetivo</h1>
            </div>

            <div className="titulo">
                <h2>Nosso Objetivo</h2>
            </div>
        </section >
        <section className="imagemp">
            <img src={imagem} alt="imagen-do-projeto" />
        </section>

        <section className="texto">
            <p>Nosso objetivo com este projeto é utilizar a plataforma Arduino para desenvolver um sistema inteligente que combine a detecção de luminosidade com a detecção de mosquitos, a fim de criar um ambiente mais confortável e seguro. Buscamos proporcionar uma solução automatizada e eficiente para a iluminação noturna e o controle de mosquitos, visando melhorar a qualidade de vida das pessoas.
É importante ressaltar que, ao lidar com a ejeção de veneno ou substâncias tóxicas, a segurança é fundamental. Seguiremos as instruções de uso adequado do dispositivo e tomaremos todas as precauções necessárias para evitar danos às pessoas, animais de estimação e ao meio ambiente. Nosso objetivo é desenvolver um projeto responsável e eficiente, priorizando sempre a segurança e o bem-estar de todos os envolvidos.</p>
        </section>

        
    </main>


</>
  )
}

export default Objetivo