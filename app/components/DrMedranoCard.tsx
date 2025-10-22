'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function DrMedranoCard() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center gap-8 bg-white border border-gray-100 shadow-lg rounded-3xl p-8 max-w-5xl mx-auto mt-16">
      {/* Profile Photo */}
      <div className="flex-shrink-0 rounded-full overflow-hidden h-56 w-56 shadow-md">
        <Image
          src="/images/andrea-medrano.jpeg"
          alt="Andrea S. Medrano"
          width={224}
          height={224}
          className="object-cover object-top h-full w-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-gray-800">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Andrea S. Medrano, Ph.D.
          </h2>
          <button
            onClick={() => setIsSpanish(!isSpanish)}
            className="bg-black text-white text-sm px-3 py-1 rounded-md hover:bg-gray-800 transition"
          >
            {isSpanish ? 'English' : 'Español'}
          </button>
        </div>

        <p className="text-sm text-gray-600 font-medium mb-1">
          {isSpanish
            ? 'Profesora Asistente, Departamento de Psicología, Universidad de Pittsburgh'
            : 'Assistant Professor, Department of Psychology, University of Pittsburgh'}
        </p>
        <p className="text-sm text-gray-600 italic mb-4">
          Director / Directora del Laboratorio CREAR
        </p>

        <p className="text-gray-700 leading-relaxed text-[15px]">
          {isSpanish ? (
            <>
              La Dra. Medrano es psicóloga del desarrollo comprometida con
              examinar cómo los jóvenes y las mujeres expuestos a la violencia
              comprenden, sobreviven y resisten el trauma en su vida diaria. Su
              investigación explora cómo la violencia y la adversidad
              estructural afectan los resultados psicológicos y educativos a lo
              largo de la vida, con un enfoque en la resiliencia, el familismo,
              la esperanza y la religiosidad. Dirige estudios internacionales y
              comunitarios en Honduras, México, Puerto Rico, Nicaragua y los
              Estados Unidos, utilizando métodos mixtos para garantizar que las
              voces y los datos informen el trabajo del laboratorio.
            </>
          ) : (
            <>
              Dr. Medrano is a developmental psychologist dedicated to
              understanding how youth and women exposed to violence make sense
              of, survive, and resist trauma in their daily lives. Her research
              examines how violence and structural adversity shape academic and
              psychological outcomes across the lifespan, emphasizing resilience
              factors such as familismo, hope, and religiosity. She leads
              international, community-engaged studies across Honduras, Mexico,
              Puerto Rico, Nicaragua, and the U.S., using mixed methods to
              ensure that voices and data inform the lab’s work.
            </>
          )}
        </p>

        <a
          href="https://www.andreacrearlab.com/andrea-s-medrano-phd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-blue-600 hover:underline font-medium"
        >
          {isSpanish ? 'Ver perfil completo 🔗' : 'View full profile 🔗'}
        </a>
      </div>
    </section>
  );
}
