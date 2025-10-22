'use client';
import { useState } from 'react';

export default function AndreaPage() {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div className="px-6 py-20 max-w-6xl mx-auto text-gray-800">
      {/* ===== Language Toggle ===== */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setIsSpanish(!isSpanish)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          {isSpanish ? 'English' : 'Español'}
        </button>
      </div>

      {/* ===== Header ===== */}
      <h1 className="text-4xl font-bold text-center mb-10">
        {isSpanish ? 'Dra. Andrea S. Medrano' : 'Dr. Andrea S. Medrano'}
      </h1>

      {/* ===== Photo + Bio ===== */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div className="flex justify-center">
          <img
            src="/images/Andrea-2.jpg"
            alt="Dr. Andrea Medrano"
            className="rounded-2xl shadow-lg w-80 h-auto sm:w-96"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {isSpanish ? 'Directora del CREAR Lab' : 'Director of CREAR Lab'}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {isSpanish
              ? 'La Dra. Andrea S. Medrano es Profesora Asistente de Psicología del Desarrollo en la Universidad de Pittsburgh, con afiliación en Psicología Clínica. Su investigación se centra en comprender cómo jóvenes y mujeres expuestos a la violencia interpretan, sobreviven y resisten al trauma. Sus áreas de interés incluyen la polivictimización, el duelo complicado, la violencia de género y las desigualdades estructurales. Aplica métodos mixtos y enfoques basados en fortalezas como el familismo, la esperanza, la religiosidad y la persistencia educativa.'
              : 'Dr. Andrea S. Medrano is an Assistant Professor of Developmental Psychology at the University of Pittsburgh, with an affiliation in Clinical Psychology. Her research focuses on understanding how youth and women exposed to violence make sense of, survive, and resist trauma. Her areas of interest include polyvictimization, complicated grief, gender-based violence, and structural inequality. She applies mixed methods and strengths-based approaches including familismo, hope, religiosity, and educational persistence.'}
          </p>
        </div>
      </section>

      {/* ===== Affiliations ===== */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          {isSpanish ? 'Afiliaciones y Liderazgo' : 'Leadership & Affiliations'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
          <li>
            Director, CREAR Lab (Community Research Exploring Adolescent
            Resilience)
          </li>
          <li>Faculty Affiliate, Clinical Psychology Program at Pitt</li>
          <li>PI, Fortaleza Mexicana, Proyecto VENCER, MAPI, and STAR*PR</li>
          <li>
            Affiliated Faculty in Global Study Center and Center for Latin
            American Studies
          </li>
        </ul>
      </section>

      {/* ===== Presentations ===== */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          {isSpanish ? 'Conferencias Seleccionadas' : 'Selected Presentations'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
          <li>
            Medrano, A. S. (2023).{' '}
            <i>
              Resisting Trauma in the Borderlands: Lessons from Latina
              Adolescents
            </i>
            . Society for Research on Adolescence (SRA).
          </li>
          <li>
            Medrano, A. S. (2022).{' '}
            <i>
              Healing Amid Structural Violence: A Community-Engaged Approach
            </i>
            . American Psychological Association (APA) Annual Convention.
          </li>
          <li>
            Medrano, A. S. (2021).{' '}
            <i>Mixed Methods in the Study of Latinx Youth Resilience</i>.
            Society for Prevention Research.
          </li>
        </ul>
      </section>

      {/* ===== Awards & Recognition ===== */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          {isSpanish ? 'Premios y Reconocimientos' : 'Awards & Fellowships'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
          <li>Ford Foundation Predoctoral Fellow</li>
          <li>NIH T32 Training Fellow (University of Michigan)</li>
          <li>APA Minority Fellowship Program Finalist</li>
        </ul>
      </section>

      {/* ===== Selected Publications ===== */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Selected Publications
        </h2>
        <div className="space-y-6 text-gray-700">
          <p>
            Medrano, A. S., & Ceballo, R. (2025). Structural and symbolic
            violence in Mexican youth’s help-seeking narratives.{' '}
            <i>Psychology of Violence.</i>{' '}
            <a
              href="https://doi.org/10.1037/vio0000604"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1037/vio0000604{' '}
              <span className="ml-1">🔗</span>
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
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1037/cdp0000754{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Sabina, C., Medrano, A. S., Hightower, J., & De la Rosa, M. (2025).
            Culturally adapted interventions with Latino families experiencing
            IPV: A systematic review. <i>Trauma, Violence, & Abuse.</i>{' '}
            <a
              href="https://doi.org/10.1177/152481358204283481032049130795375"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1177/152481358204283481032049130795375{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Medrano, A. S., Davila, S. A., Labrousse, D., Adame Montelongo, E.
            S., & Williams, E.-D. G. (2025). Disentangling machismo and
            caballerismo: Mental health help-seeking in rural Mexico.{' '}
            <i>Journal of Rural Mental Health.</i>{' '}
            <a
              href="https://doi.org/10.1037/rmh0000291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1037/rmh0000291{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Garcia, C., Medrano, A. S., & Woods, K. (2024). Racism, mental
            health, and sense of belonging in Latino college students: A
            longitudinal study. <i>Journal of American College Health.</i>{' '}
            <a
              href="https://doi.org/10.1080/07448481.2024.2428408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1080/07448481.2024.2428408{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Kia-Keating, M., Medrano, A. S., & Cummings, J. (2024). Culturally
            grounded prevention science: Intervening on trauma and violence with
            Latinx adolescents.{' '}
            <i>Journal of Prevention and Health Promotion.</i>{' '}
            <a
              href="https://doi.org/10.1177/26320770241246672"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1177/26320770241246672{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Mora, A. S., Gutiérrez, L. M., & Ceballo, R. (2024). The role of
            parent–adolescent communication among youth exposed to neighborhood
            violence in rural Mexico. <i>Families in Society,</i> 1–18.{` `}
            <a
              href="https://doi.org/10.1177/10443894231222942"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1177/10443894231222942{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Krings, A., Mora, A. S., Bess, K. D., & Gutierrez, L. M. (in press).
            From structural oppression to structural change: A critical
            participatory action research approach to social work education.{' '}
            <i>Journal of Social Work Education.</i>{' '}
            <a
              href="https://doi.org/10.1080/10437797.2023.2279789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1080/10437797.2023.2279789{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Mora, A. S., LoDuca, A., & Ceballo, R. (2023). Mapping the
            neighborhood: Youth exposure to violence, community support, and
            mental health in rural Mexico.{' '}
            <i>Journal of Youth and Adolescence.</i>{' '}
            <a
              href="https://doi.org/10.1007/s10964-023-01812-8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1007/s10964-023-01812-8{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Mora, A. S., Medina, L., Gutierrez, L., & Ceballo, R. (2023).
            Examining familismo and adolescent violence exposure across three
            generations of Mexican women. <i>Journal of Latinx Psychology.</i>{' '}
            <a
              href="https://doi.org/10.1037/lat0000234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1037/lat0000234{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Mora, A. S., Perez, M., Gutierrez, L., & Hernandez, M. (2022). The
            importance of trauma-informed training: A mixed methods evaluation
            with MSW students. <i>Social Work Education.</i>{' '}
            <a
              href="https://doi.org/10.1080/02615479.2022.2130233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1080/02615479.2022.2130233{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Ceballo, R., Mora, A. S., & Gutierrez, L. (2022). Toward a
            cultural-developmental approach to trauma.{' '}
            <i>Child Development Perspectives.</i>{' '}
            <a
              href="https://doi.org/10.1111/cdep.12448"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1111/cdep.12448{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Mora, A. S., Ceballo, R., & Cranford, A. (2022). “They didn’t
            believe me”: Structural constraints to help-seeking for sexual
            assault in rural Mexico.{' '}
            <i>American Journal of Community Psychology.</i>{' '}
            <a
              href="https://doi.org/10.1002/ajcp.12556"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1002/ajcp.12556{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Ortega, A., Olawale, M., & Mora, A. S. (2022). Community-based
            groups for survivors of sexual violence: A qualitative analysis of
            needs and opportunities in rural Mexico.{' '}
            <i>Social Work with Groups.</i>{' '}
            <a
              href="https://doi.org/10.1080/01609513.2022.2113247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1080/01609513.2022.2113247{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
          <p>
            Gutierrez, L., Mora, A. S., Hernandez, R., & Chavez, E. (2019).
            Mobilizing student voices: A Latinx undergraduate research training
            model. <i>Currents.</i>{' '}
            <a
              href="http://dx.doi.org/10.3998/currents.17387731.0001.105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              http://dx.doi.org/10.3998/currents.17387731.0001.105{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t pt-10 mt-10 text-center text-gray-500 text-sm">
        {isSpanish
          ? '© 2025 Dra. Andrea S. Medrano, Universidad de Pittsburgh'
          : '© 2025 Dr. Andrea S. Medrano, University of Pittsburgh'}
      </footer>
    </div>
  );
}
