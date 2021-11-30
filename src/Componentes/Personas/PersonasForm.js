import React, { Component } from "react";
import axios from "axios";

class PersonasForm extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    submitNuevaPersona(event){
//prevenga el comportamiento por defecto del submit :D
    event.preventDefault()
        //enviar request al backend utilizando axios
        axios.post('http://localhost:5000/personas',
    {
        nombre: this.refs.nombre.value,
        apellido: this.refs.apellido.value,
        email: this.refs.email.value,
        telefono: this.refs.telefono.value,
        empresa: this.refs.empresa.value,

    }
        ).then(respuesta => console.log(respuesta)  )
        .catch (error => console.log (error)  )
    }

    render(){
        return(  
            <div className="row">
                <h5 className="center">Nuevo contacto </h5>
                <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)} >
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nombre"ref="nombre"/>
                            <label for="nombre">Nombre</label>
                        </div>                    
            <div className="input-field col s6">
                    <input id="apellido" ref="apellido"/>
                    <label for="apellido">Apellido</label>
            </div>
       </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" ref="email"/>
                            <label for="email">Email</label>
                        </div>                    
            <div className="input-field col s6">
                    <input id="telefono" ref="telefono"/>
                    <label for="telefono">teléfono</label>
            </div>
            <div className="row">
                        <div className="input-field col s6">
                            <input id="empresa" ref="empresa"/>
                            <label for="empresa">Empresa</label>
                        </div>
                        <button name="action"
                            type="submit" className="waves-effect waves-light btn-small deep-purple accent-2">Guardar
                            
                                </button>  
                        </div>
       </div>
       
    </form>
  </div>
        )
    }
}


export default PersonasForm
