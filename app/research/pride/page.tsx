'use client';
import { useState } from 'react';

export default function PRIDEPage() {
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
          src="/images/PRIDE PR.png"
          alt="PRIDE Study Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {isSpanish
          ? 'PRIDE: Desarrollo de la Identidad Puertorriqueña tras Experiencias de Trauma'
          : 'PRIDE: Puerto Rican Identity Development after Experiences of Trauma'}
      </h1>

      {/* Description */}
      <div className="space-y-6 text-lg leading-relaxed mb-16">
        {isSpanish ? (
          <>
            <p>
              Desde 2016, las personas en Puerto Rico han enfrentado un aumento
              en la violencia de género (especialmente durante el COVID-19),
              desastres naturales como los huracanes María e Irma, y altos
              niveles de pobreza extrema. Estas experiencias pueden tener
              efectos duraderos en la salud mental y el desarrollo de la
              identidad.
            </p>
            <p>
              El estudio{' '}
              <strong>
                PRIDE (Puerto Rican Identity Development after Experiences of
                Trauma Interview Study)
              </strong>{' '}
              busca entender cómo las historias de trauma —ya sean culturales,
              familiares, sociales o sistémicas— influyen en la manera en que
              los estudiantes universitarios puertorriqueños desarrollan su
              identidad.
            </p>
            <p>
              También se explorarán estrategias de afrontamiento y factores
              protectores como el apoyo interpersonal, el sentido de propósito y
              las prácticas religiosas.
            </p>
            <p>
              Para este estudio, se reclutarán 45 estudiantes de la Universidad
              de Puerto Rico en Mayagüez, quienes participarán en entrevistas
              individuales y semiestructuradas.
            </p>
          </>
        ) : (
          <>
            <p>
              Since 2016, residents of Puerto Rico have experienced increases in
              gender-based violence (especially during the COVID-19 pandemic),
              natural disasters like Hurricane Maria and Irma, and extreme
              poverty. These experiences can have long-lasting effects on mental
              health and identity development.
            </p>
            <p>
              The{' '}
              <strong>
                PRIDE Study (Puerto Rican Identity Development after Experiences
                of Trauma Interview Study)
              </strong>{' '}
              seeks to deepen our understanding of how trauma histories — rooted
              in cultural, familial, social, or systemic factors — shape the
              identity development of Puerto Rican college students.
            </p>
            <p>
              The study also explores coping strategies and protective factors
              such as interpersonal support, meaning-making, and religious
              practices.
            </p>
            <p>
              Forty-five students from the University of Puerto Rico at Mayagüez
              will be recruited to participate in individual, semi-structured
              interviews.
            </p>
          </>
        )}
      </div>

      {/* PI and Supervising Faculty Section */}
      <section className="bg-gray-50 rounded-xl p-8 shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isSpanish ? 'Equipo de Investigación' : 'Research Team'}
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-center">
          {isSpanish ? (
            <>
              <p>
                <strong>Investigadora Principal (PI):</strong> Sydni Davila,
                Universidad de Pittsburgh.
              </p>
              <p>
                <strong>Supervisora del Proyecto:</strong> Dra. Andrea Medrano,
                Universidad de Pittsburgh.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Principal Investigator (PI):</strong> Sydni Davila,
                University of Pittsburgh.
              </p>
              <p>
                <strong>Supervising Faculty:</strong> Dr. Andrea Medrano,
                University of Pittsburgh.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}