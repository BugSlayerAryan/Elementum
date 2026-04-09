


const teamImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
];

const offerRows = [
  {
    left: "Office of multiple interest content",
    right: "Collaborative & partnership",
  },
  {
    left: "The hanger US Air force digital experimental",
    right: "We talk about our weight",
  },
  {
    left: "Delta faucet content, social, digital",
    right: "Piloting digital confidence",
  },
];

const testimonialFaces = [
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
];



function CirclePhoto({ src, size = 110, className = "", style = {} }) {
  return (
    <div
      className={`circle-photo ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${src})`,
        ...style,
      }}
    />
  );
}

import React, { useState } from "react";

export default function ElementumLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="page-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        html, body, #root { margin: 0; min-height: 100%; background: #efefed; }
        body {
          font-family: Arial, Helvetica, sans-serif;
          color: #111;
        }

        .poppins {
          font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
        }

        .page-shell {
          background: #efefed;
          min-height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
        }

        .site {
          width: 100vw;
          min-width: 0;
          overflow-x: hidden;
          position: relative;
        }

        .container {
          width: 100vw;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 48px;
          padding-right: 48px;
          position: relative;
          box-sizing: border-box;
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0 8px;
          font-size: 12px;
        }

        .brand {
          font-size: 24px;
          letter-spacing: -1px;
          font-weight: 500;
        }

        .nav-links {
          display: flex;
          gap: 34px;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin-left: 40px;
        }

        .nav-links a,
        .footer-col a {
          color: #1d1d1d;
          text-decoration: none;
          transition: color 0.2s, border-bottom 0.2s;
          border-bottom: 2px solid transparent;
        }
        .nav-links a:hover,
        .footer-col a:hover {
          color: #ff7d7d;
          border-bottom: 2px solid #ff7d7d;
        }

        .menu-icon {
          width: 34px;
          height: 22px;
          position: relative;
          cursor: pointer;
        }
        /* .menu-icon is always visible now */
        .menu-icon-bar {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: #444;
          border-radius: 999px;
          transition: all 0.2s;
        }
        .menu-icon-bar.top { top: 6px; }
        .menu-icon-bar.bottom { top: 14px; }
        @media (max-width: 900px) {
          .menu-icon { display: block; }
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(255,255,255,0.98);
          z-index: 1000;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(-40px) scale(0.98);
          pointer-events: none;
          transition: opacity 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1);
        }
        .mobile-menu.open {
          display: flex;
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .mobile-menu a {
          font-size: 1.5rem;
          color: #1d1d1d;
          text-decoration: none;
          margin: 18px 0;
          transition: color 0.2s;
        }
        .mobile-menu a:hover {
          color: #ff7d7d;
        }
        .mobile-menu-close {
          position: absolute;
          top: 24px;
          right: 32px;
          font-size: 2.2rem;
          color: #444;
          background: none;
          border: none;
          cursor: pointer;
        }

        .hero {
          text-align: center;
          padding-top: 46px;
          position: relative;
        }

        .display {
          font-size: clamp(2rem, 6vw, 5rem);
          line-height: 1.08;
          letter-spacing: -0.06em;
          font-weight: 500;
          margin: 0 auto;
          max-width: 980px;
          color: #000;
          word-break: break-word;
        }

        .display .under-orange {
          position: relative;
          display: inline-block;
        }

        .display .under-orange::after {
          content: "";
          position: absolute;
          left: 4%;
          right: 4%;
          bottom: 0.08em;
          height: 0.14em;
          background: rgba(241, 176, 49, 0.95);
          border-radius: 999px;
          z-index: -1;
        }

        .display .green-pill,
        .heading-pill {
          display: inline-block;
          padding: 0.02em 0.18em 0.09em;
          border-radius: 999px;
          background: #d6ead6;
        }

        .display .pink-pill {
          display: inline-block;
          padding: 0.02em 0.18em 0.09em;
          border-radius: 999px;
          background: #efc3e8;
        }

        .hero-sub {
          font-size: 14px;
          line-height: 1.45;
          max-width: 600px;
          margin: 24px auto 34px;
          color: #222;
        }

        .purple-blob {
          position: absolute;
          width: 80px;
          height: 80px;
          background: #8b48f2;
          border-radius: 58% 42% 70% 30% / 42% 60% 40% 58%;
        }

        .hero .purple-blob {
          right: 40px;
          top: 108px;
          transform: rotate(-24deg);
        }

        .scribble-left {
          position: absolute;
          left: -110px;
          top: 220px;
          width: 120px;
          height: 220px;
        }

        .scribble-left::before,
        .scribble-left::after {
          content: "";
          position: absolute;
          inset: 0;
          border-left: 4px solid #111;
          border-radius: 50% 50% 50% 50%;
          transform: rotate(16deg);
        }

        .scribble-left::after {
          left: -22px;
          border-left-color: #ff7b7b;
          transform: rotate(12deg);
        }

        .team-row {
          margin-top: 44px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 24px;
          flex-wrap: wrap;
        }

        .circle-photo {
          background-size: cover;
          background-position: center;
          border-radius: 50%;
          flex: 0 0 auto;
          box-shadow: 0 0 0 10px rgba(255,255,255,0.0);
        }

        .section {
          position: relative;
          margin-top: 110px;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }

        .section-title {
          font-size: clamp(1.2rem, 3vw, 2.5rem);
          line-height: 1.12;
          letter-spacing: -0.055em;
          font-weight: 500;
          margin: 0 0 18px;
          color: #000;
          word-break: break-word;
        }

        .orange-underline,
        .small-underline {
          position: relative;
          display: inline-block;
        }

        .orange-underline::after,
        .small-underline::after {
          content: "";
          position: absolute;
          left: -0.02em;
          right: -0.02em;
          bottom: 0.1em;
          height: 0.12em;
          border-radius: 999px;
          background: #efbb43;
          z-index: -1;
        }

        .section-copy {
          font-size: 14px;
          line-height: 1.55;
          color: #222;
          max-width: 480px;
          margin-bottom: 24px;
        }

        .read-more {
          font-size: 12px;
          color: #111;
          text-decoration: none;
          position: relative;
          display: inline-block;
          padding-right: 64px;
        }

        .read-more::after {
          content: "";
          position: absolute;
          left: calc(100% - 54px);
          top: 50%;
          width: 54px;
          height: 1px;
          background: #111;
        }

        .big-round-photo {
          width: min(100%, 450px);
          max-width: 100vw;
          aspect-ratio: 1;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          min-width: 180px;
        }

        .pink-card {
          position: absolute;
          width: 115px;
          height: 115px;
          background: #ff7d7d;
          transform: rotate(16deg);
          right: -14px;
          top: 42px;
          z-index: -1;
        }

        .triangle {
          width: 0;
          height: 0;
          border-left: 28px solid transparent;
          border-right: 28px solid transparent;
          border-bottom: 50px solid #ff7a7a;
          position: absolute;
        }

        .triangle.one { left: -10px; top: 120px; transform: rotate(-1deg); }
        .triangle.two { left: 170px; bottom: -36px; }

        .curve-line {
          position: absolute;
          pointer-events: none;
        }

        .curve-line svg {
          overflow: visible;
        }

        .curve-1 {
          left: 37%;
          top: 255px;
          width: 700px;
          height: 380px;
        }

        .curve-2 {
          right: -120px;
          top: 1040px;
          width: 430px;
          height: 250px;
        }

        .offers {
          margin-top: 150px;
        }

        .offers-head {
          max-width: 520px;
          margin-bottom: 46px;
        }

        .offers-table {
          border-top: 1px solid rgba(0,0,0,0.18);
        }

        .offer-row {
          display: grid;
          grid-template-columns: 220px 1fr 44px;
          gap: 28px;
          align-items: center;
          padding: 22px 0;
          border-bottom: 1px solid rgba(0,0,0,0.18);
        }

        .offer-small {
          font-size: 13px;
          line-height: 1.35;
          color: #333;
          max-width: 180px;
        }

        .offer-title {
          font-size: clamp(24px, 3vw, 44px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 500;
        }

        .arrow {
          font-size: 28px;
          text-align: right;
        }

        .sticker {
          position: absolute;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #ffe600 0 30%, #f39a00 31% 64%, #d71313 65% 100%);
          right: 240px;
          top: 212px;
          display: grid;
          place-items: center;
          font-size: 14px;
          font-weight: 700;
          transform: rotate(-8deg);
        }

        .testimonial {
          margin-top: 130px;
          position: relative;
          min-height: 430px;
        }

        .testimonial-title {
          text-align: center;
          font-size: clamp(28px, 4vw, 54px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 500;
          margin-bottom: 36px;
          color: #000;
        }

        .quote-box {
          width: min(640px, calc(100% - 40px));
          margin: 0 auto;
          background: #dfe5df;
          border-radius: 32px;
          padding: 40px 54px;
          text-align: center;
          font-size: 16px;
          line-height: 1.6;
          color: #222;
          position: relative;
        }

        .quote-box::before,
        .quote-box::after {
          position: absolute;
          color: rgba(0,0,0,0.18);
          font-size: 90px;
          line-height: 1;
          font-family: Georgia, serif;
        }

        .quote-box::before {
          content: "“";
          left: 16px;
          top: 2px;
        }

        .quote-box::after {
          content: "”";
          right: 22px;
          bottom: -28px;
        }

        .face-pos {
          position: absolute;
        }

        .newsletter {
          margin-top: 120px;
          background: #d7e6d7;
          padding: 90px 0 44px;
          position: relative;
        }

        .newsletter .container {
          position: relative;
        }

        .newsletter-title {
          text-align: center;
          font-size: clamp(44px, 7vw, 88px);
          line-height: 0.94;
          letter-spacing: -0.055em;
          font-weight: 500;
          margin: 0;
          color: #000;
        }

        .newsletter-sub {
          text-align: center;
          margin-top: 16px;
          font-size: 12px;
        }

        .cta {
          display: block;
          width: fit-content;
          margin: 24px auto 64px;
          padding: 14px 30px;
          border-radius: 999px;
          background: #111;
          color: white;
          text-decoration: none;
          font-size: 13px;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .cta:hover {
          background: #ff7d7d;
          color: #fff;
          box-shadow: 0 4px 18px 0 rgba(255,125,125,0.18);
        }

        .footer-line {
          border-top: 1px solid rgba(0,0,0,0.55);
          padding-top: 34px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 36px;
          margin-bottom: 52px;
          text-align: center;
        }

        .footer-col h4 {
          margin: 0 0 18px;
          font-size: 14px;
          font-weight: 500;
        }

        .footer-col {
          font-size: 12px;
          line-height: 2;
        }

        .copyright {
          text-align: center;
          font-size: 11px;
          padding: 26px 0 8px;
        }

        .newsletter .purple-blob {
          right: 24px;
          top: 80px;
          width: 96px;
          height: 140px;
          transform: rotate(16deg);
          border-radius: 53% 47% 60% 40% / 35% 56% 44% 65%;
        }

        .newsletter-scribble {
          position: absolute;
          left: 36%;
          top: 28px;
          width: 120px;
          height: 60px;
        }

        .newsletter-scribble svg,
        .curve-line svg {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1100px) {
          .container { padding-left: 20px; padding-right: 20px; }
          .two-col { gap: 20px; }
          .display { font-size: 2rem; }
        }
        @media (max-width: 900px) {
          .container { padding-left: 8px; padding-right: 8px; }
          .nav-links { display: none; }
          .two-col { grid-template-columns: 1fr; gap: 16px; }
          .big-round-photo { margin: 0 auto; width: 90vw; max-width: 90vw; min-width: 120px; }
          .curve-1, .curve-2, .scribble-left, .sticker { display: none; }
          .offer-row { grid-template-columns: 1fr 34px; }
          .offer-small { grid-column: 1 / -1; max-width: none; }
          .footer-grid { grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
          .testimonial { min-height: auto; padding-bottom: 60px; }
          .face-pos { transform: scale(0.84); }
          .newsletter-title { font-size: 22px; }
        }
        @media (max-width: 700px) {
          .container { padding-left: 2vw; padding-right: 2vw; }
          .display { font-size: 1.1rem; max-width: 99vw; }
          .section-title { font-size: 1rem; }
          .big-round-photo { width: 98vw; max-width: 98vw; min-width: 80px; }
          .team-row { gap: 4px; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 6px; }
          .quote-box { padding: 8px 1vw; font-size: 11px; }
          .newsletter { padding-top: 16px; padding-bottom: 8px; }
          .newsletter-title { font-size: 13px; }
        }
      `}</style>

      <div className="site">
        <div className="container">
          <header className="nav">
            <div className="brand">Elementum</div>
            <nav className="nav-links">
              <a href="#">Home</a>
              <a href="#">Studio</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
              <a href="#">FAQs</a>
            </nav>
            <div
              className="menu-icon"
              onClick={() => {
                if (window.innerWidth <= 900) setMobileMenuOpen(true);
              }}
              aria-label="Open menu"
              tabIndex={0}
              role="button"
            >
              <div className="menu-icon-bar top" />
              <div className="menu-icon-bar bottom" />
            </div>
          </header>
          {/* Mobile Menu */}
          <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`}>
            <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">×</button>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Studio</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
          </div>

          <section className="hero">
            <div className="scribble-left" />
            <div className="purple-blob" />
            <h1 className="display poppins">
              The <span className="under-orange poppins">thinkers</span> and<br />
              doers were <span className="pink-pill poppins">changing</span><br />
              the <span className="green-pill poppins">status</span> Quo with
            </h1>
            <p className="hero-sub">
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>

            <div className="team-row">
              <CirclePhoto src={teamImages[0]} size={98} style={{ transform: "translateY(46px)" }} />
              <CirclePhoto src={teamImages[1]} size={82} style={{ transform: "translateY(12px)" }} />
              <CirclePhoto src={teamImages[2]} size={110} style={{ transform: "translateY(-8px)" }} />
              <CirclePhoto src={teamImages[3]} size={92} style={{ transform: "translateY(38px)" }} />
              <CirclePhoto src={teamImages[4]} size={120} style={{ transform: "translateY(6px)" }} />
              <CirclePhoto src={teamImages[5]} size={94} style={{ transform: "translateY(28px)" }} />
              <CirclePhoto src={teamImages[6]} size={110} style={{ transform: "translateY(8px)" }} />
            </div>
          </section>

          <div className="curve-line curve-1">
            <svg viewBox="0 0 700 380" fill="none">
              <path d="M7 332C116 345 161 302 197 247C239 181 283 168 350 168C422 168 471 213 519 196C582 174 604 85 694 70" stroke="#ff7d7d" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          <section className="section two-col">
            <div>
              <h2 className="section-title poppins">
                <span className="orange-underline poppins">Tomorrow</span> should
                <br />
                be better than <span className="heading-pill poppins">today</span>
              </h2>
              <p className="section-copy">
                We are a team of strategists, designers communicators, researchers,
                Together, we believe that progress only happens when you refuse to
                play things safe.
              </p>
              <a href="#" className="read-more">Read more</a>
            </div>

            <div className="big-round-photo" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80)` }}>
              <div className="pink-card" />
            </div>
          </section>

          <section className="section two-col" style={{ marginTop: 100 }}>
            <div style={{ position: "relative" }}>
              <div className="triangle one" />
              <div className="triangle two" />
              <div className="big-round-photo" style={{ marginLeft: 0, backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80)` }} />
            </div>
            <div>
              <h2 className="section-title poppins">
                <span className="heading-pill poppins">See</span> how we can
                <br />
                help you <span className="orange-underline poppins">progres</span>
              </h2>
              <p className="section-copy">
                We add a layer of fearless insights and action that allows change
                makers to accelerate their progress in areas such as brand, design,
                digital, comms and social research.
              </p>
              <a href="#" className="read-more">Read more</a>
            </div>
          </section>

          <div className="curve-line curve-2">
            <svg viewBox="0 0 430 250" fill="none">
              <path d="M8 39C22 65 58 75 111 58C194 31 234 95 289 105C348 115 380 88 430 17" stroke="#ff7d7d" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>

          <section className="offers">
            <div className="offers-head">
              <h2 className="section-title poppins">
                What we <span className="heading-pill poppins">can</span>
                <br />
                <span className="orange-underline poppins">offer</span> you!
              </h2>
            </div>

            <div className="offers-table">
              {offerRows.map((row, index) => (
                  <div className="offer-row" key={index}>
                    <div className="offer-small poppins">{row.left}</div>
                    <div className="offer-title poppins">{row.right}</div>
                    <div className="arrow">→</div>
                  </div>
              ))}
            </div>
            <div className="sticker">content</div>
          </section>

          <section className="testimonial">
            <h2 className="testimonial-title poppins">
              <span className="heading-pill poppins">What</span> our customer
              <br />
              says <span className="small-underline poppins">About Us</span>
            </h2>

            <div className="quote-box">
              Elementum delivered the site with its intended timeline as they
              requested. Since then, the client found a 50% increase in traffic
              with 12 days since its launch. They also had an impressive ability
              to use technologies that the company hadn&apos;t used, which have also
              proved to be easy to use and reliable.
            </div>

            <CirclePhoto src={testimonialFaces[0]} size={62} className="face-pos" style={{ left: 10, top: 164 }} />
            <CirclePhoto src={testimonialFaces[1]} size={108} className="face-pos" style={{ left: 78, top: 238 }} />
            <CirclePhoto src={testimonialFaces[2]} size={52} className="face-pos" style={{ left: 0, top: 312 }} />
            <CirclePhoto src={testimonialFaces[3]} size={58} className="face-pos" style={{ right: 98, top: 174 }} />
            <CirclePhoto src={testimonialFaces[4]} size={74} className="face-pos" style={{ right: 16, top: 126 }} />
            <CirclePhoto src={testimonialFaces[5]} size={140} className="face-pos" style={{ right: -8, top: 304 }} />
          </section>
        </div>

        <section className="newsletter">
          <div className="purple-blob" />
          <div className="newsletter-scribble">
            <svg viewBox="0 0 120 60" fill="none">
              <path d="M7 44C27 32 35 56 52 35C66 18 74 23 90 12" stroke="#ff7d7d" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M37 48C57 36 65 60 82 39C96 22 104 27 116 16" stroke="#ff7d7d" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="container">
            <h2 className="newsletter-title poppins">
              Subscribe to
              <br />
              our newsletter
            </h2>
            <div className="newsletter-sub">
              To make your stay special and even more memorable
            </div>
            <a href="#" className="cta">Subscribe Now</a>

              <div className="footer-line">
                <div className="footer-grid" style={{ textAlign: 'center' }}>
                  <div className="footer-col">
                    <h4>Company</h4>
                    <a href="#">Home</a><br />
                    <a href="#">Studio</a><br />
                    <a href="#">Service</a><br />
                    <a href="#">Blog</a>
                  </div>
                  <div className="footer-col">
                    <h4>Terms & Policies</h4>
                    <a href="#">Privacy Policy</a><br />
                    <a href="#">Terms & Conditions</a><br />
                    <a href="#">Explore</a><br />
                    <a href="#">Accessibility</a>
                  </div>
                  <div className="footer-col">
                    <h4>Follow Us</h4>
                    <a href="#">Instagram</a><br />
                    <a href="#">LinkedIn</a><br />
                    <a href="#">Youtube</a><br />
                    <a href="#">Twitter</a>
                  </div>
                  <div className="footer-col">
                    <h4>Contact</h4>
                    <div>1459 W Fulton st, STE</div>
                    <div>2D Chicago, IL 60607</div>
                    <div style={{ marginTop: 10 }}>+(234) 5678900</div>
                    <div>info@elementum.com</div>
                  </div>
                </div>
                <div className="copyright">©2026 Elementum. All rights reserved</div>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}