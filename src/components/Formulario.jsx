import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

function Formulario({ setPacientes, pacientes, paciente, setPaciente }) {
	const [nombre, setNombre] = useState('');
	const [propietario, setPropietario] = useState('')
	const [email, setEmail] = useState('')
	const [alta, setAlta] = useState('')
	const [mensaje, setMensaje] = useState('')

    useEffect(()=>{
        if(Object.keys(paciente).length>0){
            setAlta(paciente.alta)
            setPropietario(paciente.propietario)
		    setEmail(paciente.email)
		    setNombre(paciente.nombre)
		    setMensaje(paciente.mensaje)
        }
    },[paciente])
    
	const submitHandler = (e) =>{
		e.preventDefault();
		const newDatos = {
			nombre: nombre,
			propietario: propietario,
			email: email,
			alta: alta,
			mensaje: mensaje,
            
		}
        if (paciente.id){
            //editando el registro
            newDatos.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? newDatos : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }
        else{
            newDatos.id=nanoid();
            setPacientes([newDatos, ...pacientes])
        }
		setPropietario('')
		setEmail('')
		setAlta('')
		setNombre('')
		setMensaje('')
	}
   
  return (
    <div className='mx-2 lg:w-2/5 p-8 rounded-xl h-max'>
        <h2 className='text-3xl font-black text-center'>Seguimiento Pacientes</h2>
        <p className='text-center text-lg mt-4'>Añade pacientes y{" "}
            <span className='text-purple-800 font-bold'>adminístralos</span>
        </p>
        <form onSubmit={submitHandler} className='mt-8 p-8 bg-white shadow-xl rounded-3xl'> 
            <div className='mb-5'>
                <label 
                    className='block text-grey uppercase'
                    htmlFor='mascota'
                >
                    Nombre de Mascota
                </label>
                <input 
                    id='mascota'
                    type="text" 
                    placeholder='Nombre de la Mascota'
                    className='p-2 text-base rounded-md border-purple-800 border-2 placeholder-text-grey-400 w-full'
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
                />
            </div>
			<div className='mb-5'>
                <label 
                    className='block text-grey uppercase'
                    htmlFor='propietario'
                >
                    Nombre del propietario
                </label>
                <input 
                    id='propietario'
                    type="text" 
                    placeholder='Nombre del propietario'
                    className='p-2 text-base rounded-md border-purple-800 border-2 placeholder-text-grey-400 w-full'
					value={propietario}
					onChange={(e) => setPropietario(e.target.value)}
                />
            </div>
			<div className='mb-5'>
                <label 
                    className='block text-grey uppercase'
                    htmlFor='email'
                >
                    Email
                </label>
                <input 
                    id='email'
                    type="email" 
                    placeholder='Correo electrónico'
                    className='p-2 text-base rounded-md border-purple-800 border-2 placeholder-text-grey-400 w-full'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
                />
            </div>
			<div className='mb-5'>
                <label 
                    className='block text-grey uppercase'
                    htmlFor='alta'
                >
                    Alta
                </label>
                <input 
                    id='alta'
                    type="date" 
                    placeholder='Correo electrónico'
                    className='p-2 text-base rounded-md border-purple-800 border-2 placeholder-text-grey-400 w-full'
					onChange={(e) => setAlta(e.target.value)}
					value={alta}
                />
            </div>
			<div className='mb-5'>
                <label 
                    className='block text-grey uppercase'
                    htmlFor='mensaje'
                >
                    Síntomas
                </label>
                <textarea
                    id='mensaje'
                    type="date" 
                    placeholder='Introduce los síntomas del paciente'
                    className='p-2 text-base rounded-md border-purple-800 border-2 placeholder-text-grey-400 w-full resize-none'
					onChange={(e) => setMensaje(e.target.value)}
					value={mensaje}
                />
            </div>
			<input 
				type="submit" 
				className='bg-purple-700 border-none text-white uppercase mt-4 p-3 w-full rounded-md cursor-pointer hover:bg-purple-900 transition-all duration-200 ease-in'
				value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}

			/>
        </form>
    </div>
  )
}

export default Formulario