---
layout: null
---
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f7f5ef">
    <meta name="description" content="PhD student at Rutgers University.">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Mursalin Habib">
    <meta property="og:description" content="PhD student at Rutgers University.">
    <meta property="og:url" content="https://mh7111997.github.io/">
    <meta property="og:image" content="https://mh7111997.github.io/files/social-preview.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Mursalin Habib — PhD student at Rutgers University.">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Mursalin Habib">
    <meta name="twitter:description" content="PhD student at Rutgers University.">
    <meta name="twitter:image" content="https://mh7111997.github.io/files/social-preview.png">
    <meta name="twitter:image:alt" content="Mursalin Habib — PhD student at Rutgers University.">
    <link rel="canonical" href="https://mh7111997.github.io/">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&amp;display=swap">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/academicons/1.9.4/css/academicons.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="{{ '/styles.css' | relative_url }}">
    <title>Mursalin Habib</title>
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>

    <div class="page-shell">
      <header class="hero">
        <div class="hero-copy">
          <h1>Mursalin Habib</h1>
          <p class="tagline">PhD student in Computer Science at Rutgers University.</p>

          <nav class="contact" aria-label="Contact and profile links">
            <a class="email-link" href="mailto:mursalin.habib@rutgers.edu"><i class="fa-solid fa-envelope" aria-hidden="true"></i><span class="email-address">mursalin.habib@rutgers.edu</span></a>
            <a class="icon-link" href="https://scholar.google.com/citations?user=W7Ai-u8AAAAJ&amp;hl=en&amp;oi=ao" aria-label="Google Scholar" title="Google Scholar"><i class="ai ai-google-scholar" aria-hidden="true"></i></a>
            <a class="icon-link" href="https://dblp.org/pid/52/7354-1.html" aria-label="DBLP" title="DBLP"><i class="ai ai-dblp" aria-hidden="true"></i></a>
            <a class="icon-link" href="{{ '/files/CV_Mursalin.pdf' | relative_url }}" aria-label="Curriculum vitae" title="CV"><i class="fa-solid fa-file-lines" aria-hidden="true"></i></a>
          </nav>
        </div>

        <img
          class="profile-photo"
          src="{{ '/files/website-photo-2.png' | relative_url }}"
          alt="Portrait of Mursalin Habib"
          width="862"
          height="831"
          decoding="async"
        >
      </header>

      <main id="main-content">
        <section class="content-section" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <div class="section-content prose">
            <p>
              I am a fourth-year PhD student in the Computer Science Department at
              <a href="https://www.rutgers.edu/">Rutgers University</a>, where I am part of the
              <a href="https://theory.cs.rutgers.edu/">CS Theory Group</a> and advised by
              <a href="https://cskarthikcs.github.io/">Karthik C. S.</a>
              My current interests are mainly in error-correcting codes and fine-grained complexity.
            </p>
            <p>
              Before coming to Rutgers, I was an undergraduate student in the
              <a href="https://cse.buet.ac.bd/">Computer Science &amp; Engineering Department</a> at
              <a href="https://www.buet.ac.bd/">Bangladesh University of Engineering and Technology</a>.
            </p>
            {% comment %}
            <p>
              In Summer 2026, I am visiting the University of Illinois Urbana-Champaign, hosted by
              <a href="https://granha.github.io/">Fernando Granha Jeronimo</a>.
            </p>
            {% endcomment %}
          </div>
        </section>

        <section class="content-section" id="publications" aria-labelledby="publications-heading">
          <h2 id="publications-heading">Publications</h2>
          <div class="section-content publication-groups">
            <div class="publication-group">
              <h3>Preprints</h3>
              <ol class="publication-list">
                {% for pub in site.data.publications.preprints %}
                  <li>
                    <article class="publication">
                      <h4>{{ pub.title }}</h4>
                      {% if pub.authors and pub.authors != "" %}
                        <p class="publication-authors">{{ pub.authors }}</p>
                      {% endif %}
                      {% if pub.venue and pub.venue != "" or pub.year %}
                        <p class="publication-meta">
                          {% if pub.venue and pub.venue != "" %}<span>{{ pub.venue }}</span>{% endif %}
                          {% if pub.year %}<span>{{ pub.year }}</span>{% endif %}
                        </p>
                      {% endif %}
                      {% if pub.journal and pub.journal != "" %}
                        <p class="publication-journal">{{ pub.journal }}</p>
                      {% endif %}
                      {% if pub.notes and pub.notes.size > 0 %}
                        <ul class="publication-notes" aria-label="Special notes for {{ pub.title }}">
                          {% for note in pub.notes %}
                            <li>{{ note }}</li>
                          {% endfor %}
                        </ul>
                      {% endif %}
                      {% if pub.links and pub.links.size > 0 %}
                        <nav class="publication-links" aria-label="Links for {{ pub.title }}">
                          {% for link in pub.links %}
                            <a href="{{ link.url }}"><i class="{{ link.icon }}" aria-hidden="true"></i><span>{{ link.label }}</span></a>
                          {% endfor %}
                        </nav>
                      {% endif %}
                    </article>
                  </li>
                {% endfor %}
              </ol>
            </div>

            <div class="publication-group">
              <h3>Published papers</h3>
              <ol class="publication-list">
                {% for pub in site.data.publications.published %}
                  <li>
                    <article class="publication">
                      <h4>{{ pub.title }}</h4>
                      {% if pub.authors and pub.authors != "" %}
                        <p class="publication-authors">{{ pub.authors }}</p>
                      {% endif %}
                      {% if pub.venue and pub.venue != "" or pub.year %}
                        <p class="publication-meta">
                          {% if pub.venue and pub.venue != "" %}<span>{{ pub.venue }}</span>{% endif %}
                          {% if pub.year %}<span>{{ pub.year }}</span>{% endif %}
                        </p>
                      {% endif %}
                      {% if pub.journal and pub.journal != "" %}
                        <p class="publication-journal">{{ pub.journal }}</p>
                      {% endif %}
                      {% if pub.notes and pub.notes.size > 0 %}
                        <ul class="publication-notes" aria-label="Special notes for {{ pub.title }}">
                          {% for note in pub.notes %}
                            <li>{{ note }}</li>
                          {% endfor %}
                        </ul>
                      {% endif %}
                      {% if pub.links and pub.links.size > 0 %}
                        <nav class="publication-links" aria-label="Links for {{ pub.title }}">
                          {% for link in pub.links %}
                            <a href="{{ link.url }}"><i class="{{ link.icon }}" aria-hidden="true"></i><span>{{ link.label }}</span></a>
                          {% endfor %}
                        </nav>
                      {% endif %}
                    </article>
                  </li>
                {% endfor %}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Last updated August 2026</span>
        <span>© Mursalin Habib</span>
      </footer>
    </div>
  </body>
</html>
