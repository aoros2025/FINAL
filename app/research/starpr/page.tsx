'use client';
import { useState } from 'react';

export default function STARPRPage() {
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
          src="/images/STARPR(1).png"
          alt="STAR*PR Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {isSpanish
          ? 'STAR*PR: Estudio sobre Trauma, Adversidad y Resiliencia en Puerto Rico'
          : 'STAR*PR: Study on Trauma, Adversity, and Resilience in Puerto Rico'}
      </h1>

      {/* Description */}
      <div className="space-y-6 text-lg leading-relaxed mb-16">
        {isSpanish ? (
          <>
            <p>
              La violencia en el hogar, la escuela y la comunidad es común y
              perjudicial para la salud mental. La polivictimización ocurre
              cuando múltiples formas de violencia se experimentan
              simultáneamente, lo cual es común entre estudiantes universitarios
              que pertenecen a grupos étnicos/raciales minoritarios o con
              desventajas socioeconómicas.
            </p>
            <p>
              STAR*PR (Study on Trauma, Adversity, and Resilience in Puerto
              Rico) reclutará a 250 estudiantes universitarios en Puerto Rico
              para participar en una encuesta en línea que evaluará experiencias
              de victimización, discriminación, salud mental, rendimiento
              académico, y factores de resiliencia.
            </p>
            <p>
              Este estudio busca:
              <br />
              1) Investigar tasas de violencia y discriminación.
              <br />
              2) Evaluar cómo estas experiencias afectan el rendimiento
              académico.
              <br />
              3) Evaluar cómo estas experiencias afectan la salud mental y
              autoestima.
              <br />
              4) Identificar factores de protección y estrategias de
              afrontamiento.
            </p>
            <p>
              Los hallazgos de STAR*PR proporcionarán información clave para
              diseñar intervenciones dirigidas a apoyar la resiliencia y el
              bienestar de estudiantes universitarios puertorriqueños.
            </p>
          </>
        ) : (
          <>
            <p>
              Violence in home, school, and community settings is widespread and
              harmful to mental health. Known as poly-victimization, multiple
              forms of violence are often experienced simultaneously —
              especially among racial/ethnic minoritized and socioeconomically
              disadvantaged college students.
            </p>
            <p>
              STAR*PR (Study on Trauma, Adversity, and Resilience in Puerto
              Rico) will recruit 250 college students at a university in Puerto
              Rico to complete an online survey assessing victimization,
              discrimination, mental health, academic performance, and
              resilience factors.
            </p>
            <p>
              The study aims to:
              <br />
              1) Investigate rates of violence and discrimination exposure.
              <br />
              2) Assess impacts on academic performance (e.g., GPA, engagement).
              <br />
              3) Assess impacts on mental health and self-esteem.
              <br />
              4) Identify protective factors and coping strategies.
            </p>
            <p>
              Findings will provide valuable insight into the lived experiences
              of Puerto Rican students and help guide targeted interventions
              that promote resilience and well-being.
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
                <strong>Co-Investigadora (Co-PI):</strong> Dra. Irmarie
                Cruz-López, Universidad de Puerto Rico.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Principal Investigator (PI):</strong> Dr. Andrea
                Medrano, University of Pittsburgh.
              </p>
              <p>
                <strong>Co-Principal Investigator (Co-PI):</strong> Dr. Irmarie
                Cruz-Lopez, University of Puerto Rico.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}