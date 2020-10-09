import React from "react";
import "../Contato/Contato.css"

import linkedin from "../../assets/img/likind.svg"
import instagram from "../../assets/img/insta.svg"
import git from "../../assets/img/gihub.svg"

const Contato = () => {
  return (
    <div className="informacoes">
      <div className="dados2">
        <header>
          <h2 className="title2">Shellcya Habiakel </h2>
        </header>


        <section className="info">
          <h3>Perfil</h3>
          <ul>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing and printing industry.</li>
          </ul>
        </section>

        <section className="info">
          <h3>Experiência Profissional</h3>
          <ul>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing </li>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing </li>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing </li>
          </ul>
        </section>

        <section className="info">
          <h3>Educação</h3>
          <ul>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing  </li>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing </li>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing </li>
          </ul>
        </section>

        <section className="info">
          <h3>Projetos</h3>
          <ul>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing </li>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing </li>
            <li className="list-3">Lorem Ipsum is simply a text simulation of the printing </li>
          </ul>
        </section>
      </div>

      <div className="dados3">
        <section className="dois">
          <h4 className="conhec">Conhecimento</h4>
          <ul>
            <li className="list-2">HTML5</li>
            <li className="list-2">CSS</li>
            <li className="list-2">Javascript</li>
            <li className="list-2">React.js</li>
          </ul>
        </section>


        <section className="ultima">
          <h4 className="contato"> Contato</h4>
          <ul>
            <li className="list-1">Rua Olávo Bilac, 137</li>
            <li className="list-1">Olinda, PE- 53-140.240</li>
            <li className="list-1">(81) 9 8344-9059</li>
            <li className="list-1">shellcya_32@hotmail.com</li>
          </ul>
          <div className="icon2">
            <a href="https://www.linkedin.com/in/shellcya-habiakel-1344301ab/"
              target="_blank"
              rel="noopener noreferrer">

              <img className="icon" src={linkedin} alt="logo do linkedin" /></a>

            <a href="https://www.instagram.com/shellcya01/"
              target="_blank" rel="noopener noreferrer">
              <img className="icon" src={instagram} alt="logo do instagram" /></a>

            <a href="https://github.com/Shellcya"
              target="_blank" rel="noopener noreferrer">
              <img className="icon" src={git} alt="logo do github" /></a>

          </div>



        </section>




      </div>

    </div>



  )
};















export default Contato;