import React, { useState } from 'react';

const carros = [
  { id: 1, marca: 'Toyota',    modelo: 'Corolla' },
  { id: 2, marca: 'Honda',     modelo: 'Civic' },
  { id: 3, marca: 'Ford',      modelo: 'Mustang' },
  { id: 4, marca: 'Chevrolet', modelo: 'Camaro' },
  { id: 5, marca: 'Nissan',    modelo: 'Altima' },
];

const marcas = ['', ...new Set(carros.map((c) => c.marca))];

function ListaCarros() {
  const [marcaSelecionada, setMarcaSelecionada] = useState('');

  const carrosFiltrados = marcaSelecionada
    ? carros.filter((c) => c.marca === marcaSelecionada)
    : carros;

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">Lista de Carros</h5>

          <div className="row g-2 align-items-center mb-3">
            <div className="col-auto">
              <label className="col-form-label">Filtrar por Marca:</label>
            </div>
            <div className="col-auto">
              <select
                className="form-select"
                value={marcaSelecionada}
                onChange={(e) => setMarcaSelecionada(e.target.value)}
              >
                {marcas.map((m) => (
                  <option key={m} value={m}>
                    {m === '' ? 'Todas' : m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {carrosFiltrados.length === 0 ? (
            <p className="text-muted">Nenhum carro encontrado.</p>
          ) : (
            <ul className="list-group">
              {carrosFiltrados.map((c) => (
                <li key={c.id} className="list-group-item">
                  <span className="fw-semibold">{c.marca}</span> – {c.modelo}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListaCarros;
