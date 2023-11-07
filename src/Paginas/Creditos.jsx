import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Creditos.scss'
import { List, X } from "phosphor-react"

import logotipo from '../imagens/logotipo.png'
import imagem from '../imagens/creditos.png'
import hm from '../imagens/hm.png'
import wm from '../imagens/wm.png'
import qrcode from '../imagens/qrcode.png'






function Creditos() {
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
              <h1 className="topo">-- Créditos --</h1>
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
                  <Link to={"/funcionamento"}>Funcionamento</Link>
                </div>
                <div className="hr"><hr /></div>
                <div className="navfundo">
                  <Link to={"/Publico"}>Público</Link>
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
              <Link to={"/funcionamento"}>Funcionamento</Link>
            </div>
            <div className="navfundo">
              <Link to={"/Publico"}>Público</Link>
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
            <h2>Créditos</h2>
          </div>
        </section >
        <section className="imagemp">
          <img src={imagem} alt="imagen-do-projeto" />
        </section>

        <section className="texto">
          <p>Este projeto foi feito com base em diferentes ideias e conceitos sobre automação residencial, eletrônica e programação. Embora não existam projetos exatamente idênticos a este, é importante mencionar que existem projetos semelhantes que serviram de inspiração do nosso projeto.
          </p>
        </section>
        <hr color="#ff5b79" />

        <section className="participantes">

          <h2 >Criadores</h2>

        </section>

        <section className="imagemp">
          <img src={wm} alt="rosto feminino" />
        </section>



        <section className="texto">
          <p><font color="#FF5B79">Ester Pinheiro <br /></font>
            Estudante
          </p>
        </section>
        <hr color="#ff5b79" />

        <section className="imagemp">
        <img src={hm} alt="rosto masculino" />
      </section>



      <section className="texto">
        <p><font color="#FF5B79">Miguel Eduardo <br /></font>
          Estudante
        </p>
      </section>
      <hr color="#ff5b79" />


        <section className="imagemp">
          <img src={hm} alt="rosto masculino" />
        </section>



        <section className="texto">
          <p><font color="#FF5B79">Thiago Vitorino <br /></font>
            Estudante
          </p>
        </section>

        <hr color="#ff5b79" />
        <section className="texto">
          <p><font color="#FF5B79">Qr code<br /></font>
           Acesse nosso site!
          </p>
        </section>

        <section className="qrcode">
          <img src={qrcode} alt="codigo qr" />
        </section>

      </main>


    </>
  )
}

export default Creditos