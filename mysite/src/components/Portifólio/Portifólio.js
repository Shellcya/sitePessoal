import React from "react";
import "./Portifólio.css"

import counter from "../../assets/img/counter.png"
import jokenpo from "../../assets/img/jokenpo.jpg"
import huntweb from "../../assets/img/huntweb.jpg"
const Portifólio = () => {
  return (
    <div >
      <h3 className="title3">Projetos Front-end</h3>




      <div className="project">


        <a className="hb"
          href="https://github.com/Shellcya/Huntweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={huntweb} alt="imagem do huntweb" />Huntweb
      </a>

        <a
          href="https://github.com/Shellcya/Contador"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={counter} alt="imagem do contador" />Counter
      </a>


        <a className="jk"
          href="https://github.com/nessalive/playPedraPapelTesoura"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={jokenpo} alt="imagem do jokenpo" />PedraPapelTesoura
      </a>



      </div>


    </div>

  )



}















export default Portifólio;