<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Avinash Yandapalli — Interactive Frontend Portfolio</title>

  <!-- Tailwind & Chart.js -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">

  <style>
    :root{
      --teal: #0d9488;
      --slate-900: #0f172a;
      --muted: #64748b;
    }
    body{
      font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background: radial-gradient(1200px 600px at 10% 10%, rgba(13,148,136,0.06), transparent),
                  radial-gradient(1000px 500px at 90% 90%, rgba(59,130,246,0.04), transparent),
                  linear-gradient(180deg,#f8fafc 0%, #f1f5f9 100%);
      color: #0f172a;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }

    /* funky header blob */
    .blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(36px);
      opacity: 0.85;
      animation: floaty 8s ease-in-out infinite;
      transform-origin: center;
      mix-blend-mode: multiply;
    }
    .blob.b1{ width:300px; height:300px; background:linear-gradient(135deg,#0ea5a4,#60a5fa); top:-40px; left:-40px; animation-duration:9s;}
    .blob.b2{ width:220px; height:220px; background:linear-gradient(135deg,#7c3aed,#06b6d4); top:40px; right:-30px; animation-duration:7s;}
    .blob.b3{ width:160px; height:160px; background:linear-gradient(135deg,#f97316,#ef4444); bottom:-60px; left:20%; animation-duration:10s; opacity:0.6;}

    @keyframes floaty{
      0%{ transform: translateY(0) rotate(0deg) }
      50%{ transform: translateY(-18px) rotate(6deg) }
      100%{ transform: translateY(0) rotate(0deg) }
    }

    /* header micro-interaction */
    .intro-card{
      backdrop-filter: blur(8px);
      background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.4));
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(2,6,23,0.08);
      transition: transform .22s ease, box-shadow .22s ease;
    }
    .intro-card:hover{ transform: translateY(-6px) rotate(-0.5deg); box-shadow: 0 22px 60px rgba(2,6,23,0.12); }

    /* draggable project cards */
    .draggable{ cursor: grab; touch-action: none; }
    .draggable:active{ cursor: grabbing; }

    /* small additions */
    .accent { color: var(--teal); font-weight:700; }
    .muted { color: var(--muted); }

    /* timeline */
    .timeline-item { transition: transform .18s ease, background .18s ease; }
    .timeline-item:hover{ transform: translateX(8px); background: rgba(13,148,136,0.03); }

    /* small responsive fixes */
    @media (max-width: 768px){
      .blob{ display:none; }
    }
  </style>
</head>
<body>

  <!-- Floating decorative blobs -->
  <div class="blob b1"></div>
  <div class="blob b2"></div>
  <div class="blob b3"></div>

  <!-- Header -->
  <header class="sticky top-4 z-40 container mx-auto px-6">
    <div class="flex items-center justify-between">
      <a href="#home" class="text-lg md:text-xl font-bold tracking-tight text-slate-900">Avinash <span class="text-teal-600">Yandapalli</span></a>
      <nav class="hidden md:flex gap-4 items-center">
        <a href="#about" class="muted hover:accent">About</a>
        <a href="#skills" class="muted hover:accent">Skills</a>
        <a href="#experience" class="muted hover:accent">Experience</a>
        <a href="#projects" class="muted hover:accent">Projects</a>
        <a href="#contact" class="px-3 py-1 bg-teal-600 text-white rounded-full shadow">Contact</a>
      </nav>

      <!-- mobile -->
      <div class="md:hidden">
        <button id="openMenu" class="p-2 rounded-md bg-white/60 shadow">☰</button>
      </div>
    </div>
    <div id="mobilePanel" class="hidden mt-3 bg-white/70 p-3 rounded-lg shadow-md">
      <div class="flex flex-col gap-2">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </header>

  <!-- Main -->
  <main class="container mx-auto px-6 py-12">

    <!-- Hero / Home -->
    <section id="home" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="intro-card p-8 rounded-2xl relative overflow-hidden">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">I build playful, usable frontends — and the tiny backend bits that keep them honest.</h1>
        <p class="mt-4 text-lg muted">I’m a frontend-first engineer experienced in React & TypeScript, with full-stack experience (ASP.NET Core, FastAPI, Spring Boot) and cloud knowledge to ship features end-to-end. I enjoy translating complex data and workflows into delightful user experiences that feel effortless.</p>

        <div class="mt-6 flex gap-3 items-center">
          <a class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow text-sm font-semibold" href="mailto:yandapalliavinash@gmail.com">✉️ Email</a>
          <a class="inline-flex items-center gap-2 px-4 py-2 border rounded-full shadow text-sm font-semibold" href="https://github.com/1149" target="_blank">💻 GitHub</a>
          <a class="inline-flex items-center gap-2 px-4 py-2 border rounded-full shadow text-sm font-semibold" href="https://www.linkedin.com/in/avinashy-233153257" target="_blank">🔗 LinkedIn</a>
        </div>

        <!-- playful quick facts -->
        <div class="mt-6 grid grid-cols-3 gap-3">
          <div class="p-3 text-center bg-slate-50 rounded-lg">
            <div class="text-sm muted">Location</div>
            <div class="font-bold">Herndon, VA</div>
          </div>
          <div class="p-3 text-center bg-slate-50 rounded-lg">
            <div class="text-sm muted">Experience</div>
            <div class="font-bold">1+ years</div>
          </div>
          <div class="p-3 text-center bg-slate-50 rounded-lg">
            <div class="text-sm muted">Focus</div>
            <div class="font-bold">Web & Mobile UI</div>
          </div>
        </div>
      </div>

      <!-- animated mini card / skill badge -->
      <div class="p-6 rounded-2xl bg-white shadow-lg">
        <h3 class="text-xl font-semibold">Frontend toolkit</h3>
        <p class="muted mt-1">React • TypeScript • Tailwind • Material UI • Accessibility</p>

        <div class="mt-6">
          <canvas id="miniSkillChart" width="400" height="360"></canvas>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3">
          <div class="p-3 rounded-lg bg-slate-50">
            <div class="muted text-sm">Mobile Friendly</div>
            <div class="font-semibold">Web + Mobile patterns</div>
          </div>
          <div class="p-3 rounded-lg bg-slate-50">
            <div class="muted text-sm">End-to-end</div>
            <div class="font-semibold">Frontend + Backend</div>
          </div>
        </div>

        <div class="mt-6 text-sm muted">Looking for roles that sit at the intersection of product, design, and performance — like the Community Discovery & Engagement team at Twitch.</div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="mt-12">
      <div class="grid md:grid-cols-3 gap-6">
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold">About me</h2>
          <p class="mt-4 muted">I like to ship features that people actually use. Lately that has meant building responsive dashboards and realtime interfaces using React, wiring them to pragmatic backend services (FastAPI, .NET Core), and making sure the whole thing runs reliably in cloud environments. I enjoy collaborating with product and design — I find the best products are built when engineers ask “why” as often as “how.”</p>

          <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li class="bg-slate-50 p-3 rounded-lg"><strong>React & TypeScript</strong><div class="muted text-sm">Component-driven UIs, hooks, state patterns</div></li>
            <li class="bg-slate-50 p-3 rounded-lg"><strong>Full-stack</strong><div class="muted text-sm">APIs (FastAPI, Spring Boot, .NET), DB integrations</div></li>
            <li class="bg-slate-50 p-3 rounded-lg"><strong>Cloud</strong><div class="muted text-sm">AWS Lambda, S3, Glue; CI/CD</div></li>
            <li class="bg-slate-50 p-3 rounded-lg"><strong>AI/ML basics</strong><div class="muted text-sm">RAG, LLMs (Google Gemini), semantic search</div></li>
          </ul>
        </div>

        <!-- playful "why hire me" -->
        <div class="p-6 bg-white rounded-2xl shadow-md">
          <h3 class="text-lg font-semibold">Why I fit Twitch</h3>
          <ul class="mt-3 muted list-disc list-inside space-y-2">
            <li>Hands-on React work for consumer-facing dashboards and interactive modules.</li>
            <li>Experience shipping frontend features integrated with backend services and cloud infra.</li>
            <li>Comfortable with mobile/responsive patterns — I think in components that work everywhere.</li>
            <li>Care about delightful UX and fast iteration cycles with product and designers.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Skills: radar + interactive filter -->
    <section id="skills" class="mt-12">
      <h2 class="text-2xl font-bold">Technical Skills</h2>
      <p class="muted mt-2">An honest view of where I spend my time — frontend first, with backend & infra to back it up.</p>

      <div class="mt-6 grid md:grid-cols-2 gap-6 items-center">
        <div class="bg-white p-6 rounded-2xl shadow-md">
          <canvas id="skillsChart" width="500" height="420"></canvas>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-md">
          <h3 class="font-semibold">Filter skills</h3>
          <div id="skillButtons" class="flex gap-2 flex-wrap mt-4">
            <button data-cat="all" class="px-3 py-1 rounded-full bg-teal-600 text-white">All</button>
            <button data-cat="frontend" class="px-3 py-1 rounded-full border">Frontend</button>
            <button data-cat="backend" class="px-3 py-1 rounded-full border">Backend</button>
            <button data-cat="cloud" class="px-3 py-1 rounded-full border">Cloud</button>
            <button data-cat="ai" class="px-3 py-1 rounded-full border">AI/ML</button>
          </div>

          <div id="skillList" class="mt-4 text-sm muted">
            <!-- populated by JS -->
          </div>
        </div>
      </div>
    </section>

    <!-- Experience: clickable vertical timeline -->
    <section id="experience" class="mt-12">
      <h2 class="text-2xl font-bold">Professional Experience</h2>
      <div class="mt-6 grid md:grid-cols-3 gap-6">
        <div id="timelineNav" class="space-y-3">
          <!-- populated by JS -->
        </div>
        <div id="timelinePanel" class="md:col-span-2 bg-white p-6 rounded-2xl shadow-md">
          <!-- populated by JS -->
        </div>
      </div>
    </section>

    <!-- Projects: draggable, interactive cards -->
    <section id="projects" class="mt-12">
      <h2 class="text-2xl font-bold">Selected Projects</h2>
      <p class="muted mt-2">Small, real projects where I built UIs and engineering glue.</p>

      <div class="mt-6 grid md:grid-cols-2 gap-6">
        <!-- Project 1 -->
        <article class="draggable bg-white p-6 rounded-2xl shadow-lg" draggable="true" data-title="Regulatory Compliance AI Assistant">
          <h3 class="text-lg font-semibold">Regulatory Compliance AI Assistant</h3>
          <div class="muted text-sm mt-1">React • FastAPI • PostgreSQL • Google Gemini • RAG</div>
          <p class="mt-3 muted">Built a question-answer assistant using a retrieval-augmented architecture—semantic search over uploaded policies and a React UI for contextual Q&A. Deployed in Docker containers.</p>
          <div class="mt-4 flex gap-2">
            <a href="#" class="px-3 py-1 rounded-full border text-sm">Live demo</a>
            <a href="https://github.com/1149" class="px-3 py-1 rounded-full border text-sm" target="_blank">Code</a>
          </div>
        </article>

        <!-- Project 2 -->
        <article class="draggable bg-white p-6 rounded-2xl shadow-lg" draggable="true" data-title="Real-Time Video AI Apps">
          <h3 class="text-lg font-semibold">Real-Time Video AI Apps</h3>
          <div class="muted text-sm mt-1">NVIDIA DeepStream • GStreamer • TensorRT</div>
          <p class="mt-3 muted">Worked on pipelines that process video for object detection and behavior analysis; contributed integration and optimizations for inference at the edge.</p>
        </article>

        <!-- Project 3 -->
        <article class="draggable bg-white p-6 rounded-2xl shadow-lg" draggable="true" data-title="Interactive Grant Dashboard">
          <h3 class="text-lg font-semibold">Interactive Grant Dashboard</h3>
          <div class="muted text-sm mt-1">React • .NET Core • Azure</div>
          <p class="mt-3 muted">Built responsive data views and reusable UI components for HRSA’s Electronic Handbooks. Optimized load times for large datasets through improved state management.</p>
        </article>

        <!-- Project 4 -->
        <article class="draggable bg-white p-6 rounded-2xl shadow-lg" draggable="true" data-title="Chat Interface">
          <h3 class="text-lg font-semibold">Web Chat Module</h3>
          <div class="muted text-sm mt-1">React • WebSocket</div>
          <p class="mt-3 muted">Implemented a lightweight support chat with optimistic UI updates and reconnection logic — reduced support response times in internal tools.</p>
        </article>
      </div>

      <p class="mt-4 text-sm muted">Tip: drag the cards — small interactive details show deliberate UI thinking.</p>
    </section>

    <!-- Certifications & Publications -->
    <section id="certs" class="mt-12 grid md:grid-cols-2 gap-6">
      <div class="bg-white p-6 rounded-2xl shadow-md">
        <h3 class="font-semibold">Certifications</h3>
        <ul class="mt-3 muted list-disc list-inside">
          <li>Generative AI Fundamentals — Google Cloud</li>
          <li>ChatGPT Prompt Engineering — DeepLearning.AI</li>
          <li>Building Real-Time Video AI Applications — NVIDIA</li>
          <li>AWS / Cloud fundamentals (applied in projects)</li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-md">
        <h3 class="font-semibold">Publication</h3>
        <p class="muted mt-2">Voice Automation Agricultural Systems using IoT — IEEE (Nov 13, 2021)</p>
        <a href="https://ieeexplore.ieee.org/document/9579842" target="_blank" class="mt-3 inline-block text-sm text-teal-600">View publication →</a>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="mt-12">
      <div class="bg-white p-6 rounded-2xl shadow-md">
        <h2 class="text-2xl font-bold">Get in touch</h2>
        <p class="muted mt-2">I’m actively interviewing and interested in frontend roles focused on building engaging consumer-facing experiences. Email: <a href="mailto:yandapalliavinash@gmail.com" class="text-teal-600">yandapalliavinash@gmail.com</a></p>

        <div class="mt-4 flex gap-4">
          <a class="px-4 py-2 bg-teal-600 text-white rounded-full" href="mailto:yandapalliavinash@gmail.com">Email</a>
          <a class="px-4 py-2 border rounded-full" href="https://github.com/1149" target="_blank">GitHub</a>
          <a class="px-4 py-2 border rounded-full" href="https://www.linkedin.com/in/avinashy-233153257" target="_blank">LinkedIn</a>
        </div>
      </div>
    </section>

    <footer class="mt-12 text-center muted">
      <p>© 2025 Avinash Yandapalli • Herndon, VA</p>
    </footer>
  </main>

  <!-- Scripts -->
  <script>
    // mobile panel
    document.getElementById('openMenu').addEventListener('click', () => {
      const panel = document.getElementById('mobilePanel');
      panel.classList.toggle('hidden');
    });

    // Mini skill chart in hero
    const miniCtx = document.getElementById('miniSkillChart').getContext('2d');
    new Chart(miniCtx, {
      type: 'doughnut',
      data: {
        labels: ['Frontend','Backend','Cloud'],
        datasets:[{
          data:[55, 30, 15],
          backgroundColor:['#0d9488','#7c3aed','#06b6d4'],
        }]
      },
      options:{ plugins:{ legend:{ position:'bottom' } } }
    });

    // Main radar chart
    const ctx = document.getElementById('skillsChart').getContext('2d');
    window.skillsChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Frontend','Backend','Cloud','AI/ML','Databases'],
        datasets:[{
          label:'Focus',
          data:[8,7,7,6,6],
          fill:true,
          backgroundColor:'rgba(13,148,136,0.12)',
          borderColor:'#0d9488',
          pointBackgroundColor:'#fff',
        }]
      },
      options:{
        maintainAspectRatio:false,
        scales:{
          r:{ suggestedMin:0, suggestedMax:10, ticks:{ stepSize:2, color:'#64748b' }, pointLabels:{ color:'#0f172a', font:{size:13} } }
        },
        plugins:{ legend:{ display:false } }
      }
    });

    // Skill filter content
    const skills = {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Accessible UIs (a11y)', 'Responsive design'],
      backend: ['FastAPI', 'ASP.NET Core', 'Spring Boot', 'Flask', 'REST APIs'],
      cloud: ['AWS Lambda', 'S3', 'Glue', 'Azure Functions', 'CI/CD'],
      ai: ['RAG / Semantic Search', 'Google Gemini', 'SpaCy', 'DeepStream SDK']
    };
    function setSkillList(cat){
      const list = document.getElementById('skillList');
      const items = (cat === 'all') ? Object.values(skills).flat() : skills[cat] || [];
      list.innerHTML = items.map(i => `<div class="py-1">${i}</div>`).join('');
    }
    document.querySelectorAll('#skillButtons button').forEach(btn=>{
      btn.addEventListener('click', e=>{
        document.querySelectorAll('#skillButtons button').forEach(b=>b.classList.remove('bg-teal-600','text-white'));
        btn.classList.add('bg-teal-600','text-white');
        setSkillList(btn.dataset.cat || 'all');
      });
    });
    setSkillList('all');

    // Timeline data (truthful, from resume)
    const experienceData = [
      {
        role: 'Software Developer',
        company: 'HRSA (Health Resources and Services Administration)',
        period: 'Feb 2025 – Present',
        location: 'McLean, VA',
        bullets: [
          'Built interactive React components for HRSA’s Electronic Handbooks and integrated them with .NET Core and Spring Boot services.',
          'Worked with product and design to refine grant workflows and make them mobile-friendly.',
          'Optimized API integration and UI state management to reduce load times for large datasets.'
        ]
      },
      {
        role: 'Software Engineer (Contract)',
        company: 'Capital One',
        period: 'Sep 2024 – Jan 2025',
        location: 'McLean, VA',
        bullets: [
          'Integrated migration tooling APIs with internal React dashboards to speed dataset onboarding.',
          'Improved frontend form validation and UX to reduce failed submissions.',
          'Supported backend data workflows using AWS Lambda and Glue to keep dashboards consistent.'
        ]
      },
      {
        role: 'Full-Stack Developer',
        company: 'Nektar Info Tek',
        period: 'Feb 2024 – Aug 2024',
        location: 'Reston, VA',
        bullets: [
          'Built a React + FastAPI data insights platform with realtime dashboards and reusable UI components.',
          'Worked with designers to translate wireframes into responsive UI and improved frontend performance.'
        ]
      }
    ];

    const nav = document.getElementById('timelineNav');
    const panel = document.getElementById('timelinePanel');
    experienceData.forEach((job, idx)=>{
      const btn = document.createElement('button');
      btn.className = 'timeline-item text-left p-3 rounded-lg';
      btn.innerHTML = `<div class="font-semibold">${job.role}</div><div class="muted text-sm">${job.company}</div>`;
      btn.addEventListener('click', ()=>renderJob(idx));
      nav.appendChild(btn);
    });
    function renderJob(i){
      const job = experienceData[i];
      panel.innerHTML = `<h3 class="text-xl font-bold">${job.role}</h3>
                         <div class="muted mt-1">${job.company} • ${job.location}</div>
                         <div class="muted text-sm mt-1">${job.period}</div>
                         <ul class="mt-4 list-disc list-inside muted">${job.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
      document.querySelectorAll('.timeline-item').forEach((el, idx)=>el.classList.toggle('bg-slate-50', idx===i));
    }
    renderJob(0);

    // Dragging for project cards (simple UX: allow reordering visually)
    const draggables = document.querySelectorAll('.draggable');
    let dragSrc = null;
    draggables.forEach(node => {
      node.addEventListener('dragstart', (e) => {
        dragSrc = node;
        node.classList.add('opacity-60');
        e.dataTransfer.effectAllowed = 'move';
      });
      node.addEventListener('dragend', () => node.classList.remove('opacity-60'));
      node.addEventListener('dragover', (e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; });
      node.addEventListener('drop', (e) => {
        e.preventDefault();
        if (!dragSrc || dragSrc === node) return;
        const parent = node.parentNode;
        parent.insertBefore(dragSrc, node.nextSibling);
      });
    });

    // small accessibility: keyboard focus outline handling
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') document.body.classList.add('user-is-tabbing');
    });

  </script>
</body>
</html>
