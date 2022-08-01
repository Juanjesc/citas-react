import Paciente from "./Paciente"
function ListadoPacientes({ datos, setPaciente, eliminarPaciente }) {
	//Si no hay pacientes true, si hay pacientes false



  return (
    <div className="md:w-1/2 lg:w-3/5 p-8 rounded-xl md:h-screen md:overflow-y-scroll mt-8 mx-2 md:mt-0 mb-8">

		
		{datos && datos.length ? 
			(
				<>
      			<h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
				<p className="text-center text-lg mt-4 mb-8"> Administra tus {''} 
					<span className="text-purple-800 font-bold fontfamil">pacientes y citas</span>
				</p>
				<div>
					{datos.map(dato => (
						<Paciente 
							key={dato.id}
							paciente={dato}
							setPaciente={setPaciente}
							eliminarPaciente={eliminarPaciente}
						/>
					))}
				</div>
				</>

			) : (
				<>
					<h2 className="font-black text-3xl text-center">Actualmente no hay pacientes</h2>
					<p className="text-center text-lg mt-4 mb-8"> Comienza agregando {''} 
						<span className="text-purple-800 font-bold fontfamil">pacientes y citas</span>
					</p>
				</>
			)
		}
    </div>
  )
}

export default ListadoPacientes