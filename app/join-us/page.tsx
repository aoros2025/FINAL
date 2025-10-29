// pages/join-us.tsx
import React from 'react';
import Image from 'next/image';

export default function JoinUsPage() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Join the CREAR Lab
      </h1>

      {/* SECTION: Availability Notice */}
      <div className="mb-10 bg-purple-50 p-6 rounded-lg shadow">
        <p className="text-lg">
          <em>Gracias</em> for your interest in the Community Research Exploring
          Adolescent Resilience Lab (CREAR Lab)!
        </p>
        <p className="mt-4 font-semibold text-xl">
          I am <u>not</u> accepting applications during the 2025–2026 admissions
          cycle.
        </p>
        <p className="mt-2">
          In other words, I will <strong className="underline">NOT</strong> be
          accepting applications from students who wish to become Ph.D. students
          beginning in Fall 2026.
        </p>
      </div>
      {/* SECTION: Lab Event Image */}
      <div className="my-10 text-center">
        <Image
          src="/images/Pumpkin Patch.jpg"
          alt="CREAR Lab team at Pumpkin Patch event"
          width={800}
          height={500}
          className="rounded-xl shadow-lg mx-auto"
          unoptimized
        />
        <p className="text-sm text-gray-500 mt-2">
          CREAR Lab team enjoying community outreach at the Pumpkin Patch event.
        </p>
      </div>

      {/* SECTION: Opportunities */}

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          Current Undergraduate Opportunities
        </h2>
        <p>
          We currently have open volunteer and Directed Research positions in
          the lab for current undergraduate freshmen, sophomores, and juniors.
          You can check back in Spring 2025 to confirm whether we are taking
          individuals seeking post-baccalaureate or post-doctoral positions.
        </p>
        <p className="mt-2">
          Please reach out to our lab manager, <strong>Ashley Lopez</strong> at{' '}
          <a
            href="mailto:ashley.lopez@pitt.edu"
            className="text-blue-600 underline"
          >
            ashley.lopez@pitt.edu
          </a>{' '}
          with questions.
        </p>
      </div>

      {/* SECTION: FAQs */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>

        <details className="mb-4 border border-gray-300 rounded p-4">
          <summary className="font-semibold">
            Can I list your name as my graduate mentor?
          </summary>
          <p className="mt-2">
             When applying to Psychology Ph.D. programs at Pitt, prospective students apply to work with a specific 
            faculty member(s) in their research lab as their advisor/research mentor. There is a spot on the application
            where you can list one or more mentors of interest. That's where you should list my name if you are interested 
            in working in my lab and would like for me to review your application.  

          </p>
        </details>

        <details className="mb-4 border border-gray-300 rounded p-4">
          <summary className="font-semibold">
            Is funding available for admitted Ph.D. students?
          </summary>
          <p className="mt-2">
           The Psychology Department provides financial support to admitted students through tuition coverage
            and a stipend. Funding for students in my lab comes from a range of sources, including research assistant
            slots from my Pitt start-up funds and possibly in the future from grant funding, fellowships (e.g., from 
            Pitt and the National Science Foundation), and teaching assistantships (TA) and independent teaching (Teaching 
            Fellow or TF). 
          </p>
        </details>

        <details className="mb-4 border border-gray-300 rounded p-4">
          <summary className="font-semibold">
            What are you looking for in a prospective student?
          </summary>
          <p className="mt-2">
            Qualifications of applicants  
Strong applicants to CREAR Lab are passionate about one or more research areas in our lab, have a strong academic record, typically have completed prior coursework in Psychology (or Social Work), and have usually gained at least one year of research experience in psychology or a related field, ideally including post-baccalaureate experience and/or independent research experience (for example, through a senior thesis, poster presentations, publication experience).  
In reviewing applications, I will look for evidence of applicants' interest in and commitment to diverse populations, including, but not limited to, violence exposure, mental health disparities, acculturation, resilience framework, and drawing from culturally-humble and strengths-based perspectives. Because a lot of our work is international (in Mexico, Honduras, Puerto Rico, etc..) and with Spanish-speaking Latino/as in the U.S., it will be an additional benefit if an applicant is bilingual in Spanish (so please mention if you are bilingual!); however, this is not a requirement, nor would it make or break a students’ application if the applicant is otherwise qualified and aligned with the work being conducted in the lab. 
As part of my holistic review process, I will pay close attention to structural barriers applicants may have experienced in their academic and career journeys.  In light of concerns about equity related to the GRE, I will NOT consider GRE scores in admissions cycles. 
​ 
Holistic review process 
​My holistic review process includes reviewing personal statements, letters of recommendation, CVs, transcripts, and other submitted materials. I pay special attention to structural barriers and unique circumstances applicants may have experienced on their academic and career journeys (e.g., first-generation status, structural and interpersonal circumstances, minority identities and related structural disparities), which you may decide to discuss in your personal statement and/or ask your letter-writers to discuss on your behalf. 
​​Although I am the primary person reviewing the applications that list me as a potential mentor, the ultimate decision about whom to invite for official interview visits (and final admissions decisions) is made collectively by faculty in our program.  
          </p>
        </details>

        <details className="mb-4 border border-gray-300 rounded p-4">
          <summary className="font-semibold">
            Should I email you before applying?
          </summary>
          <p className="mt-2">
           It is not necessary to email me before applying. Sometimes applicants feel they 
            need to email faculty to express their interest in advance. For me, this definitely 
            is not necessary. Whether or not you email me will have no bearing on your ultimate chances 
            of admission. I will carefully review all applications that list me as a potential mentor on
            official apps submitted through Pitt, and my holistic review process will not involve checking
            to see if students emailed me or reviewing content sent via email. 
            
            You are of course welcome to email me (andrea.medrano@pitt.edu) if you have a specific question not 
            answered on my website or Pitt's website.  
          </p>
        </details>

        <details className="mb-4 border border-gray-300 rounded p-4">
          <summary className="font-semibold">
            Can we meet by Zoom before I apply?
          </summary>
          <p className="mt-2">
            Unfortunately, no. To ensure fairness, Dr. Medrano does not schedule
            pre-application meetings. Selected applicants will be contacted for
            interviews after a holistic review.
          </p>
        </details>
      </div>

      {/* ===== Google Form Embed ===== */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">
          Undergraduate Interest Form
        </h2>
        <p className="mb-4">
          If you are an undergraduate interested in joining the CREAR Lab,
          please fill out the form below:
        </p>

        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdmcHkbLbvGVZKD6jKWvoFsiwp7XKf0g0ausMLVDZuN7RIvOg/viewform?embedded=true"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="CREAR Lab Join Us Form"
            className="rounded-lg shadow-lg"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
