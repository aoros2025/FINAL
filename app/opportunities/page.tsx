'use client';
import * as React from 'react';

export default function OpportunitiesPage() {
  const roles = [
    {
      title: 'Undergraduate Research Assistants',
      desc: 'Gain hands-on experience in data collection, coding, and analysis on projects related to youth development, resilience, and mental health equity.',
      img: 'https://thecrearlab.com/assets/research-card.jpg',
    },
    {
      title: 'Graduate Students',
      desc: 'Join the CREAR Lab as a graduate trainee to design culturally informed studies, mentor undergraduate researchers, and contribute to community-based initiatives.',
      img: 'https://thecrearlab.com/assets/people-card.jpg',
    },
    {
      title: 'Community Collaborators',
      desc: 'Partner with CREAR Lab to co-create interventions and outreach efforts that reflect the strengths and needs of local communities.',
      img: 'https://thecrearlab.com/assets/community-card.jpg',
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
      <h1 style={{ fontSize: '40px', fontWeight: 800 }}>Opportunities</h1>
      <p
        style={{
          marginTop: '20px',
          fontSize: '18px',
          maxWidth: '800px',
          marginInline: 'auto',
        }}
      >
        The CREAR Lab offers opportunities for students and collaborators to
        engage in research that promotes resilience, culture, and equity. We
        welcome motivated individuals who share our mission of empowering
        diverse communities.
      </p>

      <div
        style={{
          marginTop: '60px',
          display: 'grid',
          gap: '24px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          maxWidth: '1200px',
          marginInline: 'auto',
          padding: '0 24px 100px',
        }}
      >
        {roles.map((r) => (
          <div
            key={r.title}
            style={{
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
            }}
          >
            <img
              src={r.img}
              alt={r.title}
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{r.title}</h3>
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '15px',
                  lineHeight: 1.5,
                }}
              >
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
