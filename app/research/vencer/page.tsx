'use client';
import { useState } from 'react';

export default function ProyectoVENCERPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      {/* Language Toggle */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsSpanish((v) => !v)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          {isSpanish ? 'English' : 'Español'}
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-12">
        <img
          src="/images/Projecto_Vencer.png"
          alt="Proyecto VENCER Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {isSpanish
          ? 'Proyecto VENCER: Violencia y Resiliencia en Universitarios Mexicanos'
          : 'Proyecto VENCER: Violence and Resilience in Mexican College Students'}
      </h1>

      {/* Description */}
      <div className="space-y-6 text-lg leading-relaxed mb-16">
        {isSpanish ? (
          <>
            <p>
              La exposición a múltiples formas de violencia, o
              polivictimización, tiene profundas implicaciones para el
              desarrollo psicosocial. Los individuos polivictimizados corren
              mayor riesgo de experimentar dificultades académicas y problemas
              de salud mental, incluyendo ansiedad, depresión y trastorno de
              estrés postraumático.
            </p>
            <p>
              Proyecto VENCER (Violence Exposure iN College Mexican Emerging
              adults and Resilience Study) reclutó a 500 estudiantes de primer
              año en una universidad urbana mexicana para participar en un
              estudio longitudinal de tres olas sobre la polivictimización, el
              desempeño académico y la salud mental.
            </p>
            <p>
              El estudio examina:
              <br />
              1) Los efectos de la polivictimización en el rendimiento académico
              y la salud mental.
              <br />
              2) Si estos efectos son mediados o moderados por factores
              familiares, escolares, culturales o del vecindario.
              <br />
              3) La hipótesis de desensibilización, la cual propone que jóvenes
              expuestos crónicamente a violencia pueden volverse emocionalmente
              insensibles con el tiempo.
            </p>
            <p>
              Todas las olas de datos han sido recolectadas exitosamente. Los
              resultados están en proceso.
            </p>
          </>
        ) : (
          <>
            <p>
              Exposure to multiple forms of violence, or poly-victimization, has
              profound implications for psychosocial development. Individuals
              who are poly-victimized face increased risks of academic and
              psychological challenges, including anxiety, depression, and
              post-traumatic stress disorder.
            </p>
            <p>
              Proyecto VENCER (Violence Exposure iN College Mexican Emerging
              adults and Resilience Study) recruited 500 first-year students at
              an urban Mexican university to participate in a 3-wave
              longitudinal study examining poly-victimization, academic
              outcomes, and mental health.
            </p>
            <p>
              The study investigates:
              <br />
              1) The effects of poly-victimization on academic and mental health
              outcomes.
              <br />
              2) Whether those effects are mediated or moderated by family,
              school, cultural, and neighborhood-level factors.
              <br />
              3) The desensitization hypothesis — whether chronic violence
              exposure leads to emotional numbness over time.
            </p>
            <p>
              All waves have been successfully collected. Results are
              forthcoming.
            </p>
          </>
        )}
      </div>

      {/* PI and Co-PI Section */}
      <section className="bg-gray-50 rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isSpanish ? 'Equipo de Investigación' : 'Research Team'}
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-center">
          {isSpanish ? (
            <>
              <p>
                <strong>Investigadora Principal (PI):</strong> Dra. Andrea
                Medrano, Universidad de Pittsburgh.
              </p>
              <p>
                <strong>Co-Investigadora (Co-PI):</strong> Dra. Francheska
                Alers-Rojas, Universidad de Texas, Austin.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Principal Investigator (PI):</strong> Dr. Andrea
                Medrano, University of Pittsburgh.
              </p>
              <p>
                <strong>Co-Principal Investigator (Co-PI):</strong> Dr.
                Francheska Alers-Rojas, University of Texas, Austin.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}