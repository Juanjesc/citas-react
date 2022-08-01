import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, alta, email, mensaje, propietario, id} = paciente
    const handleEliminar = () => {
        const respuesta = confirm('Estas seguro que deseas eliminar este registro?')
        if (respuesta){
            eliminarPaciente(id)
        }
    } 
  return (
    <div className="shadow-xl p-4 rounded-3xl mb-4 last-of-type:mb-0 bg-white">
        <p className="uppercase font-bold text-gray-700 mb-1">
            Nombre: <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="uppercase font-bold text-gray-700 mb-1">
            Nombre Propietario: <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="uppercase font-bold text-gray-700 mb-1">
            Email: <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="uppercase font-bold text-gray-700 mb-1">
            Fecha de alta: <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="uppercase font-bold text-gray-700 mb-1">
            Síntomas: <span className="font-normal normal-case">{mensaje}</span>
        </p>
        <div className='flex gap-4 justify-end'>
            <button 
                type="button"
                onClick={() => setPaciente(paciente)}>
                <MdModeEdit 
                    className="text-3xl shadow-lg bg-purple-800 text-white rounded-md"
                />
            </button>
            <button 
                type="button"
                onClick={handleEliminar}>
                <MdDeleteForever 
                    className="text-3xl text-white shadow-lg rounded-md bg-purple-800"/>
            </button>
        </div>
	</div>
  )
}

export default Paciente