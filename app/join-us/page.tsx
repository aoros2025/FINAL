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
            Yes. When applying to Psychology Ph.D. programs at Pitt, prospective
            students apply to work with a specific faculty member(s). There is a
            spot on the application where you can list mentors. List Dr.
            Medrano's name if you want her to review your application.
          </p>
        </details>

        <details className="mb-4 border border-gray-300 rounded p-4">
          <summary className="font-semibold">
            Is funding available for admitted Ph.D. students?
          </summary>
          <p className="mt-2">
            Yes. The department provides financial support through tuition
            coverage, stipends, fellowships, and teaching assistantships. Info
            on fee waivers and international student requirements is available
            on Pitt's website.
          </p>
        </details>

        <details className="mb-4 border border-gray-300 rounded p-4">
          <summary className="font-semibold">
            What are you looking for in a prospective student?
          </summary>
          <p className="mt-2">
            Strong applicants are passionate about our lab’s focus areas, have
            solid academic records, and prior research experience (post-bac or
            independent work). Bilingualism in Spanish is a plus but not
            required.
          </p>
        </details>

        <details className="mb-4 border border-gray-300 rounded p-4">
          <summary className="font-semibold">
            Should I email you before applying?
          </summary>
          <p className="mt-2">
            No need to email in advance. All applications will be reviewed
            holistically via official Pitt channels.
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
