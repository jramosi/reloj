import { createContext, useContext, useState, useEffect } from 'react';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [tiempo, setTiempo] = useState({ hh: '00', mm: '00', ss: '00', raw: null });

  useEffect(() => {
    let estampaServidor = 0;
    let tiempoReferenciaLocal = 0;
    const evento = new EventSource("https://horaoficial.ibmetro.gob.bo:9191");

    const actualizarReloj = () => {
      if (estampaServidor === 0) return;

      const desfase = Date.now() - tiempoReferenciaLocal;
      const date = new Date(estampaServidor + desfase);
      const pad = (n) => n.toString().padStart(2, '0');

      setTiempo({
        hh: pad(date.getHours()),
        mm: pad(date.getMinutes()),
        ss: pad(date.getSeconds()),
        raw: date // texto completo
      });
    };

    evento.onmessage = (e) => {
      estampaServidor = parseInt(e.data);
      tiempoReferenciaLocal = Date.now();
      actualizarReloj();
    };

    const intervalo = setInterval(actualizarReloj, 1000);

    return () => {
      evento.close();
      clearInterval(intervalo);
    };
  }, []);

  return (
    <TimeContext.Provider value={tiempo}>
      {children}
    </TimeContext.Provider>
  );
};


export const useTime = () => useContext(TimeContext);