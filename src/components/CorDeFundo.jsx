import React, { useState, useEffect } from 'react';

const MAX_CORES = 4;

const PALETA = [
  '#F4E1D2',
  '#D4E8F0',
  '#E2F0CB',
  '#FCE4EC',
];
function textoContrasteEscuro(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminancia = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminancia > 0.5;
}

function CorDeFundo() {
  const [corAtual, setCorAtual]   = useState('#FFFFFF');
  const [historico, setHistorico] = useState([]);
  const [indice, setIndice]       = useState(0);

  useEffect(() => {
    if (corAtual === '#FFFFFF') return; 
    setHistorico((prev) => {
      const novoHistorico = [...prev, corAtual];
  
      if (novoHistorico.length > MAX_CORES) {
        return novoHistorico.slice(novoHistorico.length - MAX_CORES);
      }
      return novoHistorico;
    });
  }, [corAtual]);

  function trocarCor() {
    const novaCor = PALETA[indice % PALETA.length];
    setCorAtual(novaCor);
    setIndice((i) => i + 1);
  }

  const textoEscuro = textoContrasteEscuro(corAtual);

  return (
    <div>
      <div
        className="rounded mb-3 d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundColor: corAtual,
          height: 200,
          transition: 'background-color 0.4s ease',
          border: '1px solid #dee2e6',
        }}
      >
        <p
          className="mb-1 fw-semibold"
          style={{ color: textoEscuro ? '#333' : '#fff', fontSize: 14 }}
        >
          Cor atual
        </p>
        <p
          className="mb-0 fw-bold"
          style={{
            color: textoEscuro ? '#111' : '#fff',
            fontSize: 26,
            letterSpacing: 3,
          }}
        >
          {corAtual.toUpperCase()}
        </p>
      </div>

      <button className="btn btn-primary w-100 mb-4" onClick={trocarCor}>
        Trocar cor
      </button>

      {historico.length > 0 && (
        <div>
          <p className="fw-semibold mb-2">
            Histórico (máx. {MAX_CORES} cores)
          </p>
          <div className="d-flex gap-3 flex-wrap">
            {historico.map((cor, i) => (
              <div key={i} className="text-center">
                <div
                  className="rounded mb-1"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: cor,
                    border: '1px solid #dee2e6',
                  }}
                />
                <small className="text-muted" style={{ fontSize: 11 }}>
                  {cor.toUpperCase()}
                </small>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CorDeFundo;
