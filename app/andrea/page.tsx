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

      {/* ===== Awards & Recognition ===== */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">
          {isSpanish ? 'Premios y Reconocimientos' : 'Awards & Fellowships'}
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
          <li>Ford Foundation Predoctoral Fellow</li>
        </ul>
      </section>

      {/* ===== Selected Publications ===== */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Selected Publications
        </h2>

        <div className="space-y-6 text-gray-700">
          <p>
            Davila, S. A., Adame Montelongo, E. S., Labrousse, D., & Medrano, A.
            S. (2025). “Uno no puede solucionarlo por sí mismo”: Sociocultural
            influences on mental health and help-seeking attitudes among rural
            Mexican adults. <i>Journal of Cross-Cultural Psychology.</i>{' '}
            <a
              href="https://doi.org/10.1177/00220221251387702"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1177/00220221251387702{' '}
              <span className="ml-1">🔗</span>
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
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1177/08862605251375422{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>

          <p>
            Ganu, D., Starks, B., Davila, S. A., & Medrano, A. S. (in press).
            Campus climate and the mental health of college student caregivers:
            The mediating role of group belonging.{' '}
            <i>Journal of Higher Education.</i>
          </p>

          <p>
            Cross, F. L., Hoffman, A. J., Medrano, A. S., Medina, M. A.,
            Esqueda, A. P., & Rivas-Drake, D. (in press). Fostering futures:
            Academic socialization and perceived educational utility among
            Latinx parent-adolescent dyads. <i>Journal of Latinx Psychology.</i>{' '}
            <a
              href="https://doi.org/10.1037/lat0000289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1037/lat0000289{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>

          <p>
            Medrano, A. S., Ortega, R., Cordova, D., & Gutierrez, L. (in press).
            Employing an empowerment approach with Latinx youth engaged in
            health risk behaviors. In R. Ceballo & D. Rivas-Drake (Eds.),{' '}
            <i>
              Growing up Latinx in the land of liberty: Drawing on community and
              culture to face contextual challenges.
            </i>{' '}
            Oxford University Press.
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
            Medrano, A. S., & Ceballo, R. (2025). Neighborhood violence,
            parent-child cohesion, and psychological outcomes in Latino
            adolescents: A longitudinal moderation analysis.{' '}
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
            Sabina, C., Mariscal, S. E., Weber, M., Medrano, A. S., Flores, Y.,
            Agorde, E., Elliot, J. M., Gonzalez, V. V., & Restrepo-Ruiz, M.
            (2025). Factors enhancing resilience among youth exposed to
            macro-level violence in Spanish-speaking countries in Latin America.{' '}
            <i>Trauma, Violence, & Abuse, 26(2), 265–282.</i>{' '}
            <a
              href="https://doi.org/10.1177/15248/1358204283481032049130795375"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1177/15248/1358204283481032049130795375{' '}
              <span className="ml-1">🔗</span>
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
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1037/rmh0000291{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>

          <p>
            Garcia, Y., Medrano, A. S., & Woods, V. (2024). Perceived stigma,
            mental health, and campus support among Latina/o and White college
            students. <i>Journal of American College Health.</i>{' '}
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
            Kia-Keating, M., Santacrose, D., Adams, J., Harms, M., Taghavi, I.,
            Liu, S., & Mora, A. (2024). Equitable prevention science and
            participatory co-design of the HEROES strength-based programs.{' '}
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
            violence in rural Mexico. <i>Families in Society, 1–18.</i>{' '}
            <a
              href="https://doi.org/10.1177/10443894231222942"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1177/10443894231222942{' '}
              <span className="ml-1">🔗</span>
            </a>{' '}
            <span className="italic text-green-700 font-semibold">
              • Awarded 2024 Best Quantitative Paper
            </span>
          </p>

          <p>
            Krings, A., Mora, A. S., Bechara, S., Sánchez, C., Gutiérrez, L. M.,
            Hawkins, J., & Austic, E. (2024). How early social work faculty
            experienced support in their doctoral programs.{' '}
            <i>Journal of Social Work Education, 60(2), 206–224.</i>{' '}
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
            Mora, A. S., LoDuca, K. M., & Ceballo, R. (2023). Adolescents in the
            community: Extracurricular activities and sexual harassment.{' '}
            <i>Journal of Youth and Adolescence, 52, 1788–1798.</i>{' '}
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
            Mora, A. S., Muñoz-Velázquez, J., Alers-Rojas, F., Ceballo, R., &
            Cranford, J. (2023). Understanding Latino adolescents’ experiences
            with discrimination: An intersectional approach.{' '}
            <i>Journal of Latinx Psychology, 11(4), 306–321.</i>{' '}
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
            Mora, A. S., Greer, C. D., Hunter, J., & Gutierrez, L. (2022).
            Social work faculty attitudes towards diversity and oppression
            content in the MSW curricula. <i>Social Work Education, 1–18.</i>{' '}
            <a
              href="https://doi.org/10.1080/02615479.2022.213023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              https://doi.org/10.1080/02615479.2022.213023{' '}
              <span className="ml-1">🔗</span>
            </a>
          </p>

          <p>
            Ceballo, R., Alers-Rojas, F., Mora, A. S., & Cranford, J. A. (2022).
            Exposure to community violence: Toward a more expansive definition
            and approach to research.{' '}
            <i>Child Development Perspectives, 16(2), 96–102.</i>{' '}
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
            Mora, A. S., Ceballo, R., & Cranford, J. (2022). Latino/a
            adolescents facing neighborhood dangers: An examination of community
            violence and gender-based harassment.{' '}
            <i>American Journal of Community Psychology, 69(1–2), 18–32.</i>{' '}
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
