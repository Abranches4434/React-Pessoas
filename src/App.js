import React, { useState } from 'react';
import Cadastro from './components/Cadastro';
import BuscarPorId from './components/BuscarPorId';
import ListaCarros from './components/ListaCarros';
import CorDeFundo from './components/CorDeFundo';

function App() {
  const [aba, setAba] = useState('cadastro');

  const abas = [
    { id: 'cadastro', label: '1 · Cadastro' },
    { id: 'buscar',   label: '2 · Buscar por ID' },
    { id: 'carros',   label: '3 · Lista de Carros' },
    { id: 'cor',      label: '4 · Cor do Fundo' },
  ];

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">Exercício em Grupo</h2>

      <ul className="nav nav-tabs mb-4">
        {abas.map((a) => (
          <li className="nav-item" key={a.id}>
            <button
              className={`nav-link ${aba === a.id ? 'active' : ''}`}
              onClick={() => setAba(a.id)}
            >
              {a.label}
            </button>
          </li>
        ))}
      </ul>

      {aba === 'cadastro' && <Cadastro />}
      {aba === 'buscar'   && <BuscarPorId />}
      {aba === 'carros'   && <ListaCarros />}
      {aba === 'cor'      && <CorDeFundo />}
    </div>
  );
}

export default App;
