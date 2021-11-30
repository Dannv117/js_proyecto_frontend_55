import React from 'react'

const PersonasLista = ( props ) => {
    return ( 
        <ul className="collection with-header deep-purple accent-2">
            <li className="collection-header"><h4> Contactos: </h4></li>
            {
               props.listapersonas.map( ( item )=> {  
                    return(
                        <a
                            href="#!"
                            className="collection-item" 
                            key = { item._id }
                            onClick = { props.actualizarPersonaActual.bind(this, item) }
                            
                        >
                            { item.nombre }    { item.apellido  }
                        </a>
                    )
                } ) 
            }       
       </ul>
      
    )

}

export default PersonasLista
