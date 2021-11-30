import React from 'react'

const PersonasDetalle = (props) => {
    return ( 
        <div class="row">
        <div class="col s12 m6">
          <div class="card deep-purple accent-2">
            <div class="card-content white-text">
              <span class="card-title">{ props.persona.nombre }  { props.persona.apellido }  </span>
                    <p>Email: { props.persona.email } </p>
                    <p>Telefono: { props.persona.telefono  }</p>
                    <p>Empresa: { props.persona.empresa }  </p>
            </div>
            <div class="card-action">
              <a href="#!">This is a link</a>
              <a href="#!">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    )

}

export default PersonasDetalle
