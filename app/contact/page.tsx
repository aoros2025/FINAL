'use client';
import * as React from 'react';

export default function ContactPage() {
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
      <h1 style={{ fontSize: '40px', fontWeight: 800 }}>Contact Us</h1>
      <p
        style={{
          marginTop: '20px',
          fontSize: '18px',
          maxWidth: '800px',
          marginInline: 'auto',
        }}
      >
        Have a question or want to collaborate? We’d love to hear from you.
        Reach out using the form below or by email at{' '}
        <a
          href="mailto:thecrearlab@gmail.com"
          style={{ color: '#143F6B', fontWeight: 600 }}
        >
          thecrearlab@gmail.com
        </a>
        .
      </p>

      <form
        action="https://formspree.io/f/mvgwqyrj"
        method="POST"
        style={{
          marginTop: '60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '500px',
          marginInline: 'auto',
          padding: '0 24px 100px',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          style={{
            ...inputStyle,
            resize: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            background: '#143F6B',
            color: 'white',
            border: 'none',
            padding: '14px 30px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>

      <footer
        style={{
          background: '#143F6B',
          color: 'white',
          textAlign: 'center',
          padding: '40px 20px',
        }}
      >
        <p>© {new Date().getFullYear()} CREAR Lab, University of Pittsburgh</p>
      </footer>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '14px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  outline: 'none',
};
