'use client';
import { useState } from 'react';

export default function HaveHopePage() {
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
          src="/images/HAVE-HOPE color logo.png"
          alt="HAVE HOPE Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {isSpanish
          ? 'HAVE HOPE: Experiencias de Victimización Adulta en Honduras'
          : 'HAVE HOPE: Honduras Adult Victimization Experience'}
      </h1>

      {/* Description */}
      <div className="space-y-6 text-lg leading-relaxed mb-16">
        {isSpanish ? (
          <>
            <p>
              La violencia basada en género (VBG) es un fenómeno común que
              afecta a aproximadamente un tercio de las mujeres en todo el
              mundo. Esta forma de violencia se asocia con consecuencias graves
              para la salud mental, incluyendo ansiedad, depresión y trastorno
              de estrés postraumático.
            </p>
            <p>
              El estudio{' '}
              <strong>
                HAVE HOPE (Honduras Adult Victimization Experiences – Harnessing
                Opportunities for Positive Empowerment)
              </strong>{' '}
              reclutará a 200 mujeres adultas de nueve municipios rurales y
              urbanos en Honduras para participar en una encuesta a través de
              Qualtrics.
            </p>
            <p>
              Este estudio tiene como objetivos:
              <br />
              1) Evaluar las tasas de violencia basada en género entre mujeres
              hondureñas adultas;
              <br />
              2) Examinar la relación entre la exposición a la violencia y la
              salud mental;
              <br />
              3) Explorar mecanismos de sanación, como la esperanza, la
              resiliencia y el crecimiento postraumático.
            </p>
            <p>
              HAVE HOPE busca comprender mejor los procesos de sanación y
              recuperación entre mujeres hondureñas expuestas a la violencia,
              con la intención de apoyar el desarrollo de intervenciones
              culturalmente relevantes y centradas en la resiliencia.
            </p>
          </>
        ) : (
          <>
            <p>
              Gender-based violence (GBV) is a widespread issue affecting
              approximately one-third of women globally. GBV is linked to
              significant mental health concerns, including anxiety, depression,
              and post-traumatic stress disorder.
            </p>
            <p>
              <strong>
                HAVE HOPE (Honduras Adult Victimization Experiences – Harnessing
                Opportunities for Positive Empowerment)
              </strong>{' '}
              will recruit 200 adult women across nine rural and urban
              municipalities in Honduras to complete a Qualtrics survey.
            </p>
            <p>
              The study aims to:
              <br />
              1) Assess the rates of gender-based violence among Honduran women;
              <br />
              2) Examine the association between GBV and mental health (e.g.,
              anxiety, depression, PTSD);
              <br />
              3) Explore healing mechanisms such as hope, resilience, and
              post-traumatic growth to understand their protective role.
            </p>
            <p>
              This research aims to deepen understanding of healing among
              violence-exposed Honduran women and inform culturally grounded,
              resilience-focused interventions.
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