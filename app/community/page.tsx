'use client';
import { useState } from 'react';

export default function CommunityPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="px-6 py-20 max-w-7xl mx-auto text-gray-800">
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
      <h1 className="text-4xl font-bold text-center mb-12">
        {isSpanish ? 'Nuestra Comunidad' : 'Our Community'}
      </h1>

      {/* ===== INTRO ===== */}
      <section className="mb-16 text-lg leading-relaxed text-gray-700">
        <p className="mb-4">
          {isSpanish
            ? 'El CREAR Lab trabaja en colaboración con comunidades locales e internacionales para promover la equidad, el bienestar y el empoderamiento. Nuestro compromiso va más allá de la academia: creemos en la acción informada por datos, la justicia social y la corresponsabilidad con las personas y lugares que inspiran nuestra investigación.'
            : 'The CREAR Lab partners with local and international communities to promote equity, well-being, and empowerment. Our commitment goes beyond academia—we believe in data-informed action, social justice, and shared responsibility with the people and places that inspire our work.'}
        </p>
        <p>
          {isSpanish
            ? 'Nos involucramos activamente en talleres comunitarios, ferias de salud, investigación participativa y difusión bilingüe para garantizar que nuestras iniciativas beneficien directamente a quienes nos rodean.'
            : 'We are actively involved in community workshops, health fairs, participatory research, and bilingual outreach to ensure that our efforts directly benefit those around us.'}
        </p>
      </section>

      {/* ===== IMAGE ===== */}
      <div className="flex justify-center mb-16">
        <img
          src="/images/food_bank.jpg"
          alt="CREAR Lab Community Engagement"
          className="rounded-xl shadow-md max-w-xl w-full h-auto"
        />
      </div>

      {/* ===== PARTNERSHIPS SECTION ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isSpanish
            ? 'Colaboraciones y Proyectos'
            : 'Collaborations & Projects'}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-6 text-gray-700 text-sm">
          <li className="bg-white border p-5 rounded-xl shadow-sm">
            <strong>Centro de Derechos de Mujeres (Honduras)</strong>
            <br />
            {isSpanish
              ? 'Este proyecto colabora con organizaciones locales para brindar talleres psicoeducativos sobre empoderamiento, salud mental y justicia reproductiva. Ha ayudado a mujeres jóvenes a identificar redes de apoyo y crear espacios comunitarios seguros para hablar de trauma y esperanza.'
              : 'This project partners with local organizations to deliver psychoeducational workshops on empowerment, mental health, and reproductive justice. It has helped young women identify support networks and co-create community spaces to talk about trauma and hope.'}
          </li>

          <li className="bg-white border p-5 rounded-xl shadow-sm">
            <strong>Universidad Michoacana (México)</strong>
            <br />
            {isSpanish
              ? 'En Uruapan, entrenamos a estudiantes de Psicología en metodologías cualitativas y cuantitativas. Esto fortalece la capacidad local para abordar la salud mental en comunidades afectadas por la violencia, y ha creado caminos hacia la investigación aplicada en poblaciones marginadas.'
              : 'In Uruapan, we train psychology students in qualitative and quantitative methods. This strengthens local capacity to address mental health in violence-exposed communities and opens doors for applied research with marginalized populations.'}
          </li>

          
        </ul>
      </section>
    </div>
  );
}
