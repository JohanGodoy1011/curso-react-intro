import React, { useState } from 'react';
import logo from './logopequeno.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';


const provinces = ["Azuay", "Bolívar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galápagos", "Guayas", "Imbabura", "Loja", "Los Ríos", "Manabí", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo", "Sucumbíos", "Tungurahua", "Zamora Chinchipe"];


const soldiers = [
  { name: 'Juan Pérez', center: 'Pichincha', unit: 'Unidad A' },
  // Add more soldier data here as needed
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSoldier, setSelectedSoldier] = useState(null);
  const [modalType, setModalType] = useState(''); // 'update' or 'changeLocation'
  const [isTableVisible, setIsTableVisible] = useState(false); 

  const handleOpenModal = (soldier, type) => {
    setSelectedSoldier(soldier);
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSoldier(null);
    setModalType('');
  };
  const handleSearch = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-green-900 text-white ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="bg-green-900 p-5 rounded">
            <img src={logo} className="h-24" alt="logo" />
          </div>
          <h1 className="text-center text-3xl font-bold text-white mt-4 font-poppins">SISTEMA INTEGRADO DIRMOV</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-300">Menu</a></li>
            </ul>
          </nav>

        </div>

      </header>

      <main className="flex-grow container mx-auto p-7">
        <h1 className="text-2xl font-bold mb-4">Licenciamiento de Conscriptos</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <fieldset className="border p-4">
            <legend className="text-lg font-semibold mb-2">Información de Conscripto</legend>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Leva</label>
              <select className="p-1 border border-gray-300 rounded">
                {[...Array(21)].map((_, i) => (
                  <option key={i} value={1990 + i}>{1990 + i}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Llamada</label>
              <select className="p-2 border border-gray-300 rounded">
                <option value="primera">Primera</option>
                <option value="segunda">Segunda</option>
                <option value="tercera">Tercera</option>
              </select>
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Centro de Movilización</label>
              <select className="p-2 border border-gray-300 rounded">
                {provinces.map((provincia, i) => (
                  <option key={i} value={provincia}>{provincia}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Unidad de Asignación</label>
              <input type="text" className="p-2 border border-gray-300 rounded" />
            </div>
          </fieldset>

          <fieldset className="border p-4">
            <legend className="text-lg font-semibold mb-2">Información de Licenciamiento</legend>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Fecha de Licenciamiento</label>
              <input type="date" className="p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Tipo de Reserva</label>
              <select className="p-2 border border-gray-300 rounded">
                <option value="ex conscripto">Ex Conscripto</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Rama</label>
              <select className="p-2 border border-gray-300 rounded">
                <option value="ejercito">Ejército Ecuatoriano</option>
                <option value="armada">Armada de Ecuador</option>
                <option value="fuerza_aerea">Fuerza Aérea Ecuatoriana</option>
              </select>
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Tipo de Arma</label>
              <input type="text" className="p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Arma</label>
              <input type="text" className="p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Tipo de Militar</label>
              <input type="text" className="p-2 border border-gray-300 rounded" value="Tropa" disabled />
            </div>
            <div className="flex flex-col mb-1">
              <label className="mb-1 font-semibold">Grado Militar</label>
              <input type="text" className="p-2 border border-gray-300 rounded" value="Soldado de Reserva" disabled />
            </div>
          </fieldset>
        </form>

        <button
          className="bg-green-700 text-white p-2 rounded mb-4 flex items-center hover:bg-green-600 focus:outline-none"
          onClick={handleSearch}
        >
          <i className="fas fa-search mr-2"></i>
          Buscar
        </button>


        {isTableVisible && (
          <div className="bg-white shadow-md rounded p-4">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-2">Nombre</th>
                  <th className="py-2">Centro de Movilización</th>
                  <th className="py-2">Unidad de Asignación</th>
                  <th className="py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {soldiers.map((soldier, index) => (
                  <tr key={index}>
                    <td className="py-2 text-center">{soldier.name}</td>
                    <td className="py-2 text-center">{soldier.center}</td>
                    <td className="py-2 text-center">{soldier.unit}</td>
                    <td className="py-2 text-center flex justify-center space-x-2">
                      <button
                        className="bg-gray-500 text-white p-2 rounded hover:bg-green-700"
                        onClick={() => handleOpenModal(soldier, 'update')}
                      >
                        Actualizar
                      </button>
                      <button
                        className="bg-gray-500 text-white p-2 rounded hover:bg-green-700"
                        onClick={() => handleOpenModal(soldier, 'changeLocation')}
                      >
                        Cambiar de Sede
                      </button>
                      <button className="bg-gray-500 text-white p-2 rounded hover:bg-red-600">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-4 rounded-lg w-2/4  h-auto max-h-[90vh]  overflow-y-auto"> {/* Aquí se ajusta la altura */}
              <h2 className="text-lg font-bold mb-4"> {/* Ajustar tamaño de texto */}
                {modalType === 'update' ? 'Actualizar Información del Conscripto' : 'Cambiar de Sede'}
              </h2>
              <form>
                {modalType === 'update' ? (
                  <>
                    <div className="mb-2"> {/* Reducir margen */}
                      <fieldset className="border p-4 rounded mb-4">
                        <legend className="text-lg font-semibold mb-2 text-center">Datos Personales</legend>
                        <div className="grid grid-cols-2 gap-2"> {/* Reducir el espacio entre columnas */}
                          <div className="flex flex-col mb-2"> {/* Reducir margen inferior */}
                            <label className="mb-1 font-semibold text-xs">Cédula</label> {/* Reducir tamaño de texto */}
                            <input type="text" className="p-1 border border-gray-300 rounded" /> {/* Reducir padding */}
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Cód. Id. Militar</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Apellido Paterno</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Apellido Materno</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Primer Nombre</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" value={selectedSoldier?.name.split(' ')[0] || ''} disabled />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Segundo Nombre</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Tipo de Sangre</label>
                            <select className="p-1 border border-gray-300 rounded">
                              <option value="">--Seleccione--</option>
                              <option value="O+">O+</option>
                              <option value="O-">O-</option>
                              <option value="A+">A+</option>
                              <option value="A-">A-</option>
                              <option value="B+">B+</option>
                              <option value="B-">B-</option>
                              <option value="AB+">AB+</option>
                              <option value="AB-">AB-</option>
                            </select>
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Estado Civil</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Sexo</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Estatura</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div className="mb-4">
                      <fieldset className="border p-4 rounded mb-4">
                        <legend className="text-lg font-semibold mb-2 text-center">Datos Personales</legend>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Fecha Nacimiento</label>
                            <input type="date" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">País</label>
                            <input type="text" className="p-1 border border-gray-300 rounded text-xs" value="ECUADOR" disabled />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Provincia</label>
                            <select className="p-1 border border-gray-300 rounded">
                              <option value="text-xs">--Seleccionar--</option>
                              {provinces.map((provincia, i) => (
                                <option key={i} value={provincia}>{provincia}</option>
                              ))}
                            </select>
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Cantón</label>
                            <select className="p-1 border border-gray-300 rounded">
                              <option value="">--Seleccionar--</option>
                              {/* Populate Cantón options based on selected province */}
                            </select>
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Parroquia</label>
                            <select className="p-1 border border-gray-300 rounded">
                              <option value="">--Seleccionar--</option>
                              {/* Populate Parroquia options based on selected cantón */}
                            </select>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div className="mb-4">
                      <fieldset className="border p-4 rounded mb-4">
                        <legend className="text-lg font-semibold mb-2 text-center">Datos Personales</legend>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">País</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Provincia</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Cantón</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Parroquia</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Dirección</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Teléfono Convencional</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Teléfono Celular</label>
                            <input type="text" className="p-1 border border-gray-300 rounded" />
                          </div>
                          <div className="flex flex-col mb-2">
                            <label className="mb-1 font-semibold text-xs">Correo Electrónico</label>
                            <input type="email" className="p-1 border border-gray-300 rounded" />
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </>
                ) : (
                  <>
                    <fieldset className="border p-4 rounded mb-4">
                      <legend className="text-lg font-semibold mb-2 text-center">Datos del Conscripto</legend>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold">Centro Movilización</label>
                        <input type="text" className="p-2 border border-gray-300 rounded" />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold">Unidad Reparto</label>
                        <input type="text" className="p-2 border border-gray-300 rounded" />
                      </div>
                    </fieldset>

                    <fieldset className="border p-4 rounded mb-4">
                      <legend className="text-lg font-semibold mb-2 text-center">Datos para registrar el Cambio de Unidad</legend>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold">Centro de Movilización</label>
                        <select className="p-2 border border-gray-300 rounded">
                          {provinces.map((provincia, i) => (
                            <option key={i} value={provincia}>{provincia}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold">Unidad de Asignación</label>
                        <input type="text" className="p-2 border border-gray-300 rounded" />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold">Orden Movimiento</label>
                        <input type="text" className="p-2 border border-gray-300 rounded" />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold">Fecha Movilización</label>
                        <input type="date" className="p-2 border border-gray-300 rounded" />
                      </div>
                    </fieldset>
                  </>
                )}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-green-600 text-white p-2 rounded mr-2 p-1 hover:bg-green-700 "
                    onClick={() => alert('Datos actualizados')}
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="bg-red-700 text-white p-2 rounded hover:bg-red-600"
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-green-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 DIRMOV. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
