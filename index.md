<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>{{ page.title | default: site.title }}</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/academicons/1.9.4/css/academicons.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
</head>


  
  <style>
    :root {
      --accent: #0b5fff;
      --text: #111;
      --muted: #606770;
      --bg-soft: #f7f9fc;
      --maxw: 920px;
    }

    html { scroll-behavior: smooth; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol", system-ui;
      color: var(--text);
      line-height: 1.55;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }



    /* Top nav */
    .topbar {
      position: sticky; top: 0; z-index: 10;
      background: #fff; border-bottom: 1px solid #eee;
    }
    .topbar-inner {
      max-width: var(--maxw); margin: 0 auto; padding: 10px 16px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 16px;
    }
    .brand {
      font-weight: 700; letter-spacing: .2px;
    }
    .nav a {
      text-decoration: none; color: var(--text); margin-left: 16px;
      font-weight: 500;
    }
    .nav a:hover { color: var(--accent); }

    .container { max-width: var(--maxw); margin: 0 auto; padding: 28px 16px 64px; }

    /* Header / hero */
    .header-section {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 24px;
      align-items: start;
      margin-bottom: 16px;
    }
    .profile-photo {
      width: 190px; height: auto; border-radius: 12px;
      box-shadow: 0 6px 18px rgba(0,0,0,.08);
    }
    .name { font-size: 2rem; margin: 0 0 4px; }
    .tagline { color: var(--muted); margin: 4px 0 10px; }
    .contact a {
      color: var(--text); text-decoration: none; border-bottom: 1px dotted #bbb;
    }
    .contact a:hover { color: var(--accent); border-bottom-color: var(--accent); }

    /* Section headings */
    h2 {
      margin-top: 28px; margin-bottom: 10px; font-size: 1.4rem;
      padding-top: 8px; border-top: 1px solid #eee;
    }

    /* Callouts / soft blocks */
    .soft {
      background: var(--bg-soft);
      border: 1px solid #e7edf8;
      padding: 12px 14px;
      border-radius: 10px;
    }

    /* Publications */
    .pubs { list-style: none; padding: 0; margin: 10px 0 0; }
    .pubs li { margin: 10px 0 14px; }
    .pub-title a { font-weight: 600; text-decoration: none; }
    .pub-title a:hover { color: var(--accent); }
    .pub-authors { color: var(--muted); }
    .pub-venue { font-weight: 600; }
    .pub-links a {
      text-decoration: none; margin-right: 10px; font-size: .95rem;
    }
    .pub-links a:hover { color: var(--accent); }

    /* Footer */
    footer { margin-top: 48px; color: var(--muted); font-size: .95rem; }

    /* Images never overflow */
img { max-width: 100%; height: auto; }

/* Long links/addresses can wrap */
.contact, .pub-title, .pub-authors { word-break: break-word; }

