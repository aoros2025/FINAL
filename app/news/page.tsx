'use client';
import * as React from 'react';

export default function NewsPage() {
  const updates = [
    {
      title: 'CREAR Lab Presents at SRCD 2025',
      date: 'March 2025',
      desc: 'Our team presented new findings on resilience and community belonging among Latinx adolescents at the Society for Research in Child Development (SRCD) Conference.',
    },
    {
      title: 'Community Workshop Series Launched',
      date: 'January 2025',
      desc: 'The lab kicked off a bilingual parent workshop series focused on promoting youth well-being, emotional regulation, and family connectedness.',
    },
    {
      title: 'Undergraduate Scholars Recognized',
      date: 'October 2024',
      desc: 'Three undergraduate research assistants received honors for their contributions to CREAR Lab’s ongoing studies on youth mental health and cultural resilience.',
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
      <h1 style={{ fontSize: '40px', fontWeight: 800 }}>News & Updates</h1>
      <p
        style={{
          marginTop: '20px',
          fontSize: '18px',
          maxWidth: '800px',
          marginInline: 'auto',
        }}
      >
        Stay up to date with CREAR Lab’s latest research presentations,
        community initiatives, and student accomplishments.
      </p>

      <div
        style={{
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          maxWidth: '900px',
          marginInline: 'auto',
          padding: '0 24px 100px',
        }}
      >
        {updates.map((u) => (
          <div
            key={u.title}
            style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              textAlign: 'left',
              padding: '24px',
              width: '100%',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#0F2E50',
                marginBottom: '6px',
              }}
            >
              {u.date}
            </p>
            <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{u.title}</h3>
            <p style={{ marginTop: '10px', fontSize: '15px', lineHeight: 1.5 }}>
              {u.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
