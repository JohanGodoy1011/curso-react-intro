import React, { useState } from 'react';
import logo from './logo.png';

const provinces = ["Azuay", "Bolívar", "Cañar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galápagos", "Guayas", "Imbabura", "Loja", "Los Ríos", "Manabí", "Morona Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Santa Elena", "Santo Domingo", "Sucumbíos", "Tungurahua", "Zamora Chinchipe"];

const soldiers = [
  { name: 'Juan Pérez', center: 'Pichincha', unit: 'Unidad A' },
  // Add more soldier data here as needed
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSoldier, setSelectedSoldier] = useState(null);
  const [modalType, setModalType] = useState(''); // 'update' or 'changeLocation'

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

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-green-900 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <img src={logo} className="h-24" alt="logo" />
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-300">Menu</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Licenciamiento de Conscriptos</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <fieldset className="border p-4">
            <legend className="text-lg font-semibold mb-2">Información de Conscripto</legend>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Leva</label>
              <select className="p-2 border border-gray-300 rounded">
                {[...Array(21)].map((_, i) => (
                  <option key={i} value={1990 + i}>{1990 + i}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Llamada</label>
              <select className="p-2 border border-gray-300 rounded">
                <option value="primera">Primera</option>
                <option value="segunda">Segunda</option>
                <option value="tercera">Tercera</option>
              </select>
            </div>
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
          </fieldset>

          <fieldset className="border p-4">
            <legend className="text-lg font-semibold mb-2">Información de Licenciamiento</legend>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Fecha de Licenciamiento</label>
              <input type="date" className="p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Tipo de Reserva</label>
              <select className="p-2 border border-gray-300 rounded">
                <option value="ex conscripto">Ex Conscripto</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Rama</label>
              <select className="p-2 border border-gray-300 rounded">
                <option value="ejercito">Ejército Ecuatoriano</option>
                <option value="armada">Armada de Ecuador</option>
                <option value="fuerza_aerea">Fuerza Aérea Ecuatoriana</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Tipo de Arma</label>
              <input type="text" className="p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Arma</label>
              <input type="text" className="p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Tipo de Militar</label>
              <input type="text" className="p-2 border border-gray-300 rounded" value="Tropa" disabled />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-semibold">Grado Militar</label>
              <input type="text" className="p-2 border border-gray-300 rounded" value="Soldado de Reserva" disabled />
            </div>
          </fieldset>
        </form>

        <button className="bg-green-700 text-white p-2 rounded mb-4">
          <i className="fas fa-search"></i> Buscar
        </button>

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
                      className="bg-blue-500 text-white p-1 rounded"
                      onClick={() => handleOpenModal(soldier, 'update')}
                    >
                      Actualizar
                    </button>
                    <button
                      className="bg-yellow-500 text-white p-1 rounded"
                      onClick={() => handleOpenModal(soldier, 'changeLocation')}
                    >
                      Cambiar de Sede
                    </button>
                    <button className="bg-red-500 text-white p-1 rounded">Licenciar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg w-1/2">
              <h2 className="text-xl font-bold mb-4">
                {modalType === 'update' ? 'Actualizar Datos del Soldado' : 'Cambiar de Sede'}
              </h2>
              <form>
                {modalType === 'update' ? (
                  <>
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 font-semibold">Nombre</label>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded"
                        value={selectedSoldier?.name || ''}
                        disabled
                      />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 font-semibold">Teléfono</label>
                      <input type="tel" className="p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 font-semibold">Dirección</label>
                      <input type="text" className="p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 font-semibold">Tipo de Sangre</label>
                      <select className="p-2 border border-gray-300 rounded">
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
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 font-semibold">Correo Electrónico</label>
                      <input type="email" className="p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 font-semibold">Fecha de Nacimiento</label>
                      <input type="date" className="p-2 border border-gray-300 rounded" />
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-green-500 text-white p-2 rounded mr-2"
                    onClick={() => alert('Datos actualizados')}
                  >
                    Guardar
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 text-white p-2 rounded"
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
