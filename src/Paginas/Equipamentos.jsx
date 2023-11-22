import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Equipamentos.scss'
import { List, X, Lightbulb } from "phosphor-react"

import logotipo from '../imagens/logotipo.png'
import imagem from '../imagens/equipamentos.png'
import protoboard from '../imagens/protoboard.png'
import pir from '../imagens/pir.png'
import ldr from '../imagens/ldr.png'

import spray from '../imagens/spray.png'







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

        <section >
          <p className="titulo-e"> 1- Placa Arduino: </p>

          <section className="imagemp">
          <img src={imagem} alt="imagen-do-projeto" />
        </section>

          <p  className="texto"> 
            A placa Arduino é o cérebro do projeto. É um microcontrolador programável que executa o código que você escreve.
          </p>
        </section>

        

        <section>
        <p className="titulo-e">2- Protoboard:</p>

        <section className="imagemp">
          <img src={protoboard} alt="imagen-do-equipamento" />
        </section>

          <p className="texto"> <br />
            Uma protoboard é uma placa que permite que você conecte componentes eletrônicos temporariamente sem a necessidade de soldagem.
          </p>
        </section>

      


        <section>

          <p  className="titulo-e">3- Sensor PIR:</p>

          <section className="imagemp">
          <img src={pir} alt="imagen-do-equipamento" />
        </section> 
          <p className="texto"> 
            O sensor PIR detecta movimento através da detecção de variações de movimento no ambiente. Ele é comumente usado em sistemas de segurança e automação residencial para detectar a presença de pessoas ou animais.
          </p>
        </section>



        <section >

          <p className="titulo-e" > 4- Sensor LDR: </p>

          <section className="imagemp">
            <img src={ldr} alt="imagen-do-equipamento" />
          </section>

          <p color="#FF5B79" className="texto">
            Um sensor LDR varia sua resistência com base na intensidade da luz incidente. Ele é usado para medir a luminosidade ambiente e é frequentemente utilizado em projetos de automação que envolvem controle de iluminação.
          </p>

        </section>



        <section >
          <p color="#FF5B79" className="titulo-e">5- Spray: </p>

          <section className="imagemp">
            <img src={spray} alt="imagen-do-equipamento" />
          </section>

          <p className="texto">
            Um sistema de ejeção de insetsida por spray é um dispositivo projetado para dispersar insetsida de maneira uniforme e controlada em uma área específica.
          </p>
        </section>



        <section >
          <p className="titulo-e" > 6- Lâmpada: </p>
          <section className="icone">
            <Lightbulb size={150} color="#ff5b79" />
          </section>

          <p className="texto">
            A função principal da lâmpada nesse projeto é atrair os mosquitos.
          </p>
        </section>



      </main>


    </>
  )
}
export default Equipamentos