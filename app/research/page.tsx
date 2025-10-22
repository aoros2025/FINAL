// CREAR Lab - Research Page (Clickable Version)
// Built by Angel Oros & ChatGPT (GPT-5)
// Last updated: October 8, 2025

'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ResearchPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  const studies = [
    {
      name: 'Fortaleza Mexicana',
      logo: '/images/FM.png',
      descEn:
        'Families confronting violence in rural Mexico. The study explores Mexican families’ experiences with violence and resilience.',
      descEs:
        'Familias confrontando violencia en México rural. El estudio explora las experiencias de las familias mexicanas con la violencia y la resiliencia.',
      link: '/research/fortaleza',
    },
    {
      name: 'Proyecto VENCER',
      logo: '/images/Projecto_Vencer.png',
      descEn:
        'Violence Exposure in College Mexican Emerging Adults and Resilience Study. Examines how exposure to violence influences adjustment during the transition to adulthood.',
      descEs:
        'Estudio sobre exposición a la violencia y resiliencia en adultos jóvenes mexicanos universitarios. Examina cómo la exposición a la violencia influye en la adaptación durante la transición a la adultez.',
      link: '/research/vencer',
    },
    {
      name: 'MAPI Study',
      logo: '/images/MAPI STUDY FINAL LOGO.PNG',
      descEn:
        'Linking neighborhood violence to Mexican adolescents’ psychological and immune health through a longitudinal, community-based approach.',
      descEs:
        'Vinculando la violencia comunitaria con la salud psicológica e inmune de adolescentes mexicanos mediante un enfoque longitudinal y comunitario.',
      link: '/research/mapi',
    },
    {
      name: 'PAIS',
      logo: '/images/PAIS(1).png',
      descEn:
        'Polyvictimization among Mexican Adolescents Interview Study. Investigates how multiple forms of victimization affect psychological well-being.',
      descEs:
        'Estudio de Entrevistas sobre Polivictimización en Adolescentes Mexicanos. Investiga cómo múltiples formas de victimización afectan el bienestar psicológico.',
      link: '/research/pais',
    },
    {
      name: 'STAR*PR',
      logo: '/images/STARPR(1).png',
      descEn:
        'Study on Trauma, Adversity, and Resilience in Puerto Rico. Focused on developing trauma-informed school and community interventions for youth.',
      descEs:
        'Estudio sobre Trauma, Adversidad y Resiliencia en Puerto Rico. Centrado en desarrollar intervenciones escolares y comunitarias informadas en trauma para jóvenes.',
      link: '/research/starpr',
    },
    {
      name: 'HAVE HOPE',
      logo: '/images/HAVE-HOPE color logo.png',
      descEn:
        'Honduras Adult Victimization Experience Harnessing Opportunities for Positive Empowerment. Examines gender-based violence and resilience in Honduran women.',
      descEs:
        'Experiencia de Victimización Adulta en Honduras Aprovechando Oportunidades para el Empoderamiento Positivo. Examina la violencia de género y la resiliencia en mujeres hondureñas.',
      link: '/research/havehope',
    },
    {
      name: 'PRIDE',
      logo: '/images/PRIDE PR.png',
      descEn:
        'Puerto Rican Identity Development after Experiences of Trauma Interview Study. Explores identity, culture, and recovery after adversity.',
      descEs:
        'Desarrollo de la Identidad Puertorriqueña tras Experiencias de Trauma. Explora identidad, cultura y recuperación después de la adversidad.',
      link: '/research/pride',
    },
    {
      name: 'SEVERE',
      logo: '/images/SEVERE.png',
      descEn:
        'Student Exposure to Violence and Resilience in Education. Investigates school belonging and adaptive responses to adversity in youth.',
      descEs:
        'Exposición Estudiantil a la Violencia y Resiliencia en la Educación. Investiga el sentido de pertenencia escolar y las respuestas adaptativas a la adversidad en jóvenes.',
      link: '/research/severe',
    },
  ];

  return (
    <main className="px-6 py-20 max-w-6xl mx-auto text-gray-800">
      {/* Language Toggle */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setIsSpanish((v) => !v)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          {isSpanish ? 'English' : 'Español'}
        </button>
      </div>

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-16">
        {isSpanish ? 'Nuestros Estudios' : 'Our Research Studies'}
      </h1>

      {/* Study Cards */}
      <div className="space-y-16">
        {studies.map((study, i) => (
          <Link key={study.name} href={study.link}>
            <div
              className={`flex flex-col md:flex-row ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center justify-between gap-10 bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer`}
            >
              {/* Logo */}
              <div className="flex justify-center md:w-1/3">
                <div className="h-40 w-40 flex items-center justify-center rounded-2xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#C9E9FF] via-[#EAF8D9] to-[#F9E0E3] shadow-sm">
                  <img
                    src={study.logo}
                    alt={`${study.name} logo`}
                    className="h-32 object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {study.name}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {isSpanish ? study.descEs : study.descEn}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
