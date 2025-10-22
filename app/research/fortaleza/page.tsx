'use client';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function FortalezaMexicanaPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <>
      <Head>
        <title>Fortaleza Mexicana | CREAR Lab</title>
        <meta
          name="description"
          content={
            isSpanish
              ? 'Fortaleza Mexicana: Un estudio sobre resiliencia, violencia y salud mental en familias rurales mexicanas.'
              : 'Fortaleza Mexicana: A study on resilience, violence, and mental health among rural Mexican families.'
          }
        />
        <meta
          name="keywords"
          content="Fortaleza Mexicana, CREAR Lab, rural Mexico, resilience, violence, family, adolescent, psychology"
        />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        {/* Language Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsSpanish(!isSpanish)}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            {isSpanish ? 'English' : 'Español'}
          </button>
        </div>

        {/* Logo (linked) */}
        <div className="flex justify-center mb-12">
          <Link href="/research/fortaleza" passHref>
            <div className="h-40 w-40 flex items-center justify-center rounded-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#C9E9FF] via-[#EAF8D9] to-[#F9E0E3] shadow cursor-pointer hover:scale-105 transition">
              <Image
                src="/images/FM.png"
                alt="Fortaleza Mexicana Logo"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          {isSpanish
            ? 'Fortaleza Mexicana: Familias Enfrentando Violencia en Comunidades Rurales'
            : 'Fortaleza Mexicana: Families Confronting Violence in Rural Mexico'}
        </h1>

        {/* Description */}
        <div className="space-y-6 text-lg leading-relaxed mb-16">
          {isSpanish ? (
            <>
              <p>
                México es el segundo país más poblado de América Latina, con más
                de 12.7 millones de personas rurales e indígenas (World
                Population Review, 2019). Sin embargo, existe una escasez de
                investigación sobre las familias rurales mexicanas.
              </p>
              <p>
                Este estudio de métodos mixtos,{' '}
                <strong>Fortaleza Mexicana</strong>, explora las experiencias de
                las familias mexicanas con la violencia. Se centró en 200 díadas
                de padres y adolescentes en una comunidad rural de bajos
                recursos en México, utilizando 200 encuestas y 32 entrevistas
                semiestructuradas.
              </p>
            </>
          ) : (
            <>
              <p>
                Mexico is the second most populated country in Latin America,
                with over 12.7 million rural and Indigenous people (World
                Population Review, 2019). However, little research examines the
                experiences of Mexican rural families.
              </p>
              <p>
                This mixed-methods study, <strong>Fortaleza Mexicana</strong>,
                explored family experiences with violence in a low-income rural
                Mexican community. It included 200 parent–adolescent dyads who
                completed surveys and 32 semi-structured interviews.
              </p>
            </>
          )}
        </div>

        {/* Goals */}
        <section className="space-y-4 text-lg leading-relaxed mb-20">
          <h2 className="text-2xl font-semibold mb-4">
            {isSpanish ? 'Objetivos del Estudio' : 'Study Goals'}
          </h2>

          {isSpanish ? (
            <>
              <p>
                • Explorar las creencias, aspiraciones y expectativas educativas
                de los padres mexicanos para sus adolescentes.
              </p>
              <p>
                • Evaluar el bienestar mental de padres y adolescentes (estrés
                percibido, depresión, síntomas de TEPT).
              </p>
              <p>
                • Analizar experiencias con violencia, estrategias de
                afrontamiento y comunicación familiar.
              </p>
              <p>
                • Identificar barreras y facilitadores para el uso de servicios
                de salud mental.
              </p>
            </>
          ) : (
            <>
              <p>
                • Explore Mexican parents’ educational beliefs, aspirations, and
                expectations for their adolescents.
              </p>
              <p>
                • Assess mental health outcomes for parents and teens (perceived
                stress, depression, PTSD symptoms).
              </p>
              <p>
                • Examine family experiences with violence exposure, coping, and
                communication.
              </p>
              <p>
                • Identify barriers and facilitators to mental health service
                use.
              </p>
            </>
          )}
        </section>

        {/* Publications */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-8">
            {isSpanish
              ? 'Publicaciones de Fortaleza Mexicana'
              : 'Fortaleza Mexicana Publications'}
          </h2>

          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              Davila, S. A., Adame Montelongo, E. S., Labrousse, D., & Medrano,
              A. S. (2025). “Uno no puede solucionarlo por sí mismo”:
              Sociocultural influences on mental health and help-seeking
              attitudes among rural Mexican adults.{' '}
              <i>Journal of Cross-Cultural Psychology.</i>{' '}
              <a
                href="https://doi.org/10.1177/00220221251387702"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DOI: 10.1177/00220221251387702 🔗
              </a>
            </p>

            <p>
              Leonard, A. F., Estrada, Y., Jakubowski, K., & Medrano, A. S.
              (2025). Two fronts of trauma: The differential effects of intimate
              partner violence and community violence on PTSD in rural Mexico.{' '}
              <i>Journal of Interpersonal Violence.</i>{' '}
              <a
                href="https://doi.org/10.1177/08862605251375422"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DOI: 10.1177/08862605251375422 🔗
              </a>
            </p>

            <p>
              Davila, S. A., Martinez, A., & Medrano, A. S. (2025). Navigating
              familial and economic stressors: Examining resilience and cohesion
              as protective factors for rural Mexican adolescents.{' '}
              <i>Cultural Diversity & Ethnic Minority Psychology.</i>{' '}
              <a
                href="https://doi.org/10.1037/cdp0000754"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DOI: 10.1037/cdp0000754 🔗
              </a>
            </p>

            <p>
              Medrano, A. S., Davila, S. A., Labrousse, D., Adame Montelongo, E.
              S., & Williams, E.-D. G. (2025). Disentangling machismo and
              caballerismo: Mental health help-seeking in rural Mexico.{' '}
              <i>Journal of Rural Mental Health, 49(3), 267–277.</i>{' '}
              <a
                href="https://doi.org/10.1037/rmh0000291"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DOI: 10.1037/rmh0000291 🔗
              </a>
            </p>

            <p>
              Mora, A. S., Gutiérrez, L. M., & Ceballo, R. (2024). The role of
              parent–adolescent communication among youth exposed to
              neighborhood violence in rural Mexico.{' '}
              <i>Families in Society,</i> 1–18.{' '}
              <a
                href="https://doi.org/10.1177/10443894231222942"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                DOI: 10.1177/10443894231222942 🔗
              </a>{' '}
              <span className="italic text-green-700 font-semibold">
                • Awarded 2024 Best Quantitative Paper
              </span>
            </p>
          </div>
        </section>

        {/* PI Section */}
        <section className="bg-gray-50 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            {isSpanish ? 'Equipo de Investigación' : 'Research Team'}
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-center">
            {isSpanish ? (
              <p>
                <strong>Investigadora Principal (PI):</strong> Dra. Andrea
                Medrano, Universidad de Pittsburgh.
              </p>
            ) : (
              <p>
                <strong>Principal Investigator (PI):</strong> Dr. Andrea
                Medrano, University of Pittsburgh.
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}