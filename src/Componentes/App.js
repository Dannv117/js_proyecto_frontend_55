import React, {Component} from 'react'
import axios from 'axios'
import PersonasLista from './Personas/PersonasLista';
import PersonasDetalle from './Personas/PersonasDetalle';
import PersonasForm from './Personas/PersonasForm';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      personas: [],
      personaActual : {}
      
    }

    //vincular la funcion de actualizar al componente
    this.actualizarPersonaActual = this.actualizarPersonaActual.bind(this)
  }

  //llamar a la api rest
  componentDidMount(){
      const url = "http://localhost:5000/personas"
      axios.get(url)
          .then((respuesta) => {   
              this.setState({
                 personas: respuesta.data
              })
              console.log(respuesta.data)
          })
          .catch((error) => { console.log(error) })
  }



  //Establecer la persona a ver detalle
  actualizarPersonaActual(persona){
    //actualizar state:
    this.setState({
      personaActual: persona
    })
  }

  render(){
    return (
      <div className="container-fluid">
          <div className="row" > 
              <div className="col s12">
                <nav>
                  <div class="nav-wrapper deep-purple accent-2">
                    <a href="#!" class="brand-logo">persona CRM</a>
               
                  </div>
                </nav>
              </div>
          </div>
          <div className="row" >
              <div className="col s3">
                  <PersonasLista 
                          listapersonas={ this.state.personas } 
                          actualizarPersonaActual = { this.actualizarPersonaActual }  
                 />
              </div>
              <div className="col s9">
                  <PersonasDetalle  persona={ this.state.personaActual  }  />
              </div>
          </div>
          <div className="row">
              <div className="col s12">
                  <PersonasForm />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
