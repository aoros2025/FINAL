'use client';
import { useState } from 'react';

export default function SEVEREPage() {
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
          src="/images/SEVERE.png"
          alt="SEVERE Study Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {isSpanish
          ? 'SEVERE: Exposición Estudiantil a la Violencia y Resiliencia'
          : 'SEVERE: Student Exposure to Violence and Resilience'}
      </h1>

      {/* Description */}
      <div className="space-y-6 text-lg leading-relaxed mb-16">
        {isSpanish ? (
          <>
            <p>
              El estudio SEVERE (Exposición Estudiantil a la Violencia y
              Resiliencia) tiene como objetivo capturar los tipos de violencia
              que enfrentan estudiantes universitarios en Pittsburgh y cómo
              estas experiencias afectan su salud mental y desempeño académico.
            </p>
            <p>
              Se reclutarán 250 estudiantes de la Universidad de Pittsburgh para
              participar en una encuesta en línea que evaluará tasas de
              victimización, síntomas de ansiedad y estrés postraumático, así
              como impacto académico (como el GPA).
            </p>
            <p>
              Este estudio busca:
              <br />
              1) Investigar las tasas de violencia comunitaria y violencia en el
              noviazgo.
              <br />
              2) Evaluar el impacto de estas experiencias en el desempeño
              académico.
              <br />
              3) Evaluar el impacto en la salud mental, incluyendo síntomas de
              ansiedad y TEPT.
            </p>
          </>
        ) : (
          <>
            <p>
              The SEVERE (Student Exposure to Violence and Resilience) Study
              aims to capture the types of violence college students in
              Pittsburgh experience and how these experiences affect their
              mental health and academic performance.
            </p>
            <p>
              The study will recruit 250 students from the University of
              Pittsburgh to complete an online survey assessing victimization
              rates, anxiety and PTSD symptoms, and academic outcomes (e.g.,
              GPA).
            </p>
            <p>
              Specifically, SEVERE will:
              <br />
              1) Investigate rates of community violence and dating violence
              among students.
              <br />
              2) Assess the impact of these experiences on academic functioning.
              <br />
              3) Assess the impact on psychological functioning, including PTSD
              and anxiety.
            </p>
          </>
        )}
      </div>

      {/* PI Section */}
      <section className="bg-gray-50 rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isSpanish ? 'Equipo de Investigación' : 'Research Team'}
        </h2>

        <div className="text-lg text-center">
          {isSpanish ? (
            <p>
              <strong>Investigadora Principal (PI):</strong> Dra. Andrea
              Medrano, Universidad de Pittsburgh.
            </p>
          ) : (
            <p>
              <strong>Principal Investigator (PI):</strong> Dr. Andrea Medrano,
              University of Pittsburgh.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}