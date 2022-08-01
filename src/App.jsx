import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from './components/Formulario'


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  
  useEffect(()=> {

    const pacientesLS = JSON.parse(localStorage.getItem('pacientesData'));
    if(pacientesLS){
      setPacientes(pacientesLS)
    }
    
  },[])
  useEffect(()=>{
    localStorage.setItem('pacientesData', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(pacienteEliminado => pacienteEliminado.id !== id);
    setPacientes(pacientesActualizados);
  }



  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
        <ListadoPacientes 
          datos={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}

        />
      </div>
    </div>
  )
}

export default App
