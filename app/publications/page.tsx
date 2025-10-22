'use client';
import * as React from 'react';

export default function PublicationsPage() {
  const publications = [
    {
      title: 'Méndez-López, C., & Pereda, N. (2020)',
      citation:
        'Victimization and poly-victimization in Mexican adolescents: Prevalence and association with psychological adjustment. *Child Abuse & Neglect*.',
      link: 'https://doi.org/10.1016/j.chiabu.2020.104771',
    },
    {
      title:
        'Roorda, D. L., Koomen, H. M. Y., Spilt, J. L., & Oort, F. J. (2011)',
      citation:
        'The influence of affective teacher–student relationships on students’ school engagement and achievement: A meta-analytic approach. *Review of Educational Research*.',
      link: 'https://doi.org/10.3102/0034654310375663',
    },
    {
      title: 'Cornelius-White, J. (2007)',
      citation:
        'Learner-centered teacher-student relationships are effective: A meta-analysis. *Review of Educational Research*.',
      link: 'https://doi.org/10.3102/00346543030374',
    },
  ];

  return (
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        color: '#143F6B',
        lineHeight: 1.6,
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        background: '#F8F8F8',
        paddingTop: '120px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '40px', fontWeight: 800 }}>Publications</h1>
      <p
        style={{
          marginTop: '20px',
          fontSize: '18px',
          maxWidth: '800px',
          marginInline: 'auto',
        }}
      >
        CREAR Lab’s work has been featured in peer-reviewed journals, national
        conferences, and international collaborations that advance cultural,
        developmental, and health equity research.
      </p>

      <div
        style={{
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          maxWidth: '900px',
          marginInline: 'auto',
          padding: '0 24px 100px',
        }}
      >
        {publications.map((p) => (
          <div
            key={p.title}
            style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              textAlign: 'left',
              padding: '24px',
              width: '100%',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 18px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            onClick={() => window.open(p.link, '_blank')}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{p.title}</h3>
            <p style={{ marginTop: '8px', fontSize: '15px', lineHeight: 1.5 }}>
              {p.citation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