/* Mobile layout */
@media (max-width: 720px) {
  .container { padding: 20px 14px 40px; }
  .header-section {
    display: grid;
    grid-template-columns: 1fr;     /* stack text + photo */
    gap: 16px;
    align-items: center;
    text-align: left;
  }
  .profile-photo {
    width: 140px;      /* smaller on phones */
    border-radius: 12px;
    justify-self: start;
  }
  .name { font-size: 1.8rem; }
  .tagline { margin-top: 2px; }

  /* Let contact items wrap instead of forcing horizontal scroll */
  .contact { display: flex; flex-wrap: wrap; gap: 8px 14px; }
  .contact a { border-bottom: 1px dotted #ccc; }
}

/* Very small phones */
@media (max-width: 360px) {
  .name { font-size: 1.6rem; }
}

/* Make long text wrap nicely everywhere */
p, li, .pub-title, .pub-authors, .contact { overflow-wrap: anywhere; }

/* Contact row: flexible, wraps, and has lightweight separators */
.contact {
  display: flex; flex-wrap: wrap; align-items: center;
  gap: 8px 14px;
}
.contact .sep { color: #b8b8b8; }
.contact a { border-bottom: 1px dotted #bbb; }

/* On narrow phones, hide separators (dots) to save room */
@media (max-width: 480px) {
  .contact .sep { display: none; }
}

/* Ensure the header grid never forces a wide column on mobile */
@media (max-width: 720px) {
  .header-section { grid-template-columns: 1fr; }
  .profile-photo { width: 140px; }
}

    /* Make widths behave and allow wrapping everywhere */
* { box-sizing: border-box; }

/* Container never exceeds viewport */
.container { width: min(100%, var(--maxw)); }

/* Let grid/flex children shrink instead of pushing the page wider */
.header-section > * { min-width: 0; }  /* critical for text wrapping in CSS Grid */

/* Never let common blocks exceed the viewport */
section, p, ul, .pubs, .pub-title, .pub-authors { max-width: 100%; }

/* Wrap long tokens (emails, long names, links) */
/* Natural wrapping + hyphenation for long words */
p, li, a, .pub-title, .pub-authors {
  word-break: normal;           /* don't break mid-grapheme by default */
  overflow-wrap: normal;        /* prefer normal wrapping */
  hyphens: auto;                /* ← allow auto-hyphenation */
  -webkit-hyphens: auto;        /* Safari/Chrome */
  -ms-hyphens: auto;            /* old Edge */
}

/* Images scale down */
img { max-width: 100%; height: auto; }



  </style>



<div class="container">

  <div class="header-section">
    <div>
      <h1 class="name">Mursalin Habib</h1>
      <div class="tagline">PhD student @ Rutgers University</div>
      <div class="contact">
        <a href="mailto:mursalin.habib@rutgers.edu"><i class="fa-solid fa-envelope"></i> mursalin.habib@rutgers.edu</a>
        <span class="sep">·</span>
        <span class="loc"><i class="fa-solid fa-location-dot"></i> Hill 427</span>
        <span class="sep">·</span>
        <a href="https://scholar.google.com/citations?user=W7Ai-u8AAAAJ&hl=en&oi=ao" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>
        <a href="https://dblp.org/pid/52/7354-1.html" title="DBLP"><i class="ai ai-dblp"></i></a>
      </div>
    </div>
    <img src="/files/website-photo.jpg" alt="Mursalin Habib" class="profile-photo">
  </div>

  <section id="about">
    <h2>About Me</h2>
    <p>
      I am a third-year PhD student in the
      <a href="https://theory.cs.rutgers.edu/">CS Theory Group</a> at
      <a href="https://www.rutgers.edu/">Rutgers University</a>, advised by
      <a href="https://cskarthikcs.github.io/">Karthik C. S.</a>
      My current interests are mainly in error-correcting codes and fine-grained complexity. My CV can be found <a href = "/files/CV_Mursalin.pdf"> here</a>.
    </p>
    <p>
      Before coming to Rutgers, I was an undergraduate student in the
      <a href="https://cse.buet.ac.bd/">Computer Science &amp; Engineering Department</a> at
      <a href="https://www.buet.ac.bd/">Bangladesh University of Engineering and Technology</a>.
    </p>
  </section>


  <section id="publications">
  <h2>Publications</h2>

  <h3>Preprints</h3>
  <ul class="pubs">
    {% for pub in site.publications.preprints %}
      <li>
        <div class="pub-title"><b>{{ pub.title }}</b></div>
        {% if pub.authors and pub.authors != "" %}
          <div class="pub-authors">{{ pub.authors }}</div>
        {% endif %}
        {% if pub.venue and pub.venue != "" %}
          <div>
            <span class="pub-venue">{{ pub.venue }}</span>
            {% if pub.year %} {{ pub.year }}.{% endif %}
          </div>
        {% endif %}
        {% if pub.note and pub.note != "" %}
          <div>{{ pub.note }}</div>
        {% endif %}
        {% if pub.links and pub.links.size > 0 %}
          <div class="pub-links">
            {% for link in pub.links %}
              <a href="{{ link.url }}">
                <i class="{{ link.icon }}"></i> {{ link.label }}
              </a>
            {% endfor %}
          </div>
        {% endif %}
      </li>
    {% endfor %}
  </ul>

  <h3>Published Papers</h3>
  <ul class="pubs">
    {% for pub in site.publications.published %}
      <li>
        <div class="pub-title"><b>{{ pub.title }}</b></div>
        {% if pub.authors and pub.authors != "" %}
          <div class="pub-authors">{{ pub.authors }}</div>
        {% endif %}
        <div>
          {% if pub.venue and pub.venue != "" %}
            <span class="pub-venue">{{ pub.venue }}</span>
          {% endif %}
          {% if pub.year %} {{ pub.year }}.{% endif %}
        </div>
        {% if pub.note and pub.note != "" %}
          <div>{{ pub.note }}</div>
        {% endif %}
        {% if pub.links and pub.links.size > 0 %}
          <div class="pub-links">
            {% for link in pub.links %}
              <a href="{{ link.url }}">
                <i class="{{ link.icon }}"></i> {{ link.label }}
              </a>
            {% endfor %}
          </div>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</section>




  <footer>
    Last updated: <!-- update manually --> April 2026 • © Mursalin Habib
  </footer>
</div>
