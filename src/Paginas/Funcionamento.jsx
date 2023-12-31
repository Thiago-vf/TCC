import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Funcionamento.scss'
import { List, X } from "phosphor-react"

import logotipo from '../imagens/logotipo.png'
import video from '../imagens/video.mp4'







function Funcionamento() {

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
              <h1 className="topo">-- Funcionamento --</h1>
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
                  <Link to={"/equipamentos"}>Equipamentos</Link>
                </div>
                <div className="hr"><hr /></div>
                <div className="navfundo">
                  <Link to={"/Publico"}>Público</Link>
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
              <Link to={"/equipamentos"}>Equipamentos</Link>
            </div>
            <div className="navfundo">
              <Link to={"/Publico"}>Público</Link>
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
            <h2>Funcionamento</h2>
          </div>
        </section >
         <div className="video">
          
          <video width="340" height="360" controls >
            <source src={video} type="video/mp4" />

          </video>
        </div>

        <section className="texto">
          <p>O projeto consiste em utilizar um Arduino, juntamente com um sensor de luminosidade e um sensor de presença de insetos, para criar um sistema automatizado que combina iluminação noturna e controle de mosquitos.
          </p>
        </section>


      </main>


    </>
  )
}
export default Funcionamento