import React from 'react'
import './HeroPoster.css'
const HeroPoster = () => {
  return (
    <div class="container-fluid hero">
    <div class="row align-items-center" style={{height: "100%", width:"100%"}}>
    <div class="col-md-6 ">

    </div>
    <div className="col-md-6 ">
          <div className="align-items-center">
                <span className="dis2 ">  <strong>ASESORIA DE COMPRA DE AUTO</strong>
                <h1><strong>RECIBE AYUDA</strong></h1>
                <h1><strong>COMPRANDO SU AUTO</strong></h1>
                <p class="lead"><strong>Apoyando a nuestra comunidad en cada paso de la compra de su auto.</strong></p>
                <a href="/" class="btn btn-primary btn-lg">Contáctanos Ahora</a>
                </span>
     
        </div>
        </div>
    </div>
</div>
  )
}

export default HeroPoster