'use client';
import { useState } from 'react';

export default function HomePage() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto text-gray-800">
      {/* ===== Language Toggle ===== */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setIsSpanish(!isSpanish)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          {isSpanish ? 'English' : 'Español'}
        </button>
      </div>

      {/* ===== TITLE ===== */}
      <h1 className="text-5xl font-bold text-center mb-12">CREAR Lab</h1>

      {/* ===== ABOUT SECTION ===== */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div className="flex justify-center">
          <img
            src="/images/CREAR Lab.png"
            alt="CREAR Lab Logo"
            className="w-80 h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {isSpanish ? 'Sobre Nosotros' : 'About Us'}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isSpanish
              ? "Bienvenidos al Laboratorio CREAR, donde damos vida a nuestro nombre: Community Research Exploring Adolescent Resilience. 'Crear', que significa 'crear' en español, simboliza nuestro compromiso con fomentar el bienestar psicológico positivo entre jóvenes y familias expuestas a la violencia. A través de una investigación rigurosa y una participación compasiva, buscamos empoderar a las juventudes, creando caminos hacia la resiliencia y futuros más brillantes."
              : "Welcome to CREAR Lab, where we embody our name in action: Community Research Exploring Adolescent Resilience. 'Crear,' meaning 'to create' in Spanish, symbolizes our commitment to fostering positive psychological well-being among youth and families exposed to violence. Through rigorous research and compassionate outreach, we strive to empower young lives, creating pathways to resilience and brighter futures."}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {isSpanish
              ? 'Nuestra investigación se orienta a identificar factores que contribuyen al bienestar y la resiliencia óptimos frente a riesgos contextuales, con un enfoque particular en entornos comunitarios. Estudiamos influencias interpersonales y socioculturales sobre el bienestar académico y psicológico en poblaciones diversas. Nuestro laboratorio se interesa especialmente en adolescentes Latinx en los EE.UU. y América Latina, así como en jóvenes de color de manera más amplia.'
              : 'Our research is oriented toward identifying factors that contribute to optimal well-being and resilience in the face of contextual risk factors, with a particular focus on community settings. We study interpersonal and sociocultural influences on academic and psychological well-being across diverse populations. Our lab has a special focus on Latinx adolescents in the U.S. and Latin America, as well as youth of color more broadly.'}
          </p>
        </div>
      </section>

      {/* ===== DIRECTOR SECTION ===== */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Andrea S. Medrano, Ph.D.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {isSpanish
              ? '¡Bienvenidos! Soy la Dra. Medrano, psicóloga del desarrollo comprometida con examinar cómo jóvenes y mujeres expuestas a la violencia dan sentido, sobreviven y resisten al trauma en su vida diaria. Dirijo el Laboratorio CREAR y soy profesora asistente en la Universidad de Pittsburgh. Mi investigación se centra en la polivictimización, la violencia de género y las desigualdades estructurales, con énfasis en la resiliencia, el familismo y la persistencia educativa.'
              : "Welcome! I'm Dr. Medrano, a developmental psychologist committed to examining how youth and women exposed to violence make sense of, survive, and resist trauma in their daily lives. I serve as Director of the CREAR Lab and Assistant Professor at the University of Pittsburgh. My research focuses on poly-victimization, gender-based violence, and structural inequalities, with an emphasis on resilience processes."}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isSpanish
              ? 'Dirijo estudios internacionales en Honduras, México, Puerto Rico, Nicaragua y EE.UU., utilizando métodos mixtos para garantizar que las voces y los datos informen nuestro trabajo. A través del CREAR Lab, apoyo a un equipo diverso de estudiantes subgraduados y graduados, principalmente mujeres y académicos de color, apasionados por la investigación impulsada por la equidad.'
              : 'I lead international, community-engaged studies across Honduras, Mexico, Puerto Rico, Nicaragua, and the U.S., using mixed methods to ensure that voices and data inform our work. Through the CREAR Lab, I mentor a powerhouse team of undergraduate and graduate students—primarily women and scholars of color—who share a passion for equity-driven research.'}
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/Andrea-2.jpg"
            alt="Dr. Andrea Medrano"
            className="rounded-xl shadow-lg w-96 h-auto"
          />
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div className="flex justify-center">
          <img
            src="/images/values.jpg"
            alt="CREAR Lab Values Logo"
            className="rounded-xl w-96 h-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {isSpanish ? 'Nuestros Valores' : 'Our Values'}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isSpanish
              ? 'El laboratorio CREAR está compuesto por investigadores apasionados comprometidos con promover el bienestar de jóvenes y familias de color a través de un enfoque basado en fortalezas. Valoramos la diversidad de experiencias vividas y trabajamos activamente para crear un espacio inclusivo, accesible y colaborativo.'
              : 'The CREAR Lab is made up of passionate researchers committed to promoting the well-being of youth and families of color through a strengths-based approach. We value the diversity of lived experiences and work actively to make the lab an inclusive, accessible, and collaborative space.'}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {isSpanish
              ? 'Fomentamos el apoyo mutuo, la comunicación abierta y el respeto. Nuestro compromiso es formar investigadores éticos y rigurosos que contribuyan al conocimiento transformador y al crecimiento profesional a través de la investigación y la mentoría.'
              : 'We foster mutual support, open communication, and respect. Our commitment is to train ethical, rigorous researchers who contribute to transformative knowledge and professional growth through research and mentorship.'}
          </p>
        </div>
      </section>

      {/* ===== FOOTER NAVIGATION ===== */}
      <footer className="border-t pt-10 mt-12 text-center text-gray-700">
        <p className="text-sm mb-4">
          {isSpanish
            ? 'Explora más sobre nuestro trabajo y equipo.'
            : 'Explore more about our work and team.'}
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/research"
            className="text-blue-700 font-medium hover:underline"
          >
            {isSpanish ? 'Investigación' : 'Research'}
          </a>
          <a
            href="/people"
            className="text-blue-700 font-medium hover:underline"
          >
            {isSpanish ? 'Equipo' : 'People'}
          </a>
          <a
            href="/community"
            className="text-blue-700 font-medium hover:underline"
          >
            {isSpanish ? 'Comunidad' : 'Community'}
          </a>
          <a
            href="/contact"
            className="text-blue-700 font-medium hover:underline"
          >
            {isSpanish ? 'Contacto' : 'Contact'}
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} CREAR Lab, University of Pittsburgh
        </p>
      </footer>
    </div>
  );
}
