export const portfolioHtml =
    `
       <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #0f0f11;
    color: #ffffff;
    padding: 20px;
  }

  .card {
    background-color: #1b1b1d;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 6px;
    color: #4da6ff;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #00d4ff;
    border-bottom: 1px solid #333;
    padding-bottom: 6px;
  }

  p {
    line-height: 20px;
    margin: 4px 0;
  }

  ul {
    padding-left: 18px;
  }

  li {
    margin-bottom: 6px;
    line-height: 20px;
  }

  .highlight {
    color: #4da6ff;
    font-weight: bold;
  }

  .badge {
    display: inline-block;
    background: #262626;
    padding: 6px 10px;
    margin: 4px 4px 4px 0;
    border-radius: 6px;
    font-size: 12px;
  }

</style>
</head>

<body>

<!-- HERO SECTION -->
<div class="card">
  <h1>sameer Khan</h1>
  <p>React Native Developer | Mobile App Specialist</p>
  <p>sameerbreezkhan@gmail.com</p>
  <p>+91 8770523530</p>
</div>

<!-- ABOUT -->
<div class="card">
  <h2>About Me</h2>
  <p>
    Passionate React Native Developer with 2+ years of experience 
    building scalable, production-ready mobile applications for 
    Android & iOS. Strong focus on performance, UI/UX, and clean architecture.
  </p>
</div>

<!-- SKILLS -->
<div class="card">
  <h2>Technical Skills</h2>

  <div>
    <span class="badge">React Native</span>
    <span class="badge">JavaScript</span>
    <span class="badge">TypeScript</span>
    <span class="badge">Redux Toolkit</span>
    <span class="badge">Context API</span>
    <span class="badge">Firebase</span>
    <span class="badge">GraphQL</span>
    <span class="badge">REST APIs</span>
    <span class="badge">SQLite</span>
    <span class="badge">Realm</span>
    <span class="badge">Git</span>
  </div>
</div>

<!-- EXPERIENCE -->
<div class="card">
  <h2>Experience</h2>

  <p class="highlight">React Native Developer — Iemosys Infotech</p>
  <p>Nov 2024 – Nov 2025</p>
  <ul>
    <li>Developed cross-platform mobile apps (iOS & Android)</li>
    <li>Implemented Push Notifications & Social Authentication</li>
    <li>Used Redux Toolkit & offline data persistence</li>
    <li>Integrated REST & GraphQL APIs</li>
  </ul>

  <br/>

  <p class="highlight">App Developer — Ample eBusiness</p>
  <p>Jan 2023 – Nov 2024</p>
  <ul>
    <li>Built responsive pixel-perfect UI</li>
    <li>Integrated Firebase & payment gateways</li>
    <li>Handled Play Store deployment</li>
  </ul>
</div>

<!-- PROJECTS -->
<div class="card">
  <h2>Projects</h2>

  <p class="highlight">iCue</p>
  <p>Health-based barcode scanning app with nutrition tracking.</p>

  <br/>

  <p class="highlight">Qamoos53</p>
  <p>Bilingual dictionary with translation & pronunciation support.</p>

  <br/>

  <p class="highlight">Kisaan Helpline</p>
  <p>Farmer support app with APIs, PDF viewer & content sharing.</p>

  <br/>

  <p class="highlight">Agrival</p>
  <p>Workforce management app with live attendance & tracking.</p>

  <br/>

  <p class="highlight">Urban Mop</p>
  <p>Home services app with animations & modern UI.</p>

  <br/>

  <p class="highlight">V-Listeners</p>
  <p>Storytelling platform for seniors with volunteer pairing.</p>

</div>

<!-- EDUCATION -->
<div class="card">
  <h2>Education</h2>
  <p class="highlight">Medicaps University</p>
  <p>Master of Computer Applications</p>
  <p>CGPA: 8.9</p>
</div>

</body>
</html>
       
       `
