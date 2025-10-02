import React from 'react';

const NetworkEffectSection = () => {
  return (
    <>
      <style>
        {`
          .data-flow {
            stroke-dasharray: 8;
            stroke-dashoffset: 16;
            animation: data-flow-animation 1s linear infinite;
          }

          @keyframes data-flow-animation {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Efeito de <span className="bg-gradient-ai bg-clip-text text-transparent">
              Rede
            </span>
          </h2>
        </div>
        <p className="mt-2 text-sm font-semibold text-center text-gray-700">Hub de Inteligência Antifraude</p>
        <div className="mt-12">
          {/* Placeholder for the graph */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-full">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">AI.DATA</span>
                  </div>
                </div>
              </div>
              {/* Health Operators */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute z-0`}
                  style={{
                    top: `calc(50% + ${150 * Math.sin((i * 2 * Math.PI) / 6)}px - 2rem)`,
                    left: `calc(50% + ${150 * Math.cos((i * 2 * Math.PI) / 6)}px - 2rem)`,
                  }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                    <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6m-6 4h6m-6-8h6"></path></svg>
                  </div>
                </div>
              ))}
            </div>
            {/* Arrows */}
            <svg className="w-full h-96" viewBox="0 0 400 400">
              {[...Array(6)].map((_, i) => (
                <g key={i}>
                  <line
                    x1="200"
                    y1="200"
                    x2={200 + 120 * Math.cos((i * 2 * Math.PI) / 6)}
                    y2={200 + 120 * Math.sin((i * 2 * Math.PI) / 6)}
                    stroke="url(#line-gradient)"
                    strokeWidth="1.5"
                    markerEnd="url(#arrow)"
                  />
                  <line
                    className="data-flow"
                    x1="200"
                    y1="200"
                    x2={200 + 120 * Math.cos((i * 2 * Math.PI) / 6)}
                    y2={200 + 120 * Math.sin((i * 2 * Math.PI) / 6)}
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </g>
              ))}
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#22D3EE" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-ai-medium max-w-3xl mx-auto">
            “Quanto mais operadoras se conectam, mais poderosa se torna a rede. O AI.DATA transforma o mercado em um ecossistema colaborativo, onde seguradoras compartilham informações críticas em tempo real, detectam fraudes com precisão, atribuem scores de risco e fornecem motivos detalhados para ações imediatas.”
          </p>
          <br></br>
          <span className="text-xl text-ai-medium max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 bg-gradient-ai bg-clip-text text-transparent">
            “Sozinhos, combatemos uma fraude. Unidos, eliminamos o problema.”
          </span>
        </div>
      </div>
    </section>
    </>
  );
};

export default NetworkEffectSection;
