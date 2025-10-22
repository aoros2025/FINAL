'use client';
import { useState } from 'react';
import Image from 'next/image';

type Entry = {
  date: string;
  title: string;
  description: string;
  image?: string;
};

type YearGroup = {
  year: number;
  entries: Entry[];
};

export default function KeepingUpPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  const data: YearGroup[] = [
    // ===================== 2025 =====================
    {
      year: 2025,
      entries: [
        {
          date: 'August 22, 2025',
          title: isSpanish
            ? 'Voluntariado en el Banco de Alimentos'
            : 'Food Bank Team Volunteering',
          description: isSpanish
            ? 'El equipo del CREAR Lab pasó el día apoyando al Greater Pittsburgh Community Food Bank. ¡Comprometidos con retribuir tanto a nivel local como internacional!'
            : 'The CREAR Lab spent the day volunteering with the Greater Pittsburgh Community Food Bank—giving back locally and globally!',
          image: '/images/FB.jpg', // or '/images/foodbank.jpg' if that’s your final name
        },
        {
          date: 'August 14, 2025',
          title: isSpanish
            ? 'Alcance comunitario: CREAR y UDDC'
            : 'Community Outreach: CREAR & UDDC',
          description: isSpanish
            ? 'Fortalecimos alianzas con familias de Cleveland y la Universidad de Pittsburgh para fomentar colaboración y participación.'
            : 'We strengthened partnerships between Cleveland families and the University of Pittsburgh to foster collaboration and engagement.',
          image: '/images/values.jpg',
        },
        {
          date: 'August 10, 2025',
          title: isSpanish
            ? 'HAVE HOPE: ¡Recolección de datos finalizada!'
            : 'HAVE HOPE: Data Collection Complete!',
          description: isSpanish
            ? 'HAVE HOPE concluyó recolección de datos sobre VBG y sanación entre mujeres hondureñas. ¡Gracias a participantes, asistentes y al CDM!'
            : 'HAVE HOPE completed data collection on GBV and healing among Honduran women. Huge thanks to participants, RAs, and Centro de Derechos de Mujeres!',
          image: '/images/HH.jpg',
        },
        {
          date: 'June 4, 2025',
          title: isSpanish
            ? 'Preconferencia conjunta SSEA & ISRI'
            : 'SSEA & ISRI Joint Pre-conference',
          description: isSpanish
            ? 'Sydni presentó su tesis de maestría: experiencias adversas en la infancia y discriminación se asociaron fuertemente con síntomas de TEPT.'
            : 'Sydni presented her master’s thesis: adverse childhood experiences and discrimination were strongly linked to PTSD symptoms.',
          image: '/images/SSEA.jpg',
        },
        {
          date: 'May 22, 2025',
          title: isSpanish
            ? 'Proyecto VENCER: 3 olas completadas'
            : 'Proyecto VENCER: 3 Waves Completed',
          description: isSpanish
            ? 'Estudio longitudinal sobre polivictimización, rendimiento académico y salud mental en estudiantes mexicanos: ¡recolección finalizada!'
            : 'Longitudinal study on poly-victimization, academics, and mental health among Mexican students: all waves complete!',
          image: '/images/PV.jpg',
        },
        {
          date: 'May 20, 2025',
          title: isSpanish
            ? 'Talleres de salud mental en Uruapan'
            : 'Mental Health Workshops in Uruapan',
          description: isSpanish
            ? 'La Dra. Medrano y el equipo impartieron 4 talleres para adolescentes sobre bienestar, señales de angustia y recursos comunitarios.'
            : 'Dr. Medrano and team led 4 youth workshops on well-being, signs of distress, and community resources.',
          image: '/images/MHW.png',
        },
        {
          date: 'May 18, 2025',
          title: isSpanish
            ? 'Entrevista en Radio Oro Morelia'
            : 'Radio Oro Morelia Interview',
          description: isSpanish
            ? 'Compartimos la misión del CREAR Lab y nuestros proyectos comunitarios en México.'
            : 'We shared CREAR Lab’s mission and community projects in Mexico.',
          image: '/images/Radio Oro Morelia.jpg',
        },
        {
          date: 'May 1, 2025',
          title: isSpanish ? 'Presentaciones en SRCD 2025' : 'Presentations at SRCD 2025',
          description: isSpanish
            ? '¡Felicitaciones a Angela, Courtney y Sydni! Sus trabajos destacaron factores protectores y el rol de machismo/caballerismo en salud mental juvenil.'
            : 'Congrats to Angela, Courtney, and Sydni! Their work highlighted protective factors and the role of machismo/caballerismo in youth mental health.',
          image: '/images/SRDC2025.jpg',
        },
        {
          date: 'April 30, 2025',
          title: isSpanish
            ? 'HAVE HOPE: Capacitación y logística'
            : 'HAVE HOPE: Training & Logistics',
          description: isSpanish
            ? 'Se finalizó la capacitación y la logística del estudio con nuestro socio CDM en Honduras.'
            : 'Training and logistics for HAVE HOPE were completed with our partner CDM in Honduras.',
          image: '/images/HAVE HOPE Training.jpeg',
        },
        {
          date: 'April 23, 2025',
          title: isSpanish
            ? 'Hot Metal Bridge: Presentación de Yadira'
            : 'Hot Metal Bridge: Yadira’s Talk',
          description: isSpanish
            ? 'Yadira presentó “Religiosidad y creencias populares de enfermedad mental” y vínculos con uso de servicios.'
            : 'Yadira presented “Religiosity and Folk Illness Beliefs” and links to service use.',
          image: '/images/Hot Metal Bridge Presentation.jpg',
        },
        {
          date: 'April 15, 2025',
          title: isSpanish
            ? 'Beca Alfredo y Luz Maria Gutierrez'
            : 'Alfredo & Luz Maria Gutierrez Fellowship',
          description: isSpanish
            ? '¡Felicitaciones a Sydni! Primera estudiante del Dpto. de Psicología en Pitt en recibir esta beca.'
            : 'Congrats to Sydni! First recipient in Pitt’s Psychology Department.',
          image: '/images/Alfredo.png',
        },
      ],
    },

    // ===================== 2024 =====================
    {
      year: 2024,
      entries: [
        {
          date: 'December 2024',
          title: isSpanish
            ? 'Celebración de fin de año del laboratorio'
            : 'End-of-Year Lab Celebration',
          description: isSpanish
            ? 'Cerramos 2024 celebrando logros, colaboraciones y el crecimiento del equipo.'
            : 'We wrapped 2024 celebrating achievements, collaborations, and team growth.',
          image: '/images/DEC2024.jpg',
        },
        {
          date: 'October 2024',
          title: isSpanish
            ? 'Conferencia de Psicología de la Salud'
            : 'Health Psychology Conference',
          description: isSpanish
            ? 'El equipo presentó hallazgos sobre estrés comunitario y salud mental adolescente.'
            : 'The team presented findings on community stress and adolescent mental health.',
          image: '/images/HPC.jpg',
        },
        {
          date: 'September 2024',
          title: isSpanish
            ? 'Lanzamiento de STAR*PR'
            : 'STAR*PR Launch',
          description: isSpanish
            ? 'Iniciamos STAR*PR para estudiar trauma, adversidad y resiliencia en estudiantes universitarios puertorriqueños.'
            : 'We launched STAR*PR to study trauma, adversity, and resilience among Puerto Rican college students.',
          image: '/images/STARPR(1).png',
        },
      ],
    },

    // ===================== 2023 (aproximado: hitos principales) =====================
    {
      year: 2023,
      entries: [
        {
          date: 'Fall 2023',
          title: isSpanish
            ? 'Lanzamiento del CREAR Lab'
            : 'CREAR Lab Launch',
          description: isSpanish
            ? 'Establecimos la misión del laboratorio y formalizamos alianzas comunitarias iniciales en México y Puerto Rico.'
            : 'We launched the lab and formalized initial community partnerships in Mexico and Puerto Rico.',
          image: '/images/CREAR Lab.png', // opcional
        },
        {
          date: 'Fall 2023',
          title: isSpanish
            ? 'Fortaleza Mexicana: Preparación de campo'
            : 'Fortaleza Mexicana: Field Preparation',
          description: isSpanish
            ? 'Diseño de instrumentos, logística de entrevistas y coordinación con escuelas y familias rurales.'
            : 'Instrument design, interview logistics, and coordination with rural schools and families.',
        },
        {
          date: 'Fall 2023',
          title: isSpanish
            ? 'MAPI: Plan de muestreo y bio-marcadores'
            : 'MAPI: Sampling & Biomarkers Plan',
          description: isSpanish
            ? 'Definimos protocolos de encuestas y recolección de suero para citoquinas proinflamatorias en adolescentes.'
            : 'Defined survey protocols and serum collection for pro-inflammatory cytokines in adolescents.',
        },
        {
          date: 'Fall 2023',
          title: isSpanish
            ? 'VENCER: Diseño longitudinal (3 olas)'
            : 'VENCER: Longitudinal Design (3 Waves)',
          description: isSpanish
            ? 'Planificación longitudinal de polivictimización, rendimiento académico y salud mental en estudiantes.'
            : 'Longitudinal planning for poly-victimization, academic performance, and mental health in students.',
        },
      ],
    },
  ];

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

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-3">
        {isSpanish ? 'Mantente al Día con CREAR' : 'Keeping Up with CREAR'}
      </h1>
      <p className="text-center text-gray-600 mb-12">
        {isSpanish
          ? 'Archivo completo de hitos del laboratorio (2023–2025)'
          : 'Full archive of lab milestones (2023–2025)'}
      </p>

      {/* Year Groups */}
      <div className="space-y-16">
        {data.map((group) => (
          <section key={group.year}>
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">
              {group.year}
            </h2>

            <div className="space-y-12">
              {group.entries.map((u, i) => (
                <article
                  key={`${group.year}-${i}`}
                  className="border-l-4 border-blue-500 pl-4 bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
                >
                  <p className="text-gray-500 text-sm mb-2">{u.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{u.title}</h3>

                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="md:w-2/3">
                      <p>{u.description}</p>
                    </div>

                    {u.image && (
                      <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                        <Image
                          src={u.image}
                          alt={u.title}
                          width={400}
                          height={250}
                          className="object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}