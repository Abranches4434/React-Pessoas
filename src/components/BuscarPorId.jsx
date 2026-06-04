import React, { useState } from 'react';

const API_URL = 'https://6a209a7de96c1d13b587a989.mockapi.io/clientes';

function BuscarPorId() {
  const [id, setId]         = useState('');
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro]       = useState('');
  const [carregando, setCarregando] = useState(false);

  async function buscar(e) {
    e.preventDefault();
    setErro('');
    setUsuario(null);

    if (!id) {
      setErro('Informe um ID.');
      return;
    }

    setCarregando(true);
    try {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) throw new Error('Não encontrado');
      const data = await res.json();
      setUsuario(data);
    } catch {
      setErro(`Nenhum usuário encontrado com o ID ${id}.`);
    } finally {
      setCarregando(false);
    }
  }

  function iniciais(n) {
    if (!n) return '?';
    const partes = n.trim().split(' ');
    return partes.length > 1
      ? (partes[0][0] + partes[partes.length - 1][0]).toUpperCase()
      : n.substring(0, 2).toUpperCase();
  }

  return (
    <div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Listar usuário por ID</h5>

          <form onSubmit={buscar} className="d-flex gap-2 align-items-end">
            <div>
              <label className="form-label">ID do usuário</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ex: 1"
                min="1"
                style={{ width: 140 }}
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={carregando}>
              {carregando ? 'Buscando...' : 'Buscar usuário'}
            </button>
          </form>

          {erro && <p className="text-danger mt-2 mb-0">{erro}</p>}
        </div>
      </div>

      {usuario && (
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold"
                style={{ width: 48, height: 48, fontSize: 16, flexShrink: 0 }}
              >
                {iniciais(usuario.nome || usuario.name)}
              </div>
              <h5 className="mb-0">Dados do usuário</h5>
            </div>

            <table className="table table-bordered mb-0">
              <tbody>
                <tr>
                  <th style={{ width: '30%' }}>Nome</th>
                  <td>{usuario.nome || usuario.name || '—'}</td>
                </tr>
                <tr>
                  <th>E-mail</th>
                  <td>{usuario.email || '—'}</td>
                </tr>
                <tr>
                  <th>CPF</th>
                  <td>{usuario.cpf || '—'}</td>
                </tr>
                <tr>
                  <th>ID</th>
                  <td>
                    <span className="badge bg-success">#{usuario.id}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuscarPorId;
