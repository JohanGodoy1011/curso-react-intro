import React, { useState } from 'react';
import logo from './escudo.png';
import banner from './banner.jpg';
import aside from './aside.jpeg';
import aside2 from './aside2.jpg';

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
      <header className="relative bg-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={banner} // Ruta a tu imagen de banner
            alt="Banner"
            className="w-full h-52 object-cover object-center"
          />
        </div>
        <div className="relative container mx-auto flex items-center justify-between p-4 bg-opacity-75">
          <div className="flex items-center">
            <img src={logo} className="h-16 md:h-40" alt="logo" />
          </div>
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white shadow-md" style={{ fontFamily: "'Oswald', Helvetica, Arial, Lucida, sans-serif" }}>
            SISTEMA INTEGRADO DIRMOV
          </h1>


          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
                >
                  Quienes somos
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-medium"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>



      <main className="flex-grow container mx-auto p-7">
        <div className="flex">

          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 font-bold text-black " style={{ fontFamily: "'Oswald', Helvetica, Arial, Lucida, sans-serif" }}>Licenciamiento de Conscriptos</h1>
            <br></br>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <fieldset className="border border-gray-300 shadow-md p-4 rounded-lg">
                <legend className="text-lg font-semibold mb-2 flex items-center">
                  <i className="fas fa-id-card mr-2 text-gray-700"></i>
                  Información de Conscripto
                </legend>

                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Leva</label>
                  <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
                    {[...Array(21)].map((_, i) => (
                      <option key={i} value={1990 + i}>{1990 + i}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Llamada</label>
                  <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
                    <option value="primera">Primera</option>
                    <option value="segunda">Segunda</option>
                    <option value="tercera">Tercera</option>
                  </select>
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Centro de Movilización</label>
                  <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
                    {provinces.map((provincia, i) => (
                      <option key={i} value={provincia}>{provincia}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Unidad de Asignación</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-lg shadow-sm" />
                </div>
              </fieldset>

              <fieldset className="border border-gray-300 shadow-md p-4 rounded-lg">
                <legend className="text-lg font-semibold mb-2 flex items-center">
                  <i className="fas fa-calendar-alt mr-2 text-gray-700"></i>
                  Información de Licenciamiento
                </legend>

                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Fecha de Licenciamiento</label>
                  <input type="date" className="p-2 border border-gray-300 rounded-lg shadow-sm" />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Tipo de Reserva</label>
                  <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
                    <option value="ex conscripto">Ex Conscripto</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Rama</label>
                  <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
                    <option value="ejercito">Ejército Ecuatoriano</option>
                    <option value="armada">Armada de Ecuador</option>
                    <option value="fuerza_aerea">Fuerza Aérea Ecuatoriana</option>
                  </select>
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Tipo de Arma</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-lg shadow-sm" />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Arma</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-lg shadow-sm" />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Tipo de Militar</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-lg shadow-sm" value="Tropa" disabled />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="mb-1 font-semibold text-gray-700">Grado Militar</label>
                  <input type="text" className="p-2 border border-gray-300 rounded-lg shadow-sm" value="Soldado de Reserva" disabled />
                </div>
              </fieldset>
            </form>

            <button
              className="bg-black text-white p-2 rounded-lg shadow-md mb-4 flex items-center hover:bg-green-600 focus:outline-none"
              onClick={handleSearch}
            >
              <i className="fas fa-search mr-2"></i>
              Buscar
            </button>
          </div>


          <div className="w-1/3 p-4">
            <div className="relative h-full">
              <div className="overflow-y-auto h-full">
                <div className="flex flex-col space-y-4">
                  <br></br>
                  <br></br>
                  <div className="h-80 bg-gray-200 rounded-lg shadow-md">
                    <img src={aside} alt="Aside" className="object-cover w-full h-full rounded-lg" />
                  </div>
                  <div className="h-80 bg-gray-200 rounded-lg shadow-md">
                    <img src={aside2} alt="Aside 2" className="object-cover w-full h-full rounded-lg" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>





        {isTableVisible && (
          <div className="bg-white shadow-lg rounded-lg p-4">
            <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left text-gray-700">Nombre</th>
                  <th className="py-2 px-4 text-left text-gray-700">Centro de Movilización</th>
                  <th className="py-2 px-4 text-left text-gray-700">Unidad de Asignación</th>
                  <th className="py-2 px-4 text-left text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {soldiers.map((soldier, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-2 px-4 text-center text-gray-600">{soldier.name}</td>
                    <td className="py-2 px-4 text-center text-gray-600">{soldier.center}</td>
                    <td className="py-2 px-4 text-center text-gray-600">{soldier.unit}</td>
                    <td className="py-2 px-4 text-center flex justify-center space-x-2">
                      <button
                        className="bg-green-700 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none flex items-center"
                        onClick={() => handleOpenModal(soldier, 'update')}
                      >
                        <i className="fas fa-edit mr-1"></i>
                        Actualizar
                      </button>
                      <button
                        className="bg-green-700 text-white p-2 rounded-lg hover:bg-yellow-600 focus:outline-none flex items-center"
                        onClick={() => handleOpenModal(soldier, 'changeLocation')}
                      >
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        Cambiar de Sede
                      </button>
                      <button
                        className="bg-green-700 text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none flex items-center"

                      >
                        <i className="fas fa-trash mr-1"></i>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}


        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg w-full max-w-4xl h-auto max-h-[90vh] overflow-y-auto shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-gray-800 items-center">
                {modalType === 'update' ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <i className="fas fa-user-edit mr-2 text-blue-600"></i>
                        <h2 className="text-xl font-bold text-gray-800">Actualizar Información del Conscripto</h2>
                      </div>
                      <div className="ml-auto">
                        <img src={logo} className="h-16 md:h-24 lg:h-32" alt="logo" />
                      </div>
                    </div>
                  </>

                ) : (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <i className="fas fa-location-arrow mr-2 text-blue-600"></i>
                      Cambiar de Sede
                      <div className="ml-auto">
                        <img src={logo} className="h-16 md:h-24 lg:h-32" alt="logo" />
                      </div>
                    </div>
                  </>
                )}
              </h2>
              <form>
                {modalType === 'update' ? (
                  <>
                    <div className="mb-6">
                      <fieldset className="border border-gray-300 p-4 rounded-lg shadow-sm">
                        <legend className="text-lg font-semibold mb-4 text-center text-gray-800 flex items-center">
                          <i className="fas fa-id-card-alt mr-2 text-green-600"></i>
                          Datos Personales
                        </legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            { label: 'Cédula', type: 'text' },
                            { label: 'Cód. Id. Militar', type: 'text' },
                            { label: 'Apellido Paterno', type: 'text' },
                            { label: 'Apellido Materno', type: 'text' },
                            { label: 'Primer Nombre', type: 'text', value: selectedSoldier?.name.split(' ')[0] || '', disabled: true },
                            { label: 'Segundo Nombre', type: 'text' },
                            { label: 'Tipo de Sangre', type: 'select', options: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'] },
                            { label: 'Estado Civil', type: 'text' },
                            { label: 'Sexo', type: 'text' },
                            { label: 'Estatura', type: 'text' }
                          ].map((field, index) => (
                            <div key={index} className="flex flex-col mb-4">
                              <label className="mb-1 font-semibold text-sm text-gray-700">{field.label}</label>
                              {field.type === 'select' ? (
                                <select className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                                  <option value="">--Seleccione--</option>
                                  {field.options.map((option, i) => (
                                    <option key={i} value={option}>{option}</option>
                                  ))}
                                </select>
                              ) : (
                                <input
                                  type={field.type}
                                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                  value={field.value || ''}
                                  disabled={field.disabled || false}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>

                    <div className="mb-6">
                      <fieldset className="border border-gray-300 p-4 rounded-lg shadow-sm">
                        <legend className="text-lg font-semibold mb-4 text-center text-gray-800 flex items-center">
                          <i className="fas fa-map-marker-alt mr-2 text-green-600"></i>
                          Ubicación
                        </legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            { label: 'Fecha Nacimiento', type: 'date' },
                            { label: 'País', type: 'text', value: 'ECUADOR', disabled: true },
                            { label: 'Provincia', type: 'select', options: provinces },
                            { label: 'Cantón', type: 'select', options: [] }, // Populate based on selected province
                            { label: 'Parroquia', type: 'select', options: [] } // Populate based on selected canton
                          ].map((field, index) => (
                            <div key={index} className="flex flex-col mb-4">
                              <label className="mb-1 font-semibold text-sm text-gray-700">{field.label}</label>
                              {field.type === 'select' ? (
                                <select className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
                                  <option value="">--Seleccione--</option>
                                  {field.options.map((option, i) => (
                                    <option key={i} value={option}>{option}</option>
                                  ))}
                                </select>
                              ) : (
                                <input
                                  type={field.type}
                                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                  value={field.value || ''}
                                  disabled={field.disabled || false}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>

                    <div className="mb-6">
                      <fieldset className="border border-gray-300 p-4 rounded-lg shadow-sm">
                        <legend className="text-lg font-semibold mb-4 text-center text-gray-800 flex items-center">
                          <i className="fas fa-address-card mr-2 text-green-600"></i>
                          Dirección de Contacto
                        </legend>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[
                            { label: 'País', type: 'text' },
                            { label: 'Provincia', type: 'text' },
                            { label: 'Cantón', type: 'text' },
                            { label: 'Parroquia', type: 'text' },
                            { label: 'Dirección', type: 'text' },
                            { label: 'Teléfono Convencional', type: 'text' },
                            { label: 'Teléfono Celular', type: 'text' },
                            { label: 'Correo Electrónico', type: 'email' }
                          ].map((field, index) => (
                            <div key={index} className="flex flex-col mb-4">
                              <label className="mb-1 font-semibold text-sm text-gray-700">{field.label}</label>
                              <input
                                type={field.type}
                                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                              />
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  </>
                ) : (
                  <>
                    <fieldset className="border border-gray-300 p-4 rounded-lg shadow-sm mb-6">
                      <legend className="text-lg font-semibold mb-2 text-center text-gray-800">
                        <i className="fas fa-user mr-2 text-blue-600"></i>
                        Datos del Conscripto
                      </legend>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold text-gray-700">Centro Movilización</label>
                        <input type="text" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold text-gray-700">Unidad Reparto</label>
                        <input type="text" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </fieldset>

                    <fieldset className="border border-gray-300 p-4 rounded-lg shadow-sm mb-6">
                      <legend className="text-lg font-semibold mb-2 text-center text-gray-800">
                        <i className="fas fa-exchange-alt mr-2 text-blue-600"></i>
                        Datos para registrar el Cambio de Unidad
                      </legend>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold text-gray-700">Centro de Movilización</label>
                        <select className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                          {provinces.map((provincia, i) => (
                            <option key={i} value={provincia}>{provincia}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold text-gray-700">Unidad de Asignación</label>
                        <input type="text" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>


                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold text-gray-700">Orden Movimiento</label>
                        <input
                          type="text"
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label className="mb-2 font-semibold text-gray-700">Fecha Movilización</label>
                        <input
                          type="date"
                          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </fieldset>
                  </>
                )}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-green-600 text-white p-3 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    onClick={() => alert('Datos actualizados')}
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="bg-red-700 text-white p-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 ml-2"
                    onClick={handleCloseModal}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div >
          </div >
        )
        }




      </main >
      <footer className="bg-black text-white py-6 border-t border-green-700">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center mb-4">
            <img src={logo} className="h-12" alt="logo" />
          </div>
          <p className="text-sm md:text-base font-light mb-4">
            &copy; {new Date().getFullYear()} DIRMOV Ecuador. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" className="text-gray-300 hover:text-green-500 transition-colors duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-green-500 transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-green-500 transition-colors duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-green-500 transition-colors duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="text-sm md:text-base">
            <a href="/privacy" className="hover:text-green-500 transition-colors duration-300">Política de Privacidad</a> |
            <a href="/terms" className="hover:text-green-500 transition-colors duration-300"> Términos y Condiciones</a>
          </div>
        </div>
      </footer>


    </div >
  );
}

export default App;
