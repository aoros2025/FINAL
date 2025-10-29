// CREAR Lab - People Page
// Last updated: October 28, 2025
// Description: Full bilingual team directory for the CREAR Lab at the University of Pittsburgh
// Includes Director, Lab Staff, Graduate Researchers, Grad Collaborators, Post-Baccs, Undergrads,
// International RAs, Current Collaborators, and Former Research Assistants

'use client';
import React, { useState } from 'react';

/* ----------------------------------------------------------
   Types
---------------------------------------------------------- */
type Person = {
  name: string;
  role: string;
  bioEn: string;
  bioEs: string;
  image?: string; // ⬅️ Optional image path
};

/* ----------------------------------------------------------
   Page Component
---------------------------------------------------------- */
export default function PeoplePage() {
  const [isSpanish, setIsSpanish] = useState(false);

  /* --------------------------------------------------------
     Director / Directora del Laboratorio CREAR (Featured)
  -------------------------------------------------------- */
  const drMedrano = {
    name: 'Andrea S. Medrano, Ph.D.',
    titleEn:
      'Assistant Professor, Department of Psychology, University of Pittsburgh',
    titleEs:
      'Profesora Asistente, Departamento de Psicología, Universidad de Pittsburgh',
    role: 'Director / Directora del Laboratorio CREAR',
    bioEn:
      'Dr. Medrano is a developmental psychologist committed to examining how youth and women exposed to violence make sense of, survive, and resist trauma in their daily lives. She is the Director of the CREAR Lab and Assistant Professor in the Developmental Psychology Program at the University of Pittsburgh, with an affiliation in Clinical Psychology. Her research focuses on poly-victimization, gender-based violence, and structural inequalities, emphasizing resilience processes such as familismo, hope, religiosity, and educational persistence. She leads international, community-engaged studies across Honduras, Mexico, Puerto Rico, Nicaragua, and the U.S. using mixed methods to ensure that voices and data inform the lab’s work.',
    bioEs:
      'La Dra. Medrano es psicóloga del desarrollo comprometida con examinar cómo los jóvenes y las mujeres expuestos a la violencia comprenden, sobreviven y resisten el trauma en su vida diaria. Es Directora del CREAR Lab y Profesora Asistente en el programa de Psicología del Desarrollo de la Universidad de Pittsburgh, con afiliación en Psicología Clínica. Su investigación se centra en la polivictimización, la violencia de género y las desigualdades estructurales, enfatizando procesos de resiliencia como el familismo, la esperanza, la religiosidad y la persistencia educativa. Dirige estudios internacionales y comunitarios en Honduras, México, Puerto Rico, Nicaragua y los Estados Unidos, utilizando métodos mixtos para garantizar que las voces y los datos informen el trabajo del laboratorio.',
  };

  /* --------------------------------------------------------
     Lab Staff
  -------------------------------------------------------- */
  const labStaff: Person[] = [
    {
      name: 'Sofia Adame',
      role: 'Project Coordinator',
      image: '/images/Sofia-4.jpg',
      bioEn:
        'Sofia Adame is a recent graduate from the University of Pittsburgh with a B.S. in Psychology and Anthropology, a minor in Gender, Sexuality & Women’s Studies, and a Global Studies certificate. A Mexican immigrant with international research experience, she led Latinx Student Association and Global Brigades outreach. She is committed to policy and education that reduce femicides and gender-based violence across Latin America.',
      bioEs:
        'Sofía Adame es graduada reciente de la Universidad de Pittsburgh con licenciaturas en Psicología y Antropología, una especialización en Estudios de Género, Sexualidad y Mujeres, y un certificado en Estudios Globales. Inmigrante mexicana con experiencia internacional en investigación, lideró la Asociación de Estudiantes Latinx y Global Brigades. Se compromete con políticas y educación que reduzcan los feminicidios y la violencia de género en América Latina.',
    },
    {
      name: 'Amelia F. Leonard',
      role: 'Administrative Research Assistant',
      image: '/images/Amelia.JPG',
      bioEn:
        'Amelia Leonard is a senior at Pitt majoring in Psychology with a minor in Economics. She supports CREAR’s research administration and is active in Women in Economics, Behavioral Economics Club, and Psi Chi. Her goals center on meaningful work that supports underserved communities.',
      bioEs:
        'Amelia Leonard cursa su último año en Pitt con especialización en Psicología y una menor en Economía. Apoya la administración de investigación del CREAR y participa en Women in Economics, Behavioral Economics Club y Psi Chi. Sus metas se centran en realizar trabajo significativo para comunidades desatendidas.',
    },
    {
      name: 'Ashley Lopez',
      role: 'Lab Manager',
      image: '/images/Sofia-5.jpg',
      bioEn:
        'Ashley Lopez holds a B.A. in Psychology (Honors) and an M.A. in Industrial/Organizational Psychology from NYU, with minors in Social Work and Child & Adolescent Mental Health Studies. Former Project Coordinator at NYU’s West Interpersonal Perception Lab, she studies how social support shapes academic and workplace outcomes for minoritized communities and plans to pursue a Ph.D.',
      bioEs:
        'Ashley López tiene una licenciatura en Psicología (con honores) y una maestría en Psicología Industrial/Organizacional de NYU, con menores en Trabajo Social y Estudios de Salud Mental Infantil y Adolescente. Ex Coordinadora de Proyectos en el West Interpersonal Perception Lab (NYU), investiga cómo el apoyo social influye en los resultados académicos y laborales de comunidades minorizadas y planea cursar un doctorado.',
    },
  ];

  /* --------------------------------------------------------
     Graduate Student Researchers
  -------------------------------------------------------- */
  const gradResearchers: Person[] = [
    {
      name: 'Sydni Davila, B.S., B.A.',
      role: 'Graduate Student Researcher',
      image: '/images/Sydni Davila.png',
      bioEn:
        'Sydni’s research centers on how adverse childhood experiences confer risk for interpersonal difficulties, psychopathology, and impaired brain development. She earned a B.A. in Psychology (minor Neuroscience) and a B.S. in Health Sciences from Cleveland State University and aims to become a Clinical or Developmental Psychologist serving underrepresented populations.',
      bioEs:
        'La investigación de Sydni se centra en cómo las experiencias adversas en la infancia confieren riesgo para dificultades interpersonales, psicopatología y alteraciones en el desarrollo cerebral. Obtuvo una B.A. en Psicología (con menor en Neurociencia) y una B.S. en Ciencias de la Salud de Cleveland State University y aspira a ser Psicóloga Clínica o del Desarrollo al servicio de poblaciones subrepresentadas.',
    },
    {
      name: 'Patrick Quintero, B.A.',
      role: 'Graduate Student Researcher',
      image: '/images/Patrick.JPG',
      bioEn:
        'Patrick studies how polyvictimization impacts adolescent mental health and development, with emphasis on protective factors such as education and social support, and on gender differences in experiences and outcomes. He is a first-year doctoral student in Clinical-Developmental Psychology at Pitt.',
      bioEs:
        'Patrick investiga cómo la polivictimización afecta la salud mental y el desarrollo en la adolescencia, con énfasis en factores protectores como la educación y el apoyo social, y en diferencias de género en las experiencias y resultados. Es estudiante de doctorado de primer año en Psicología Clínica-del Desarrollo en Pitt.',
    },
    {
      name: 'Geraldine Cisneros, B.A.',
      role: 'Graduate Student Researcher',
      image: '/images/Geraldine Cisneros.jpg',
      bioEn:
        'Geraldine is a first-year Developmental Psychology Ph.D. student at Pitt and K. Leroy Irvis Fellow. Harvard A.B. in Psychology (Cognitive Neuroscience & Evolutionary Psychology) with a minor in Social Anthropology. She studies how sociocultural contexts shape youth and family experiences with psychopathology and treatment-seeking and aims to inform accessible, culturally relevant interventions.',
      bioEs:
        'Geraldine es estudiante de primer año del doctorado en Psicología del Desarrollo en Pitt y becaria K. Leroy Irvis. A.B. de Harvard en Psicología (Neurociencia Cognitiva y Psicología Evolutiva) con menor en Antropología Social. Estudia cómo los contextos socioculturales moldean las experiencias de jóvenes y familias con la psicopatología y la búsqueda de tratamiento, buscando informar intervenciones accesibles y culturalmente relevantes.',
    },
    {
      name: 'Courtney Medina, B.A.',
      role: 'Graduate Student Researcher',
      image: '/images/Courtney Medina.jpeg',
      bioEn:
        'Courtney is a second-year Developmental Psychology Ph.D. student at the University of Pittsburgh and a K. Leroy Irvis Fellow mentored by Dr. Sophie Choukas-Bradley. She earned her B.A. with highest honors in Psychology and Human Development and Family Studies, with a minor in Latinx Studies, from the University of North Carolina at Chapel Hill in 2021. Before graduate school, she coordinated research in UNC’s Department of Psychology and Neuroscience. Courtney’s work examines sociocultural influences on adolescents’ romantic and sexual experiences and their implications for mental health, particularly among youth of color and queer youth. She aims to inform dating and sexual violence prevention through interdisciplinary, youth-centered approaches.',
      bioEs:
        'Courtney es estudiante de segundo año del doctorado en Psicología del Desarrollo en la Universidad de Pittsburgh y beneficiaria de la Beca K. Leroy Irvis, bajo la mentoría de la Dra. Sophie Choukas-Bradley. Se graduó con los más altos honores de la Universidad de Carolina del Norte en Chapel Hill en 2021, donde se especializó en Psicología y Estudios del Desarrollo Humano y Familiar, con una concentración en Estudios Latinx. Antes del posgrado, trabajó como coordinadora de proyectos de investigación en el Departamento de Psicología y Neurociencia de la UNC. Su trabajo examina las influencias socioculturales en las experiencias románticas y sexuales durante la adolescencia y su impacto en la salud mental, especialmente entre jóvenes de color y queer. Busca aplicar esta línea de investigación a la prevención de la violencia en el ámbito de las relaciones y la sexualidad mediante enfoques interdisciplinarios centrados en la juventud.',
    },
  ];

  /* --------------------------------------------------------
     Graduate Student Collaborators
  -------------------------------------------------------- */
  const gradCollaborators: Person[] = [
    {
      name: 'Dollar Ganu, B.A.',
      role: 'Graduate Student Collaborator',
      image: '/images/Dollar Ganu.jpg',
      bioEn:
        'Dollar is a master’s student in Marriage & Family Therapy at the University of Oregon. She is curious about how identities intersect with daily life, with prior work on belonging in classroom/social settings and on pharmacological and non-pharmacological approaches to depression and epilepsy.',
      bioEs:
        'Dollar es estudiante de maestría en Terapia Matrimonial y Familiar en la Universidad de Oregón. Le interesa cómo las identidades se entrelazan con la vida cotidiana; ha investigado pertenencia en contextos académicos/sociales y enfoques farmacológicos y no farmacológicos para depresión y epilepsia.',
    },
  ];

  /* --------------------------------------------------------
     Post-Baccalaureate Researchers
  -------------------------------------------------------- */
  const postBaccs: Person[] = [
    {
      name: 'Angela Martinez, B.S.',
      role: 'Post-Baccalaureate Fellow',
      image: '/images/Angela Ma.jpg',
      bioEn:
        'Angela is a Hot Metal Bridge Post-Baccalaureate Fellow at Pitt. She holds a B.S. in Biomedical Sciences and Psychology from UTRGV. She is interested in health and neuropsychology research and clinical work, and enjoys piano, reading, and cat videos.',
      bioEs:
        'Angela es becaria Post-Bachillerato Hot Metal Bridge en Pitt. Tiene una B.S. en Ciencias Biomédicas y Psicología de UTRGV. Le interesan la investigación y el trabajo clínico en salud y neuropsicología; disfruta tocar el piano, leer y ver videos de gatos.',
    },
    {
      name: 'Yadira Estrada, B.S., M.S.W.',
      role: 'Post-Baccalaureate Researcher',
      image: '/images/Yadira Estrada.jpg',
      bioEn:
        'Yadira (HMB Fellow 2024–2025) earned an M.S.W. in Interpersonal Practice in Integrated Health, Mental Health & Substance Abuse and a B.S. in Biopsychology, Cognition & Neuroscience from the University of Michigan. Former Lab Manager of the CASA Lab (UM). She studies how adverse childhood experiences shape brain/behavioral development and how policy, community, and family intersect in youth well-being.',
      bioEs:
        'Yadira (Becaria HMB 2024–2025) obtuvo una M.S.W. en Práctica Interpersonal en Salud Integrada, Salud Mental y Abuso de Sustancias y una B.S. en Biopsicología, Cognición y Neurociencia (Universidad de Michigan). Ex Gerente del Lab CASA (UM). Estudia cómo las experiencias adversas en la infancia moldean el desarrollo cerebral/conductual y cómo política, comunidad y familia se entrecruzan en el bienestar juvenil.',
    },
     {
      name: 'Dollar Ganu, B.A.',
      role: 'Graduate Student Collaborator',
      image: '/images/Dollar Ganu.jpg',
      bioEn:
        'Dollar is a master’s student in Marriage & Family Therapy at the University of Oregon. She is curious about how identities intersect with daily life, with prior work on belonging in classroom/social settings and on pharmacological and non-pharmacological approaches to depression and epilepsy.',
      bioEs:
        'Dollar es estudiante de maestría en Terapia Matrimonial y Familiar en la Universidad de Oregón. Le interesa cómo las identidades se entrelazan con la vida cotidiana; ha investigado pertenencia en contextos académicos/sociales y enfoques farmacológicos y no farmacológicos para depresión y epilepsia.',
    },
    {
      name: 'Erin Lancaster',
      role: 'Post-Baccalaureate Researcher',
      image: '/images/erin-lancaster.jpg',
      bioEn:
        'Erin Lancaster is a 2025–2026 Hot Metal Bridge (HMB) Post-Baccalaureate Fellow in Psychology at the University of Pittsburgh. She earned a Bachelor of Philosophy in Psychology from the University of Pittsburgh in May 2025. Erin is interested in exploring how culture, identity, and social context shape youth development and access to mental health resources. She joined the CREAR Lab to gain experience with international and community-engaged research and to learn more about how cultural values and family relationships impact youth mental health. Outside of academics, she enjoys sewing, crocheting, listening to music, and spending time with family and friends.',
      bioEs:
        'Erin Lancaster es becaria postbaccalaureate del programa Hot Metal Bridge (HMB) 2025–2026 en Psicología en la Universidad de Pittsburgh. Obtuvo su licenciatura en Filosofía con especialización en Psicología en la Universidad de Pittsburgh en mayo de 2025. Erin está interesada en explorar cómo la cultura, la identidad y el contexto social influyen en el desarrollo juvenil y en el acceso a los recursos de salud mental. Se unió al CREAR Lab para adquirir experiencia en investigación internacional y comunitaria, y para aprender más sobre cómo los valores culturales y las relaciones familiares impactan la salud mental de los jóvenes. Fuera del ámbito académico, disfruta coser, tejer a crochet, escuchar música y pasar tiempo con su familia y amigos.',
    },
  ];

  /* --------------------------------------------------------
     Undergraduate Research Assistants
  -------------------------------------------------------- */
  const undergrads: Person[] = [
    {
      name: 'Sophia Chen',
      role: 'Student Research Assistant',
      image: '/images/Sophia Chen Headshot.jpg',
      bioEn:
        'Senior in Psychology with a certificate in Conceptual Foundations of Medicine. Plans to become a physician assistant; interested in research-to-practice translation for quality patient care.',
      bioEs:
        'Estudiante de último año en Psicología con certificado en Fundamentos Conceptuales de la Medicina. Planea ser asistente de médico; interesada en traducir investigación a la práctica para atención de calidad.',
    },
    {
      name: 'Grace Elena Dupree',
      role: 'Student Research Assistant',
      image: '/images/Grace Elena.jpg',
      bioEn:
        'Third-year BSN student pursuing honors and a minor in Gender, Sexuality & Women’s Studies; multilingual (English, Spanish, Mandarin, French). Aspires to be a psychiatric nurse practitioner supporting underserved communities.',
      bioEs:
        'Estudiante de tercer año (BSN) con honores y menor en Estudios de Género, Sexualidad y Mujeres; multilingüe (inglés, español, mandarín, francés). Aspira a ser enfermera psiquiátrica apoyando a comunidades desatendidas.',
    },
    {
      name: 'Zainab Kabir',
      role: 'Student Research Assistant',
      image: '/images/Zainab Kabir.png',
      bioEn:
        'Senior in Psychology with a minor in Sociology. Interested in trauma, mental health, and social behavior; plans an M.A. in Industrial-Organizational Psychology.',
      bioEs:
        'Estudiante de último año en Psicología con menor en Sociología. Interesada en trauma, salud mental y comportamiento social; planea una maestría en Psicología Industrial-Organizacional.',
    },

    {
      name: 'Maddie McCray',
      role: 'Student Research Assistant',
      image: '/images/Maddie McCray.jpg',
      bioEn:
        'Junior in Psychology and Political Science with a minor in German. Excited to learn about adolescent psychology under stress; hopes to become a therapist.',
      bioEs:
        'Estudiante de tercer año en Psicología y Ciencia Política con menor en Alemán. Emocionada por aprender sobre psicología adolescente bajo presión; espera ser terapeuta.',
    },
    {
      name: 'Isabella Pina',
      role: 'Student Research Assistant',
      image: '/images/Isabella Pina.jpeg',
      bioEn:
        'Junior nursing student also pursuing Psychology; experience in TBI rehab. Interested in supporting underserved adolescents at the intersection of care and mental health.',
      bioEs:
        'Estudiante de tercer año de enfermería y de Psicología; experiencia en rehabilitación de lesión cerebral traumática. Interesada en apoyar a adolescentes desatendidos en la intersección de atención y salud mental.',
    },
    {
      name: 'Nikita Sundaram',
      role: 'Student Research Assistant',
      image: '/images/Nikita.jpg',
      bioEn:
        'Sophomore (Class of 2027) majoring in Psychology with a minor in Sociology. Plans to conduct research and work as a clinical psychologist.',
      bioEs:
        'Estudiante de segundo año (Generación 2027) con especialización en Psicología y menor en Sociología. Planea investigar y trabajar como psicóloga clínica.',
    },
    {
      name: 'Fabiola Wah',
      role: 'Student Research Assistant',
      image: '/images/Fabiola Wah.jpg',
      bioEn:
        'Junior majoring in Chemistry with a minor in Neuroscience; born in Aibonito, Puerto Rico. Volunteers as an interpreter and plans to attend medical school.',
      bioEs:
        'Estudiante de tercer año en Química con menor en Neurociencia; nacida en Aibonito, Puerto Rico. Voluntaria como intérprete; planea estudiar medicina.',
    },
    {
      name: 'Kmaura White',
      role: 'Student Research Assistant',
      image: '/images/Kmaura.jpeg',
      bioEn:
        'Kmaura (she/they) is a junior pursuing a B.S. in Psychology with a minor in Neuroscience and certificates in Conceptual Foundations of Medicine and Gender, Sexuality & Women’s Studies. Aims for a Psy.D. in Clinical Psychology to support higher-acuity mental health needs.',
      bioEs:
        'Kmaura (ella/elle) cursa tercer año para una B.S. en Psicología con menor en Neurociencia y certificados en Fundamentos Conceptuales de la Medicina y Estudios de Género, Sexualidad y Mujeres. Aspira a un Psy.D. en Psicología Clínica para apoyar necesidades de salud mental de mayor gravedad.',
    },
  ];

  /* --------------------------------------------------------
     International Research Assistants
  -------------------------------------------------------- */
  const internationals: Person[] = [
    {
      name: 'Citlali Aguilar Mora',
      role: 'Research Assistant — Universidad Michoacana',
      image: '/images/Citlali.jpg',
      bioEn:
        'Psychology student in Uruapan, Michoacán. Interested in neuropsychology and educational psychology; enjoys drawing and baking.',
      bioEs:
        'Estudiante de psicología en Uruapan, Michoacán. Interesada en neuropsicología y psicología educativa; le gusta dibujar y la repostería.',
    },
    {
      name: 'Alitzel Donají Cruz Ángeles',
      role: 'Research Assistant — Universidad Michoacana',
      image: '/images/Alitzer.jpg',
      bioEn:
        'Fourth-semester psychology student (UMSNH, Uruapan). Curious about cultures and research; enjoys volleyball, math, writing, reading, and art. Excited about this opportunity.',
      bioEs:
        'Estudiante de cuarto semestre de Psicología (UMSNH, Uruapan). Curiosa sobre culturas e investigación; disfruta voleibol, matemáticas, escritura, lectura y arte. Emocionada por esta oportunidad.',
    },
    {
      name: 'María de los Ángeles Morales Olivera',
      role: 'Research Assistant — Universidad Michoacana',
      image: '/images/Maria de los Angeles.png',
      bioEn:
        'From Uruapan, Michoacán. Overcame personal challenges; now thriving as a Psychology student (with a technical background in puericulture) at the Uruapan campus.',
      bioEs:
        'Originaria de Uruapan, Michoacán. Superó retos personales; actualmente destaca como estudiante de Psicología (con base técnica en puericultura) en el campus Uruapan.',
    },
    {
      name: 'Mayra Karina Delgado Aguilera',
      role: 'Research Assistant — Universidad Michoacana',
      image: '/images/Mayra.jpg',
      bioEn:
        'Born in Uruapan (1994). Fifth-semester Psychology student (UMSNH). Interested in active collaboration and empirical learning; aims to continue academic development in research.',
      bioEs:
        'Nacida en Uruapan (1994). Estudiante de quinto semestre de Psicología (UMSNH). Interesada en colaboración activa y aprendizaje empírico; busca continuar su desarrollo académico en investigación.',
    },
    {
      name: 'Karyme Joanna Bello Sereno',
      role: 'Research Assistant — Universidad Michoacana',
      image: '/images/Karyme.jpg',
      bioEn:
        'From Uruapan (b. 2004). Fourth-semester Psychology student (UMSNH). Hopes to apply prior knowledge effectively and grow through hands-on research experience.',
      bioEs:
        'De Uruapan (n. 2004). Estudiante de cuarto semestre de Psicología (UMSNH). Desea aplicar conocimientos previos de forma efectiva y crecer mediante experiencia práctica en investigación.',
    },
    {
      name: 'Paulina Michell González Herrera',
      role: 'Research Assistant — Universidad Michoacana',
      image: '/images/Paulina.jpg',
      bioEn:
        'Psychology student (UMSNH, Uruapan). Wants to put theory into practice, understand risk/protective factors and daily contexts, and provide tools to those who need them.',
      bioEs:
        'Estudiante de Psicología (UMSNH, Uruapan). Quiere llevar la teoría a la práctica, comprender factores de riesgo/protección y contextos cotidianos, y brindar herramientas a quien las necesite.',
    },
    {
      name: 'Diana Paola Toral Torres',
      role: 'Research Assistant — Universidad Michoacana',
      image: '/images/Diana.jpg',
      bioEn:
        'Mexican student from Uruapan, Michoacán. Fourth-semester student in the Faculty of Psychology (UMSNH, Unidad Profesional de Uruapan).',
      bioEs:
        'Estudiante mexicana de Uruapan, Michoacán. Cursa cuarto semestre en la Facultad de Psicología (UMSNH, Unidad Profesional de Uruapan).',
    },
    {
      name: 'Unnati Khanna',
      role: 'International Research Assistant',
      image: '/images/Unatti.jpg',
      bioEn:
        'Post-bacc researcher from India. B.A. in Psychology (University of Delhi, 2023). Interested in child development and family health; aims to pursue a master’s in developmental psychology and study supportive parenting in Indian contexts.',
      bioEs:
        'Investigadora post-bac de India. Licenciada en Psicología (Universidad de Delhi, 2023). Interesada en desarrollo infantil y salud familiar; planea maestría en psicología del desarrollo y estudiar crianza de apoyo en contextos indios.',
    },
  ];

  /* --------------------------------------------------------
     Current Collaborators
  -------------------------------------------------------- */
  const collaborators: Person[] = [
    {
      name: 'Francheska Alers-Rojas, Ph.D.',
      role: 'University of Texas at Austin — Proyecto VENCER Collaborator',
      image: '/images/Francheska.png',
      bioEn:
        'Examines factors that help adolescents—especially from minoritized backgrounds—thrive. Uses resilience and strengths-based approaches (daily diary, interviews, secondary data) to study contextual risks (discrimination, community violence, family stress) and incorporates biological markers (e.g., cortisol) and physiology (e.g., sleep). Also studies Black and Latina women’s experiences with infertility.',
      bioEs:
        'Examina factores que ayudan a los adolescentes—especialmente de orígenes minorizados—a prosperar. Usa enfoques de resiliencia y fortalezas (diarios, entrevistas, datos secundarios) para estudiar riesgos contextuales (discriminación, violencia comunitaria, estrés familiar) e incorpora marcadores biológicos (p. ej., cortisol) y fisiología (p. ej., sueño). También estudia experiencias de mujeres negras y latinas con infertilidad.',
    },
    {
      name: 'Erika Álvarez Álvarez',
      role: 'Universidad Michoacana de San Nicolás de Hidalgo — Proyecto VENCER Collaborator',
      image: '/images/Erika.jpeg',
      bioEn:
        'Psychologist focused on research and teaching, particularly statistical analysis and instrument design. Advocates inclusive, gender-informed education and explores how AI can enrich teaching while preserving critical thinking.',
      bioEs:
        'Psicóloga enfocada en investigación y docencia, en particular análisis estadístico y diseño de instrumentos. Promueve una educación inclusiva y con perspectiva de género e investiga cómo la IA puede enriquecer la enseñanza preservando el pensamiento crítico.',
    },
    {
      name: 'Gabriella Alvarez, Ph.D.',
      role: 'University of Pittsburgh — MAPI Study Collaborator',
      image: '/images/Gabriela.jpg',
      bioEn:
        'Studies how social inequality (e.g., racism, poverty) shapes brain activity and immune function with consequences for mental and physical health, and how physiological states (e.g., inflammation) feed back to affect social perception—informing interventions that promote health equity.',
      bioEs:
        'Estudia cómo la desigualdad social (p. ej., racismo, pobreza) moldea la actividad cerebral y el sistema inmunológico con consecuencias para la salud mental y física, y cómo estados fisiológicos (p. ej., inflamación) retroalimentan la percepción social—informando intervenciones que promuevan la equidad en salud.',
    },
    {
      name: 'Lara Bohórquez',
      role: 'Research Coordinator, Centro de Derecho de Mujeres — HAVE HOPE Collaborator',
      image: '/images/Lara.png',
      bioEn:
        'Historian and social anthropologist (UNAH, Honduras), researcher and social activist, part of the Feminist Research Unit of the Center for Women’s Rights (CDM).',
      bioEs:
        'Historiadora y antropóloga social (UNAH, Honduras), investigadora y activista social, parte de la Unidad de Investigación Feminista del Centro de Derechos de Mujeres (CDM).',
    },
    {
      name: 'Irmarie Cruz López, Ph.D.',
      role: 'University of Puerto Rico, Mayagüez — STAR*PR*Pitt Collaborator',
      image: '/images/IMARIE.jpg',
      bioEn:
        'Studies the impact of traumatic and adverse experiences on children’s and adolescents’ functioning and develops trauma-informed school programs and multi-tiered systems of support.',
      bioEs:
        'Estudia el impacto de experiencias traumáticas y adversas en el funcionamiento de niños y adolescentes y desarrolla programas escolares informados en trauma y sistemas de apoyo multinivel.',
    },
  ];

  /* --------------------------------------------------------
     Former Research Assistants (simple list)
  -------------------------------------------------------- */
  const formerRAs: string[] = [
    'Brian Kim - graduated with a B.S. in Psychology and minors in Neuroscience and Sociology. His work focused on understanding the causes and consequences of violence.',
    'Maeve López (Summer 2025–present): Undergraduate Directed Research',
    'Yakahiris Vazquez (Fall 2023–Summer 2025): Undergraduate Volunteer. Post-baccalaureate position: M.S.W. Student, Social Work, Millersville University',
    'Stephany Andrade — Undergraduate Research Assistant, University of Pittsburgh (Summer 2024)',
    'Alexa Carreon — Undergraduate Research Assistant, University of Pittsburgh (Fall 2023)',
    'Grace Geoffroy — Undergraduate Research Assistant, University of Pittsburgh (Fall 2023–Spring 2024)',
    'Ariana Gisele Méndez Torrez — Asistente de investigación, Universidad Michoacana (Spring 2024)',
    'Natalia Hardy — Undergraduate Research Assistant, University of Pittsburgh (Fall 2023–Spring 2024) • Post-Lab: Research Associate, 15104 Seniors Project',
    'María Hernández-Casanenda — Undergraduate Research Assistant, University of Pittsburgh (Fall 2023–Summer 2024) • Post-Lab: Student, University of Pittsburgh; SITI Girl Pittsburgh',
    'Jordan Hudson — Undergraduate Research Assistant, University of Pittsburgh (Fall 2023–Spring 2024)',
    'Mica Siegler — Undergraduate Research Assistant, University of Pittsburgh (Spring 2024–Fall 2024)',
  ];

  /* --------------------------------------------------------
     Reusable Section Renderer
  -------------------------------------------------------- */
  const Section = ({
    titleEn,
    titleEs,
    data,
  }: {
    titleEn: string;
    titleEs: string;
    data: Person[];
  }) => (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-8 text-gray-700 text-center">
        {isSpanish ? titleEs : titleEn}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data.map((p) => (
          <div
            key={p.name}
            className="relative group bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
          >
            {/* Profile image or fallback */}
            <div className="h-40 w-40 mx-auto rounded-full mb-4 overflow-hidden shadow-md bg-white">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-gray-600 text-sm font-medium bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#C9E9FF] via-[#EAF8D9] to-[#F9E0E3]">
                  Photo
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-center text-gray-800">
              {p.name}
            </h3>
            <p className="text-sm text-center text-gray-600 mb-2">{p.role}</p>

            {/* Hover bio overlay */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 rounded-2xl flex items-center justify-center text-center px-5 py-6 transition duration-300">
              <p className="text-sm text-gray-700">
                {isSpanish ? p.bioEs : p.bioEn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  /* --------------------------------------------------------
     Render
  -------------------------------------------------------- */
  return (
    <main className="px-6 py-20 max-w-7xl mx-auto text-gray-800">
      {/* Language Toggle */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setIsSpanish((v) => !v)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          {isSpanish ? 'English' : 'Español'}
        </button>
      </div>

      {/* Director (Featured) */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          {isSpanish
            ? 'Directora del Laboratorio CREAR'
            : 'Director of the CREAR Lab'}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-3xl shadow-md border border-gray-100">
          {/* Profile Image */}
          <div className="h-52 w-52 flex-shrink-0 rounded-full overflow-hidden shadow-md bg-white">
            <img
              src="/images/Andrea-2.jpg"
              alt="Andrea S. Medrano"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Text content */}
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {drMedrano.name}
            </h3>
            <p className="text-sm text-gray-600 font-medium mb-1">
              {isSpanish ? drMedrano.titleEs : drMedrano.titleEn}
            </p>
            <p className="text-sm text-gray-600 italic mb-4">
              {drMedrano.role}
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              {isSpanish ? drMedrano.bioEs : drMedrano.bioEn}
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <Section
        titleEn="Lab Staff"
        titleEs="Personal del Laboratorio"
        data={labStaff}
      />

      <Section
        titleEn="Graduate Student Researchers"
        titleEs="Estudiantes de Posgrado Investigadores"
        data={gradResearchers}
      />

      <Section
        titleEn="Graduate Post-Baccalaureate Research Collaborators"
        titleEs="Investigadores Post-Bachillerato"
        data={postBaccs}
      />

      <Section
        titleEn="Undergraduate Research Assistants"
        titleEs="Asistentes de Investigación de Pregrado"
        data={undergrads}
      />

      <Section
        titleEn="International Research Assistants"
        titleEs="Asistentes Internacionales de Investigación"
        data={internationals}
      />

      <Section
        titleEn="Current Collaborators"
        titleEs="Colaboradoras Actuales"
        data={collaborators}
      />

      {/* Former RAs — simple list */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">
          {isSpanish
            ? 'Ex Asistentes de Investigación'
            : 'Former Research Assistants'}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
          {formerRAs.map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl p-4 border border-gray-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
