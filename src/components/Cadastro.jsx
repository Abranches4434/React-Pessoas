import React, { useState, useEffect } from 'react';

const API_URL = 'https://6a209a7de96c1d13b587a989.mockapi.io/clientes';

function Cadastro() {
  const [nome, setNome]   = useState('');
  const [cpf, setCpf]     = useState('');
  const [email, setEmail] = useState('');
  const [pessoas, setPessoas] = useState([]);
  const [status, setStatus]   = useState('');
  const [erro, setErro]       = useState('');

  useEffect(() => {
    carregarPessoas();
  }, []);

  async function carregarPessoas() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPessoas(data);
    } catch {
      setErro('Não foi possível carregar a lista. Verifique a URL da API.');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('');
    setErro('');

    if (!nome || !cpf || !email) {
      setErro('Preencha todos os campos.');
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf, email }),
      });

      if (!res.ok) throw new Error();

      setStatus('✅ Pessoa cadastrada com sucesso!');
      setNome('');
      setCpf('');
      setEmail('');
      carregarPessoas(); // atualiza a lista
    } catch {
      setErro('Erro ao cadastrar. Verifique a URL da API.');
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
          <h5 className="card-title mb-3">Cadastrar pessoa</h5>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">CPF</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="000.000.000-00"
                  maxLength={14}
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>

              <div className="col-12">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Adicionar pessoa
            </button>

            {status && <p className="text-success mt-2 mb-0">{status}</p>}
            {erro   && <p className="text-danger  mt-2 mb-0">{erro}</p>}
          </form>
        </div>
      </div>
      
      <h5 className="mb-3">Pessoas cadastradas</h5>

      {pessoas.length === 0 ? (
        <p className="text-muted">Nenhuma pessoa cadastrada ainda.</p>
      ) : (
        <ul className="list-group">
          {pessoas.map((p) => (
            <li key={p.id} className="list-group-item d-flex align-items-center gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center bg-primary text-white fw-bold"
                style={{ width: 40, height: 40, fontSize: 14, flexShrink: 0 }}
              >
                {iniciais(p.nome || p.name)}
              </div>
              <div>
                <p className="mb-0 fw-semibold">
                  {p.nome || p.name || '—'}</p>
                <small className="badge bg-secondary ms-2" style={{ fontSize: 11 }}>
                  {p.id}
                </small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cadastro;
