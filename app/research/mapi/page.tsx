'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function MAPIStudyPage() {
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
          src="/images/MAPI STUDY FINAL LOGO.PNG"
          alt="MAPI Study Logo"
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {isSpanish
          ? 'Estudio MAPI: Violencia y Salud Adolescente en México'
          : 'MAPI Study: Violence and Adolescent Health in Mexico'}
      </h1>

      {/* Description */}
      <div className="space-y-6 text-lg leading-relaxed mb-16">
        {isSpanish ? (
          <>
            <p>
              La violencia es una crisis de salud global que afecta
              desproporcionadamente a poblaciones pobres en América Latina, y
              sin embargo, hay poca investigación en el sur global, incluido
              México. Dado el desarrollo crítico de la adolescencia, es crucial
              comprender los efectos de la violencia en esta etapa y los
              factores protectores que pueden mitigar sus consecuencias.
            </p>
            <p>
              Este estudio investiga cómo diversas formas de violencia
              comunitaria (p. ej., violencia en el vecindario, acoso sexual)
              impactan la salud psicológica (ansiedad, depresión, TEPT) e inmune
              (niveles de inflamación) de adolescentes mexicanos. Se recopilaron
              datos de 349 adolescentes de dos escuelas públicas en Uruapan,
              Michoacán, incluyendo encuestas y análisis de sangre (N=250) para
              medir citoquinas proinflamatorias.
            </p>
            <p>
              Utilizando una perspectiva basada en fortalezas, también se
              exploran factores protectores como las relaciones cercanas con
              padres, el familismo y el sentido de pertenencia escolar.
            </p>
            <p>
              Este es el primer estudio en México que combina encuestas y
              biomarcadores en adolescentes para entender la conexión entre
              violencia y salud. Los resultados buscan informar intervenciones
              culturalmente relevantes para jóvenes latinos dentro y fuera de
              EE.UU.
            </p>
          </>
        ) : (
          <>
            <p>
              Violence is a global health crisis that disproportionately affects
              poor Latin American populations, yet there is scarce research
              conducted in Mexico. Given the pivotal developmental stage of
              adolescence, it is crucial to understand the effects of violence
              exposure and identify protective factors that buffer its impact.
            </p>
            <p>
              This study investigates how multiple forms of community violence
              (e.g., neighborhood violence, sexual harassment) affect the
              psychological (anxiety, depression, PTSD) and immune (inflammation
              levels) health of Mexican adolescents. Surveys and serum blood
              samples were collected from 349 students in Uruapan, Michoacán,
              including pro-inflammatory cytokine markers from 250 participants.
            </p>
            <p>
              Drawing from a strengths-based resilience framework, the study
              also examines protective factors such as close parent-adolescent
              relationships, familismo, and school belonging.
            </p>
            <p>
              This is the first study in Mexico to combine surveys and
              biomarkers to examine the relationship between violence and
              adolescent health. Findings aim to inform culturally responsive
              interventions for Latino youth inside and outside the U.S.
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
                <strong>Co-Investigadora (Co-PI):</strong> Dra. Gabriela
                Álvarez, Universidad de Guadalajara.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Principal Investigator (PI):</strong> Dr. Andrea
                Medrano, University of Pittsburgh.
              </p>
              <p>
                <strong>Co-Principal Investigator (Co-PI):</strong> Dr. Gabriela
                Alvarez, University of Guadalajara.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}