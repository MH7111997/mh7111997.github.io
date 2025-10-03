<html lang="en">
<head>
  <meta charset="utf-8">
  <!-- <meta name="viewport" content="width=device-width,initial-scale=1"> -->
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
  </style>



<div class="container">

  <div class="header-section">
    <div>
      <h1 class="name">Mursalin Habib</h1>
      <div class="tagline">PhD student @ Rutgers University</div>
      <div class="contact">
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto:mursalin.habib@rutgers.edu">mursalin.habib@rutgers.edu</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;<i class="fa-solid fa-location-dot"></i> Hill 275
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <!-- Add/replace these with your actual links -->
        <a href="https://scholar.google.com/citations?user=W7Ai-u8AAAAJ&hl=en&oi=ao" title="Google Scholar"><i class="ai ai-google-scholar ai-lg"></i></a>
        <a href="https://dblp.org/pid/52/7354.html" title="DBLP"><i class="ai ai-dblp ai-lg"></i></a>
        <!-- <a href="https://dblp.org/" title="DBLP"><i class="ai ai-dblp ai-lg"></i></a> 
        <a href="https://github.com/" title="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a> -->
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

    <h3> Preprints </h3>
    <ul class="pubs">
      <li>
        <div class="pub-title">
            <b>Constant Rate Isometric Embeddings of Hamming Metric into Edit Metric</b> 
        </div>
        <div class="pub-authors">
           with Sudatta Bhattacharya, Sanjana Dey, Elazar Goldenberg, Bernhard Haeupler, Karthik C. S. and Michal Koucký
        </div>
        <div class="pub-links">
          <a href="https://arxiv.org/abs/2504.03605"><i class="ai ai-arxiv"></i> arXiv</a>
          <!-- Add code/slides when available:
          <a href="#"><i class="fa-solid fa-code"></i> code</a>
          <a href="#"><i class="fa-solid fa-file-powerpoint"></i> slides</a>
          -->
        </div>
      </li>
    </ul>

    <h3> Published Papers </h3>
    <ul class="pubs">
      <li>
        <div class="pub-title">
          <b>Algorithmic Improvements to List Decoding of Folded Reed-Solomon Codes</b>
        </div>
        <div class="pub-authors">with Vikrant Ashvinkumar and Shashank Srivastava</div>
        <div><span class="pub-venue">SODA</span> 2026.</div>
        <div class="pub-links">
          <a href="https://arxiv.org/abs/2508.12548"><i class="ai ai-arxiv"></i> arXiv</a>
        </div>
      </li>

      <li>
        <div class="pub-title">
          <b>Hardness of Median and Center in the Ulam Metric</b>
        </div>
        <div class="pub-authors">with Nick Fischer, Elazar Goldenberg and Karthik C. S.</div>
        <div><span class="pub-venue">ESA</span> 2025.</div>
        <div class="pub-links">
          <a href="https://arxiv.org/abs/2504.16437"><i class="ai ai-arxiv"></i> arXiv</a>
        </div>
      </li>

      <li>
        <div class="pub-title">
          <b>Explicit Good Codes Approaching Distance 1 in Ulam Metric</b>
        </div>
        <div class="pub-authors">with Elazar Goldenberg and Karthik C. S.</div>
        <div>
          <span class="pub-venue">ISIT</span> 2024. 
          <br> In <em>IEEE Transactions on Information Theory</em>,
          Volume 71, Issue 7, July 2025.
        </div>
        <div class="pub-links">
          <a href="https://arxiv.org/abs/2401.17235"><i class="ai ai-arxiv"></i> arXiv</a>
          <a href="https://ieeexplore.ieee.org/document/10982108"><i class="fa-solid fa-book-open"></i> Journal</a>
        </div>
      </li>
    </ul>
  </section>




  <footer>
    Last updated: <!-- update manually --> Oct 2025 • © Mursalin Habib
  </footer>
</div>
