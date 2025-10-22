'use client';
import { useState } from 'react';

export default function PAISPage() {
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
          src="/images/PAIS(1).png"
          alt="PAIS Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {isSpanish
          ? 'PAIS: Polivictimización entre Adolescentes Mexicanos'
          : 'PAIS: Polyvictimization among Mexican Adolescents'}
      </h1>

      {/* Description */}
      <div className="space-y-6 text-lg leading-relaxed mb-16">
        {isSpanish ? (
          <>
            <p>
              Los jóvenes menores de 18 años que experimentan una forma de violencia 
              generalmente corren el riesgo de sufrir otras formas de victimización o 
              de ser poli-victimizados. La poli-victimización tiene profundas 
              consecuencias en la salud mental de los adolescentes (Wolfe, 2018).
            </p>
            <p>
              El{' '}
              <strong>
                Estudio PAIS (Bienestar Mexicano: Estudio de Entrevistas sobre
                Polivictimización en Adolescentes Mexicanos)
              </strong>{' '}
              busca desarrollar una comprensión amplia y profunda de las experiencias de los 
              adolescentes mexicanos con diversas formas de violencia (abuso psicológico, acoso escolar, 
              violencia comunitaria y acoso sexual callejero).
            </p>
            <p>
              Además, este estudio explora los mecanismos de afrontamiento de los adolescentes 
              e identifica otras formas de apoyo frente a la violencia (por ejemplo, comunicación 
              entre padres e hijos, apoyo de pares, apoyo de docentes, religiosidad o espiritualidad).
            </p>
            <p>
              En total, 69 adolescentes que viven en un entorno urbano en Michoacán, México, 
              participaron en entrevistas individuales semiestructuradas. El análisis cualitativo 
              de este estudio se encuentra en curso.
            </p>
            <p>
              Este estudio está financiado por la Sociedad para la Investigación en el Desarrollo 
              Infantil (SRCD) mediante la beca Small Grant for Early Career Scholars otorgada a la 
              Dra. Andrea Medrano.
            </p>
          </>
        ) : (
          <>
            <p>
              Youth under the age of 18 who experience one form of violence are 
              typically at risk for experiencing other forms of victimization or 
              being poly-victimized. Poly-victimization has profound mental health 
              outcomes on adolescents (Wolfe, 2018). 
            </p>
            <p>
              The{' '}
              <strong>
                PAIS Study (Mexican Bienestar: Polyvictimization among Mexican
                Adolescents Interview Study)
              </strong>{' '}
              seeks to develop a rich, in-depth understanding of Mexican adolescents’
              experiences with various forms of violence (psychological abuse, bullying, 
              community violence, and sexual street harassment).
            </p>
            <p>
              This study explores adolescents’ coping mechanisms and identifies other forms 
              of support in the face of violence (i.e., parent-adolescent communication, peer support, 
              teacher support, religiosity/spirituality). 
            </p>
            <p>
              Specifically, 69 adolescents living in an urban setting in Michoacan, 
              Mexico participated in individual semi-structured interviews. Qualitative 
              analysis from this study is ongoing.
            </p>
            <p>
              This study is funded by the Society for Research in Child
              Development (SRCD) Small Grant for Early Career Scholars awarded
              to Dr. Andrea Medrano.
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
                <strong>Investigadora Principal (PI):</strong> Dra. Andrea Medrano, 
                Universidad de Pittsburgh.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Principal Investigator (PI):</strong> Dr. Andrea Medrano, 
                University of Pittsburgh.
              </p>
            
            </>
          )}
        </div>
      </section>
    </main>
  );
}