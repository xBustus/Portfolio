/* =====================================================================
   i18n — tiny bilingual (EN / PT) engine.
   Usage in markup:
     data-i18n="key"        -> sets textContent
     data-i18n-html="key"   -> sets innerHTML (for strings with markup)
     data-i18n-attr="title:key; aria-label:key2"  -> sets attributes
   Default language is Portuguese (PT-BR); preference is stored in localStorage.
   ===================================================================== */
(function () {
  const T = {
    en: {
      /* nav + chrome */
      "notice.lang":
        "This site is bilingual — use the PT / EN button at the top to switch language anytime.",
      "notice.close": "Got it",
      "nav.home": "Home",
      "nav.work": "Work",
      "nav.resume": "Résumé",
      "nav.writing": "Writing",
      "footer.tagline":
        "Software engineer who designs, builds and ships full-stack products end to end.",
      "footer.navTitle": "Navigate",
      "footer.moreTitle": "More",
      "footer.certs": "Certificates",
      "footer.goals": "Goals",
      "footer.settings": "Settings",
      "footer.built": "Hand-coded with HTML, CSS & vanilla JS.",
      "footer.rights": "© 2026 Gabriel Bustus. All rights reserved.",

      /* shared project content */
      "proj.serveo.tag": "Restaurant SaaS",
      "proj.serveo.desc":
        "Multi-tenant SaaS that unifies POS, kitchen display, dine-in service, delivery, a QR-code digital menu, a conversational AI waiter and an NFC-e fiscal engine — the whole restaurant operation on a single screen.",
      "proj.serveo.b1": "Real-time POS and kitchen display (KDS)",
      "proj.serveo.b2": "QR-code digital menu at the table",
      "proj.serveo.b3": "AI waiter powered by Anthropic",
      "proj.serveo.b4": "Integrated NFC-e fiscal engine",

      "proj.vexia.tag": "Fleet & GovTech SaaS",
      "proj.vexia.desc":
        "All-in-one SaaS for urban waste-collection and fleet companies: live fleet tracking, smart routing, workshop management, field auditing, an operational AI agent and automatic generation of the documents required by city governments.",
      "proj.vexia.b1": "Live fleet and crews on a map",
      "proj.vexia.b2": "Smart routing with scenario simulation",
      "proj.vexia.b3": "Preventive-maintenance workshop module",
      "proj.vexia.b4": "Natural-language operational AI agent",

      "proj.lumo.tag": "Fintech SaaS",
      "proj.lumo.desc":
        "Financial-control SaaS built for barbershops, clothing stores and small businesses — with invoice OCR, automatic pricing and a real-time dashboard.",
      "proj.lumo.b1": "Invoice OCR with Google Gemini 2.0",
      "proj.lumo.b2": "Native multi-tenancy (PostgreSQL RLS)",
      "proj.lumo.b3": "Cost centers with allocation",
      "proj.lumo.b4": "Subscriptions via Mercado Pago",

      "proj.airlink.desc":
        "Open-source platform to create personalized link-sharing pages — free, simple and intuitive.",
      "proj.portfolio.desc":
        "The site you are browsing — a fast, bilingual, fully hand-coded portfolio with light / dark theming.",

      "cta.caseStudy": "Case study",
      "cta.live": "Live",
      "cta.code": "Code",
      "cta.role.solo": "Solo · full-stack",

      /* home */
      "meta.home.title": "Gabriel Bustus — Software Engineer",
      "home.status": "Open to 2026 Software Engineer roles",
      "home.greeting": "Hi, I'm Gabriel.",
      "home.role": "Software Engineer · Computer Engineering student",
      "home.lead":
        "I build production-grade, multi-tenant SaaS from the ground up — from the database schema and APIs to polished interfaces and AI features.",
      "home.ctaWork": "View my work",
      "home.ctaResume": "Read my résumé",
      "home.metaLocation": "São Paulo, Brazil · remote-friendly",
      "home.metaExp": "3 SaaS products shipped",
      "home.metaEdu": "B.Sc. Computer Engineering, 2026",

      "home.workEyebrow": "Selected work",
      "home.workTitle": "Products I have designed and built",
      "home.workLead":
        "A few of the SaaS platforms I have taken from idea to production.",
      "home.workAll": "See all projects",

      "home.aboutEyebrow": "About",
      "home.aboutTitle": "Engineer first, end-to-end builder by nature",
      "home.aboutP1":
        "I'm a Computer Engineering student graduating in 2026, but most of my engineering comes from building real products. On my own I've designed and shipped three multi-tenant SaaS platforms covering restaurants, fleet operations and finance.",
      "home.aboutP2":
        "I like owning the whole stack — modelling the database, writing the backend, crafting the interface and wiring up AI. I care about clean architecture, fast iteration and shipping things people actually use.",

      "home.skillsEyebrow": "Stack",
      "home.skillsTitle": "Tools I work with",
      "skills.languages": "Languages",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend & Data",
      "skills.tools": "Tools & Cloud",

      "home.contactEyebrow": "Contact",
      "home.contactTitle": "Let's build something",
      "home.contactLead":
        "I'm open to Software Engineer roles and interesting collaborations. The fastest way to reach me is email.",
      "home.contactBtn": "Email me",

      /* work page */
      "meta.work.title": "Work — Gabriel Bustus",
      "work.eyebrow": "Work",
      "work.title": "Things I have built",
      "work.lead":
        "Production SaaS platforms and side projects — each taken from problem to shipped product.",
      "work.featured": "Featured",
      "work.other": "Other projects",

      /* résumé */
      "meta.cv.title": "Résumé — Gabriel Bustus",
      "cv.role": "Software Engineer · Computer Engineering student",
      "cv.download": "Download PDF",
      "cv.summaryTitle": "Summary",
      "cv.summary":
        "Computer Engineering student (graduating 2026) and self-taught full-stack engineer. I've independently designed and shipped three multi-tenant SaaS platforms covering point-of-sale, fleet operations and financial management, using modern web stacks and AI integrations. I enjoy owning a product end to end — data model, backend, UI and developer experience.",
      "cv.projTitle": "Selected projects",
      "cv.expTitle": "Experience",
      "cv.eduTitle": "Education",
      "cv.skillsTitle": "Skills",
      "cv.certsTitle": "Certifications",
      "cv.certsLink": "View certificate PDFs →",
      "cv.langTitle": "Languages",
      "cv.contactTitle": "Contact",

      "cv.proj.serveo":
        "Multi-tenant restaurant SaaS — POS, kitchen display, delivery, AI waiter and NFC-e fiscal engine.",
      "cv.proj.vexia":
        "All-in-one SaaS for waste-collection fleets — live tracking, smart routing, maintenance and an operational AI agent.",
      "cv.proj.lumo":
        "Financial-control SaaS with invoice OCR (Gemini 2.0), PostgreSQL RLS multi-tenancy and Mercado Pago billing.",

      "exp.fleet.role": "Fleet Assistant",
      "exp.fleet.org": "SP Urbano · São Paulo",
      "exp.fleet.date": "Mar 2026 – Present",
      "exp.fleet.b1":
        "Manage fuel and fleet data: SEFAZ file processing, invoice reconciliation (Sem Parar, Infleet, Localiza) in the CIGAM ERP and per-branch cost-allocation spreadsheets.",
      "exp.fleet.b2":
        "Own end-to-end fines and insurance control — monitoring, appeals, discount reporting and tracker installations.",

      "exp.traffic.role": "Traffic Assistant",
      "exp.traffic.org": "SP Urbano · São Paulo",
      "exp.traffic.date": "Oct 2025 – Feb 2026",
      "exp.traffic.b1":
        "Coordinated fleet dispatch and field operations and produced daily reports to support operational decisions.",

      "exp.fiscal.role": "Tax Assistant",
      "exp.fiscal.org": "LSG Sky Chefs",
      "exp.fiscal.date": "May 2025 – Jul 2025",
      "exp.fiscal.b1":
        "Posted invoices in SAP and analysed taxes to ensure fiscal compliance.",

      "exp.admin.role": "Administrative Assistant",
      "exp.admin.org": "Sampa Motors",
      "exp.admin.date": "Oct 2024 – Apr 2025",
      "exp.admin.b1":
        "Handled document control, reporting and RMA processes and helped streamline internal workflows.",

      "exp.it.role": "IT Technician — Internship",
      "exp.it.org": "Strong Tech",
      "exp.it.date": "Feb 2023 – Jun 2023",
      "exp.it.b1":
        "Assembled and tested computers and handled warranty / returns analysis.",
      "exp.it.b2":
        "Contributed to the company website using HTML5, CSS3 and JavaScript.",

      "edu.degree": "B.Sc. in Computer Engineering",
      "edu.school": "Faculdade Descomplica",
      "edu.date": "Expected 2026",

      "lang.pt": "Portuguese — Native",
      "lang.en": "English — B2 (Wizard W6, CEFR)",
      "lang.es": "Spanish — A2",

      /* writing */
      "meta.blog.title": "Writing — Gabriel Bustus",
      "blog.eyebrow": "Writing",
      "blog.title": "Notes & updates",
      "blog.lead": "Short notes about what I'm building and learning.",
      "post1.title": "GB Courses",
      "post1.date": "Mar 19, 2025",
      "post1.body":
        "GB Courses, my on-demand learning platform, is in active development. It's being built around tiered subscriptions and a clean, personalized learning experience, organized into milestones so each phase ships with care. More updates soon.",
      "post2.title": "AirLink in development",
      "post2.date": "Mar 19, 2025",
      "post2.body":
        "AirLink is officially in development. The project is structured into milestones to keep progress steady and organized.",
      "post2.link": "Read the roadmap →",
      "post3.title": "Who am I?",
      "post3.date": "Mar 16, 2025",
      "post3.body":
        "Hardware and software engineer with experience building complete solutions — from circuit design to embedded systems and web applications. I currently lead GB Systems, focused on software and technology, working with stacks like Tailwind CSS, React and Node.js. My goal is to integrate hardware and software into high-performance products.",

      /* goals */
      "meta.goals.title": "Goals — Gabriel Bustus",
      "goals.eyebrow": "Endless list",
      "goals.title": "Goals I'm chasing",
      "goals.lead":
        "The Endless List is a living list of goals: every time one is reached, a harder one takes its place. It's how I keep growth continuous — here are the ones I'm working on now.",
      "goals.g.pro": "Professional",
      "goals.g.edu": "Education",
      "goals.g.ath": "Athletics",
      "goal.mba": "MBA in Software Engineering — USP",
      "goal.mba.d": "Research programs, apply, and complete the degree within 3 years.",
      "goal.cs50": "CS50x certificate — Harvard",
      "goal.cs50.d": "Work through the course and ship the final project within 1 year.",
      "goal.aws": "AWS certification",
      "goal.aws.d": "Study and pass the AWS Solutions Architect exam in 4 months.",
      "goal.english": "Reach C1 English proficiency",
      "goal.english.d": "Consistent study and conversation, then a proficiency exam (TOEFL / IELTS) within a year.",
      "goal.neuro": "Foundations of neuroscience",
      "goal.neuro.d": "Intro courses and core books to build a solid base in 4 months.",
      "goal.philo": "Foundations of philosophy",
      "goal.philo.d": "Read the classics (Plato, Aristotle, Kant) and write summaries.",
      "goal.run": "Run 1 km non-stop",
      "goal.run.d": "Build up from 500 m to a comfortable 1 km over ~7 weeks.",
      "goal.bike": "Cycle 30 km",
      "goal.bike.d": "Progress from 10 km to 30 km over two months.",
      "goal.muay": "3rd degree in Muay Thai",
      "goal.muay.d": "Technique, conditioning and sparring toward the next grade within a year.",

      /* certificates */
      "meta.certs.title": "Certificates — Gabriel Bustus",
      "certs.eyebrow": "Certificates",
      "certs.title": "Certificates & credentials",
      "certs.lead": "Downloadable PDFs of courses and credentials I've completed.",
      "certs.download": "Download",
      "cert.ai": "AI Tools & Applications",
      "cert.global": "Global Network",
      "cert.lan": "Local Area Network",
      "cert.excel": "Microsoft Excel",

      /* settings */
      "meta.settings.title": "Settings — Gabriel Bustus",
      "set.title": "Settings",
      "set.themeLabel": "Theme",
      "set.themeHint": "Switch between dark and light.",
      "set.dark": "Dark",
      "set.light": "Light",
      "set.langLabel": "Language",
      "set.langHint": "Choose the site language.",
      "set.fontLabel": "Font size",
      "set.fontHint": "Adjust the base reading size.",
      "set.save": "Save settings",
      "set.back": "Back home",
      "toast.saved": "Settings saved",
      "toast.theme.dark": "Theme set to dark",
      "toast.theme.light": "Theme set to light",
      "toast.lang": "Language: English",
      "toast.font": "Font size: ",

      /* ===================== case-study pages ===================== */
      "cs.faq": "FAQ",
      "cs.faqTitle": "Frequently asked questions",
      "cs.backWork": "Back to projects",

      /* ---- Serveo ---- */
      "serveo.meta": "Serveo — Restaurant management SaaS",
      "serveo.badge": "Multi-tenant SaaS for restaurants",
      "serveo.h1a": "The whole restaurant",
      "serveo.h1b": "on one screen.",
      "serveo.lead":
        "Serveo unifies POS, kitchen display, dine-in, delivery, a digital menu, conversational AI and a fiscal engine — for the operation that can't lose a single ticket or invoice.",
      "serveo.cta1": "See the modules",
      "serveo.cta2": "Tech stack",
      "serveo.s1n": "12", "serveo.s1l": "migrations across 10 phases",
      "serveo.s2n": "2", "serveo.s2l": "Angular apps (POS + PWA)",
      "serveo.s3n": "100%", "serveo.s3l": "Supabase Cloud — no custom backend",
      "serveo.s4n": "AI", "serveo.s4l": "Edge Functions with Anthropic",
      "serveo.modEyebrow": "The platform",
      "serveo.modTitle": "From the table to the kitchen, to the tax office.",
      "serveo.modLead":
        "Twelve integrated modules talking through RLS, Postgres triggers and Edge Functions.",
      "serveo.m1t": "POS", "serveo.m1d": "Fast checkout, tabs, bill splitting and multiple payment methods.",
      "serveo.m2t": "KDS", "serveo.m2d": "Real-time kitchen panel — prep, priorities and time per dish.",
      "serveo.m3t": "Dining room", "serveo.m3d": "Table map, status, merges and reservations with live sync.",
      "serveo.m4t": "Delivery", "serveo.m4d": "Orders, fee per region, delivery status and courier integration.",
      "serveo.m5t": "Digital menu", "serveo.m5d": "QR code at the table, customer PWA, open a tab with no app.",
      "serveo.m6t": "Conversational AI", "serveo.m6d": "Virtual waiter and WhatsApp service with Anthropic via Edge Functions.",
      "serveo.m7t": "Fiscal engine", "serveo.m7d": "NFC-e SEFAZ, contingency and auto printing wired into the POS.",
      "serveo.m8t": "Meta / WhatsApp", "serveo.m8d": "Webhook integrated with the Meta Graph for orders and auto replies.",
      "serveo.m9t": "Reports", "serveo.m9d": "Sales, average ticket, product mix and cash closing in real time.",
      "serveo.stackEyebrow": "Architecture",
      "serveo.stackTitle": "No custom backend. Supabase + Angular.",
      "serveo.stackLead":
        "Business rules live in RLS policies, Postgres triggers or Deno Edge Functions. Multi-tenant by default.",
      "serveo.feT": "Frontend",
      "serveo.fe1": "admin-pdv · Angular 17 — internal operation",
      "serveo.fe2": "menu-pwa · Angular 17 — end customer (table QR)",
      "serveo.fe3": "PWA with offline mode",
      "serveo.beT": "Backend-as-a-Service",
      "serveo.be1": "Supabase Cloud — Postgres + RLS",
      "serveo.be2": "Auth, Realtime, Storage",
      "serveo.be3": "Deno Edge Functions (AI, fiscal, webhook)",
      "serveo.phEyebrow": "Roadmap",
      "serveo.phTitle": "Built in 10 phases.",
      "serveo.phLead":
        "Every phase (0–10) already has its migration and required Edge Functions. External integrations ship as documented stubs.",
      "serveo.p1l": "PHASE 0–1", "serveo.p1t": "Foundation + Operation",
      "serveo.p2l": "PHASE 2–3", "serveo.p2t": "Inventory + Purchasing",
      "serveo.p3l": "PHASE 4", "serveo.p3t": "Digital menu + QR",
      "serveo.p4l": "PHASE 5–6", "serveo.p4t": "Delivery + Payments",
      "serveo.p5l": "PHASE 7", "serveo.p5t": "NFC-e fiscal engine",
      "serveo.p6l": "PHASE 8–10", "serveo.p6t": "AI + Meta + BI",
      "serveo.q1": "Why multi-tenant?",
      "serveo.a1": "Each restaurant gets its own logical space isolated by RLS, with no separate instances — lower cost and simpler deploys.",
      "serveo.q2": "Does it work offline?",
      "serveo.a2": "The POS runs as a PWA with local cache; tabs sync when the connection returns. The fiscal engine has NFC-e contingency.",
      "serveo.q3": "How does the conversational AI work?",
      "serveo.a3": "Edge Functions call the Anthropic API with menu and order context. The customer chats in natural language over WhatsApp or the QR.",

      /* ---- Lumo ---- */
      "lumo.meta": "Lumo — Financial control for small businesses",
      "lumo.badge": "Financial SaaS for small businesses",
      "lumo.h1a": "Money coming in.",
      "lumo.h1b": "And going out under control.",
      "lumo.lead":
        "Lumo is the financial-control tool built for barbershops, clothing stores and small businesses — with invoice OCR, automatic pricing and a real-time dashboard.",
      "lumo.cta1": "Explore features",
      "lumo.cta2": "See plans",
      "lumo.s1n": "7d", "lumo.s1l": "free trial, no card",
      "lumo.s2n": "OCR", "lumo.s2l": "Gemini reads invoices in seconds",
      "lumo.s3n": "RLS", "lumo.s3l": "native multi-tenancy in Postgres",
      "lumo.s4n": "PIX", "lumo.s4l": "card and boleto via Mercado Pago",
      "lumo.modEyebrow": "Features",
      "lumo.modTitle": "Everything the owner needs, without spreadsheets.",
      "lumo.m1t": "Multi-tenant", "lumo.m1d": "Each business sees only its own data, guaranteed by RLS in Postgres.",
      "lumo.m2t": "Invoice OCR", "lumo.m2d": "Snap a photo — Gemini 2.0 Flash extracts number, tax ID, value and line items automatically.",
      "lumo.m3t": "Clients & light CRM", "lumo.m3d": "Customer records, purchase history and individual average ticket.",
      "lumo.m4t": "Income & expenses", "lumo.m4d": "Category, client, payment method and cost center on every entry.",
      "lumo.m5t": "Cost centers", "lumo.m5d": "Rent, water, power, internet — with automatic allocation across services and products.",
      "lumo.m6t": "Automatic pricing", "lumo.m6d": "Suggests a price per service factoring in every direct and indirect cost.",
      "lumo.m7t": "Dashboard", "lumo.m7d": "Income, expenses, costs and monthly profit on a single screen.",
      "lumo.m8t": "Mercado Pago subscriptions", "lumo.m8d": "PIX, card and boleto. 14-day trial and automatic renewal.",
      "lumo.stackEyebrow": "Stack",
      "lumo.stackTitle": "Modern, simple, deployed in minutes.",
      "lumo.t1t": "Next.js 14", "lumo.t1d": "App Router · TS · Tailwind",
      "lumo.t2t": "Supabase", "lumo.t2d": "Postgres + Auth + Storage",
      "lumo.t3t": "Gemini 2.0", "lumo.t3d": "invoice OCR",
      "lumo.t4t": "Mercado Pago", "lumo.t4d": "recurring subscriptions",
      "lumo.plEyebrow": "Plans",
      "lumo.plTitle": "Start free. Grow when you need to.",
      "lumo.pl1t": "Trial", "lumo.pl1b": "To test before subscribing.", "lumo.pl1a": "14 days", "lumo.pl1p": "No card",
      "lumo.pl1f1": "Full access", "lumo.pl1f2": "Invoice OCR",
      "lumo.pl2t": "Essential", "lumo.pl2b": "For barbershops and small stores.", "lumo.pl2a": "R$ 69.90", "lumo.pl2p": "per month",
      "lumo.pl2f1": "Unlimited clients", "lumo.pl2f2": "Income and expenses", "lumo.pl2f3": "Invoice OCR", "lumo.pl2f4": "Monthly dashboard",
      "lumo.pl3t": "Professional", "lumo.pl3b": "For businesses that grow.", "lumo.pl3a": "R$ 149.90", "lumo.pl3p": "per month",
      "lumo.pl3f1": "Everything in Essential", "lumo.pl3f2": "Cost centers with allocation", "lumo.pl3f3": "Automatic pricing", "lumo.pl3f4": "Multiple users",
      "lumo.pop": "Most popular",
      "lumo.q1": "Is Lumo right for my barbershop / store?",
      "lumo.a1": "Yes. It was designed for barbershops, clothing stores and small businesses that need to know their real profit without understanding accounting.",
      "lumo.q2": "How does the invoice OCR work?",
      "lumo.a2": "You attach a photo or PDF of the invoice and Gemini 2.0 Flash extracts number, tax ID, total and items. You review and save.",
      "lumo.q3": "Is my data isolated?",
      "lumo.a3": "Yes. Each business has RLS in Postgres ensuring nobody can read anything beyond their own space — not even by mistake.",
      "lumo.q4": "Can I pay with PIX?",
      "lumo.a4": "Yes. Subscriptions run through Mercado Pago and accept PIX, card and boleto.",

      /* ---- Vexia ---- */
      "vexia.meta": "Vexia — Smart platform for urban waste collection & fleets",
      "vexia.badge": "AI-powered operations platform for waste collection & fleets",
      "vexia.h1a": "A clean city starts with",
      "vexia.h1b": "real-time decisions.",
      "vexia.lead":
        "Vexia brings live fleet, smart routing, workshop, auditing and reports into one platform — for waste-collection companies that can't miss a route or a city-government document.",
      "vexia.cta1": "Book a demo",
      "vexia.cta2": "See the platform",
      "vexia.s1n": "-32%", "vexia.s1l": "fuel cost per optimized route",
      "vexia.s2n": "+45%", "vexia.s2l": "average operational efficiency",
      "vexia.s3n": "100%", "vexia.s3l": "fleet and crew traceability",
      "vexia.s4n": "24/7", "vexia.s4l": "live operations monitoring",
      "vexia.mapBar": "vexia.app — Live operations map",
      "vexia.lg1": "On route", "vexia.lg2": "Collecting", "vexia.lg3": "Idle", "vexia.lg4": "Workshop",
      "vexia.trust": "Built for operations that can't stop",
      "vexia.tr1": "Collection companies", "vexia.tr2": "Cooperatives", "vexia.tr3": "In-house workshops", "vexia.tr4": "Recycling programs", "vexia.tr5": "City-government contracts",
      "vexia.probEyebrow": "The problem",
      "vexia.probTitle": "Urban collection still runs in the dark.",
      "vexia.probLead": "Lost spreadsheets, radios to track trucks, fines nobody sees coming, reactive maintenance and citizens complaining before the manager even knows. Vexia changes that.",
      "vexia.pr1t": "No visibility", "vexia.pr1d": "You only find out collection failed when a citizen calls to complain.",
      "vexia.pr2t": "Paperwork hiding money", "vexia.pr2d": "Paper checklists, loose work orders, mileage and fuel impossible to audit.",
      "vexia.pr3t": "Decisions without data", "vexia.pr3d": "With no indicators, every meeting with the city turns into guesswork — and the contract into a risk.",
      "vexia.modEyebrow": "The platform",
      "vexia.modTitle": "Everything your operation needs, in one place.",
      "vexia.modLead": "Integrated modules that talk to each other — from the driver app to the owner's dashboard.",
      "vexia.m1t": "Live Fleet", "vexia.m1d": "Real-time map with every vehicle, status, route and crew on board.",
      "vexia.m2t": "Smart Routing", "vexia.m2d": "Plan sectors, size routes and simulate scenarios before dispatching.",
      "vexia.m3t": "Operational AI Agent", "vexia.m3d": "Ask questions in natural language and get instant operational diagnostics.",
      "vexia.m4t": "VexiaMec — Workshop", "vexia.m4d": "Work orders, preventive maintenance, parts and cost per vehicle.",
      "vexia.m5t": "Digital Checklist", "vexia.m5d": "Pre and post operation, with photos, signature and per-vehicle auditing.",
      "vexia.m6t": "Team Management", "vexia.m6d": "Employees, shifts, absences and individual productivity.",
      "vexia.m7t": "Eco Points", "vexia.m7d": "Recycling program with scoring, gamification and ESG reporting.",
      "vexia.m8t": "Finance & Contracts", "vexia.m8d": "Cost per route, per vehicle and per contract — ready to hand the measurement to the city.",
      "vexia.m9t": "Reports & Documents", "vexia.m9d": "PDF and Excel in the city's required format, generated in seconds with one click.",
      "vexia.perEyebrow": "Who it's for",
      "vexia.perTitle": "One platform. Six views.",
      "vexia.perLead": "Each role has its own interface, optimized for what they actually do day to day.",
      "vexia.pe1t": "Manager", "vexia.pe1d": "Full dashboard, real-time decisions and the documents the company must deliver to the city.",
      "vexia.pe2t": "Mechanic", "vexia.pe2d": "Work orders, parts and each vehicle's history in the palm of your hand.",
      "vexia.pe3t": "Eco point", "vexia.pe3d": "Dedicated view per collection unit — intake, weighing, scoring and ESG reports.",
      "vexia.pe4t": "Supervisor", "vexia.pe4d": "Coordinates shifts, releases the fleet, validates checklists and centralizes field events.",
      "vexia.pe5t": "Auditor", "vexia.pe5d": "Field auditing, logging non-conformities with photo and GPS.",
      "vexia.pe6t": "Driver", "vexia.pe6d": "Mobile app with route, checklist, incidents and assisted navigation.",
      "vexia.howEyebrow": "How it works",
      "vexia.howTitle": "From paper to dashboard in 30 days.",
      "vexia.st1t": "Diagnosis", "vexia.st1d": "We map your operation, contracts and pain points in one meeting.",
      "vexia.st2t": "Guided setup", "vexia.st2d": "We register fleet, crews and sectors with you. No friction.",
      "vexia.st3t": "Training", "vexia.st3d": "We train drivers, manager, mechanic and auditor — each in their own app.",
      "vexia.st4t": "Go-live", "vexia.st4d": "Operation live with dedicated support for the first 30 days.",
      "vexia.voices": "Voices of Vexia",
      "vexia.qv1tag": "Founder's word",
      "vexia.qv1": "Vexia was born in the operation, not in the office. I lived the paper checklist, the manager deciding in the dark and the city demanding indicators nobody had. We're building the platform that was missing — made by someone who understands both the truck and the dashboard.",
      "vexia.qv1name": "Gabriel Bustus", "vexia.qv1role": "CEO & Founder · GB Systems",
      "vexia.qv2tag": "Who uses it",
      "vexia.qv2": "Working in public cleaning for 7 years, I've never seen anything like it: everything in one platform. We were always behind on something this complete, simple and easy to use. The per-operator access levels and tight control over information drastically cut the margin for error.",
      "vexia.qv2name": "Vander Cattini", "vexia.qv2role": "Planning Analyst · SP Urbano",
      "vexia.plEyebrow": "Plans",
      "vexia.plTitle": "Grow at your own pace.",
      "vexia.plLead": "Start with the essentials and turn on modules as the operation matures.",
      "vexia.onreq": "On request", "vexia.pop": "Most popular",
      "vexia.pl1t": "Essential", "vexia.pl1b": "To start seeing the operation.", "vexia.pl1p": "Per vehicle / month",
      "vexia.pl1f1": "Live fleet", "vexia.pl1f2": "Driver app", "vexia.pl1f3": "Digital checklist", "vexia.pl1f4": "Basic reports",
      "vexia.pl1c": "Get started",
      "vexia.pl2t": "Professional", "vexia.pl2b": "The full operation, end to end.", "vexia.pl2p": "Per vehicle / month",
      "vexia.pl2f1": "Everything in Essential", "vexia.pl2f2": "Smart routing", "vexia.pl2f3": "VexiaMec — Workshop", "vexia.pl2f4": "Auditing & inspection", "vexia.pl2f5": "Finance per contract", "vexia.pl2f6": "City-standard documents",
      "vexia.pl2c": "Talk to sales",
      "vexia.pl3t": "Enterprise", "vexia.pl3b": "For groups and multi-company operations.", "vexia.pl3p": "Custom",
      "vexia.pl3f1": "Everything in Professional", "vexia.pl3f2": "Operational AI Agent", "vexia.pl3f3": "Multi-company & multi-contract", "vexia.pl3f4": "SSO & API integration", "vexia.pl3f5": "Dedicated SLA",
      "vexia.pl3c": "Talk to a specialist",
      "vexia.q1": "Do you serve city governments directly?",
      "vexia.a1": "No. Vexia is a B2B platform built for the collection company that holds the contract with the city. We provide the tooling so that company delivers on the contract and automatically generates the documents, indicators and measurements the city requires.",
      "vexia.q2": "How long does it take to deploy?",
      "vexia.a2": "Typical deployment runs 15 to 30 days, including fleet and crew registration, training and go-live with dedicated support.",
      "vexia.q3": "Does it work offline for the driver?",
      "vexia.a3": "Yes. The mobile app works offline and syncs automatically when signal returns — essential for rural and outlying areas.",
      "vexia.q4": "Can it integrate with our ERP?",
      "vexia.a4": "Yes. We provide an API and structured exports (Excel, JSON), and integrate with payroll, finance and BI systems.",
      "vexia.q5": "How are security and privacy handled?",
      "vexia.a5": "Vexia runs on Google Cloud / Firebase with encryption in transit and at rest, immutable audit logs and LGPD compliance.",
      "vexia.ctaTitle": "Ready to see your operation clearly?",
      "vexia.ctaLead": "Book a 30-minute demo. No commitment, with real cases.",
      "vexia.ctaBtn": "Talk to us",

      /* ---- AirLink ---- */
      "airlink.meta": "AirLink — All your links in one place",
      "airlink.badge": "Open-source & 100% free",
      "airlink.h1a": "All your links in",
      "airlink.h1b": "one place.",
      "airlink.lead":
        "AirLink is an open-source platform for building personalized link pages. Group your socials, portfolios and contacts simply, for free and with no hassle.",
      "airlink.cta1": "View the code",
      "airlink.cta2": "Back to projects",
      "airlink.handle": "@gabriel.bustus",
      "airlink.bio": "Full-stack Dev & Engineer",
      "airlink.modEyebrow": "Highlights",
      "airlink.modTitle": "Simple, fast and yours.",
      "airlink.m1t": "Completely free", "airlink.m1d": "No hidden premium tiers, no costs or limits to create and share your link pages.",
      "airlink.m2t": "Highly customizable", "airlink.m2d": "Tune colors, buttons, fonts and backgrounds so the page carries exactly your identity.",
      "airlink.m3t": "Simple experience", "airlink.m3d": "A clean, intuitive interface — made so anyone, from beginners to advanced developers, can use it.",
      "airlink.m4t": "Instant access", "airlink.m4d": "Share your links quickly on any social network, with no installs or complex setup.",
      "airlink.demoNote": "In the real AirLink, users configure hex colors, background images, button effects and manage links through an admin panel.",

      /* ---- GB Courses ---- */
      "gb.meta": "GB Courses — On-demand learning platform",
      "gb.badge": "In development",
      "gb.h1a": "On-demand learning,",
      "gb.h1b": "built with care.",
      "gb.lead":
        "GB Courses is an on-demand learning platform in active development — tiered subscriptions and a clean, personalized learning experience, shipped milestone by milestone.",
      "gb.cta": "Back to projects",
      "gb.soonTitle": "Coming soon",
      "gb.soonLead": "This case study is being written while the product is built. Check back soon.",

    },

    pt: {
      "notice.lang":
        "Este site é bilíngue — use o botão PT / EN no topo para trocar o idioma quando quiser.",
      "notice.close": "Entendi",
      "nav.home": "Início",
      "nav.work": "Projetos",
      "nav.resume": "Currículo",
      "nav.writing": "Blog",
      "footer.tagline":
        "Engenheiro de software que projeta, desenvolve e entrega produtos full-stack de ponta a ponta.",
      "footer.navTitle": "Navegar",
      "footer.moreTitle": "Mais",
      "footer.certs": "Certificados",
      "footer.goals": "Metas",
      "footer.settings": "Configurações",
      "footer.built": "Feito à mão com HTML, CSS e JS puro.",
      "footer.rights": "© 2026 Gabriel Bustus. Todos os direitos reservados.",

      "proj.serveo.tag": "SaaS para restaurantes",
      "proj.serveo.desc":
        "SaaS multi-tenant que une PDV, KDS, atendimento de salão, delivery, cardápio digital com QR Code, garçom virtual com IA e motor fiscal NFC-e — toda a operação do restaurante em uma só tela.",
      "proj.serveo.b1": "PDV e KDS em tempo real",
      "proj.serveo.b2": "Cardápio digital com QR Code na mesa",
      "proj.serveo.b3": "Garçom virtual com IA (Anthropic)",
      "proj.serveo.b4": "Motor fiscal NFC-e integrado",

      "proj.vexia.tag": "SaaS de frotas & GovTech",
      "proj.vexia.desc":
        "SaaS all-in-one para empresas de coleta urbana e frotas: frota ao vivo, roteirização inteligente, oficina, fiscalização, agente de IA operacional e geração automática dos documentos exigidos pela prefeitura.",
      "proj.vexia.b1": "Frota e equipes ao vivo no mapa",
      "proj.vexia.b2": "Roteirização com simulação de cenários",
      "proj.vexia.b3": "Módulo de oficina e manutenção preventiva",
      "proj.vexia.b4": "Agente de IA operacional em linguagem natural",

      "proj.lumo.tag": "SaaS fintech",
      "proj.lumo.desc":
        "SaaS de controle financeiro feito para barbearias, lojas de roupas e pequenos negócios — com OCR de notas fiscais, precificação automática e dashboard em tempo real.",
      "proj.lumo.b1": "OCR de notas com Google Gemini 2.0",
      "proj.lumo.b2": "Multi-tenant nativo (RLS no PostgreSQL)",
      "proj.lumo.b3": "Centro de custos com rateio",
      "proj.lumo.b4": "Assinaturas via Mercado Pago",

      "proj.airlink.desc":
        "Plataforma open-source para criar páginas personalizadas de compartilhamento de links — gratuita, simples e intuitiva.",
      "proj.portfolio.desc":
        "O site que você está navegando — um portfólio rápido, bilíngue e 100% codado à mão, com tema claro/escuro.",

      "cta.caseStudy": "Ver detalhes",
      "cta.live": "Acessar",
      "cta.code": "Código",
      "cta.role.solo": "Solo · full-stack",

      "meta.home.title": "Gabriel Bustus — Engenheiro de Software",
      "home.status": "Aberto a vagas de Eng. de Software em 2026",
      "home.greeting": "Olá, eu sou o Gabriel.",
      "home.role": "Engenheiro de Software · estudante de Eng. da Computação",
      "home.lead":
        "Construo SaaS multi-tenant de nível de produção do zero — do schema do banco e das APIs até interfaces refinadas e recursos de IA.",
      "home.ctaWork": "Ver projetos",
      "home.ctaResume": "Ver currículo",
      "home.metaLocation": "São Paulo, Brasil · aberto a remoto",
      "home.metaExp": "3 produtos SaaS entregues",
      "home.metaEdu": "Bacharel em Eng. da Computação, 2026",

      "home.workEyebrow": "Trabalhos selecionados",
      "home.workTitle": "Produtos que projetei e construí",
      "home.workLead":
        "Algumas das plataformas SaaS que levei da ideia à produção.",
      "home.workAll": "Ver todos os projetos",

      "home.aboutEyebrow": "Sobre",
      "home.aboutTitle": "Engenheiro acima de tudo, construtor de ponta a ponta",
      "home.aboutP1":
        "Sou estudante de Engenharia da Computação, com formatura em 2026, mas a maior parte da minha engenharia vem de construir produtos reais. Sozinho, projetei e entreguei três plataformas SaaS multi-tenant nas áreas de restaurantes, frotas e finanças.",
      "home.aboutP2":
        "Gosto de dominar toda a stack — modelar o banco, escrever o backend, lapidar a interface e integrar IA. Valorizo arquitetura limpa, iteração rápida e entregar coisas que as pessoas realmente usam.",

      "home.skillsEyebrow": "Stack",
      "home.skillsTitle": "Ferramentas que uso",
      "skills.languages": "Linguagens",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend & Dados",
      "skills.tools": "Ferramentas & Cloud",

      "home.contactEyebrow": "Contato",
      "home.contactTitle": "Vamos construir algo",
      "home.contactLead":
        "Estou aberto a vagas de Engenharia de Software e colaborações interessantes. O jeito mais rápido de me encontrar é por email.",
      "home.contactBtn": "Me enviar email",

      "meta.work.title": "Projetos — Gabriel Bustus",
      "work.eyebrow": "Projetos",
      "work.title": "Coisas que construí",
      "work.lead":
        "Plataformas SaaS de produção e projetos paralelos — cada um levado do problema ao produto entregue.",
      "work.featured": "Em destaque",
      "work.other": "Outros projetos",

      "meta.cv.title": "Currículo — Gabriel Bustus",
      "cv.role": "Engenheiro de Software · estudante de Eng. da Computação",
      "cv.download": "Baixar PDF",
      "cv.summaryTitle": "Resumo",
      "cv.summary":
        "Estudante de Engenharia da Computação (formatura em 2026) e engenheiro full-stack autodidata. Projetei e entreguei, de forma independente, três plataformas SaaS multi-tenant nas áreas de PDV, gestão de frotas e gestão financeira, usando stacks web modernas e integrações com IA. Gosto de dominar o produto de ponta a ponta — modelo de dados, backend, UI e experiência de desenvolvimento.",
      "cv.projTitle": "Projetos selecionados",
      "cv.expTitle": "Experiência",
      "cv.eduTitle": "Formação",
      "cv.skillsTitle": "Competências",
      "cv.certsTitle": "Certificações",
      "cv.certsLink": "Ver PDFs dos certificados →",
      "cv.langTitle": "Idiomas",
      "cv.contactTitle": "Contato",

      "cv.proj.serveo":
        "SaaS multi-tenant para restaurantes — PDV, KDS, delivery, garçom com IA e motor fiscal NFC-e.",
      "cv.proj.vexia":
        "SaaS all-in-one para frotas de coleta — rastreio ao vivo, roteirização, manutenção e agente de IA operacional.",
      "cv.proj.lumo":
        "SaaS de controle financeiro com OCR de notas (Gemini 2.0), multi-tenant com RLS no PostgreSQL e cobrança via Mercado Pago.",

      "exp.fleet.role": "Assistente de Frotas",
      "exp.fleet.org": "SP Urbano · São Paulo",
      "exp.fleet.date": "Mar 2026 – Atual",
      "exp.fleet.b1":
        "Gestão de dados de combustível e frota: processamento de arquivos SEFAZ, conciliação de faturas (Sem Parar, Infleet, Localiza) no ERP CIGAM e planilhas de rateio de custos por filial.",
      "exp.fleet.b2":
        "Gestão integral de multas e seguros — monitoramento, recursos, relatórios de descontos e instalação de rastreadores.",

      "exp.traffic.role": "Auxiliar de Tráfego",
      "exp.traffic.org": "SP Urbano · São Paulo",
      "exp.traffic.date": "Out 2025 – Fev 2026",
      "exp.traffic.b1":
        "Coordenação da liberação de frota e operações de campo, com relatórios diários para apoiar decisões operacionais.",

      "exp.fiscal.role": "Auxiliar Fiscal",
      "exp.fiscal.org": "LSG Sky Chefs",
      "exp.fiscal.date": "Mai 2025 – Jul 2025",
      "exp.fiscal.b1":
        "Lançamento de notas fiscais no SAP e análise de tributos para garantir conformidade fiscal.",

      "exp.admin.role": "Auxiliar Administrativo",
      "exp.admin.org": "Sampa Motors",
      "exp.admin.date": "Out 2024 – Abr 2025",
      "exp.admin.b1":
        "Controle de documentos, relatórios e processos de RO, além de apoio na otimização de processos internos.",

      "exp.it.role": "Técnico de TI — Estágio",
      "exp.it.org": "Strong Tech",
      "exp.it.date": "Fev 2023 – Jun 2023",
      "exp.it.b1":
        "Montagem e teste de computadores e análise de garantias / devoluções.",
      "exp.it.b2":
        "Participação no site institucional usando HTML5, CSS3 e JavaScript.",

      "edu.degree": "Bacharelado em Engenharia da Computação",
      "edu.school": "Faculdade Descomplica",
      "edu.date": "Conclusão prevista em 2026",

      "lang.pt": "Português — Nativo",
      "lang.en": "Inglês — B2 (Wizard W6, CEFR)",
      "lang.es": "Espanhol — A2",

      "meta.blog.title": "Blog — Gabriel Bustus",
      "blog.eyebrow": "Blog",
      "blog.title": "Notas & atualizações",
      "blog.lead": "Notas rápidas sobre o que estou construindo e aprendendo.",
      "post1.title": "GB Courses",
      "post1.date": "19 de Março, 2025",
      "post1.body":
        "O GB Courses, minha plataforma de cursos on-demand, está em desenvolvimento ativo. Está sendo construído em torno de planos por assinatura e de uma experiência de aprendizado limpa e personalizada, organizado em milestones para que cada fase seja entregue com cuidado. Em breve, mais novidades.",
      "post2.title": "AirLink em desenvolvimento",
      "post2.date": "19 de Março, 2025",
      "post2.body":
        "O AirLink está oficialmente em desenvolvimento. O projeto está estruturado em milestones para manter um avanço contínuo e organizado.",
      "post2.link": "Ver o roadmap →",
      "post3.title": "Quem sou eu?",
      "post3.date": "16 de Março, 2025",
      "post3.body":
        "Engenheiro de hardware e software com experiência no desenvolvimento de soluções completas — do design de circuitos a sistemas embarcados e aplicações web. Atualmente lidero a GB Systems, focada em software e tecnologia, trabalhando com stacks como Tailwind CSS, React e Node.js. Meu objetivo é integrar hardware e software em produtos de alto desempenho.",

      "meta.goals.title": "Metas — Gabriel Bustus",
      "goals.eyebrow": "Lista infinita",
      "goals.title": "Metas que persigo",
      "goals.lead":
        "A Endless List é uma lista viva de metas: sempre que uma é alcançada, outra mais difícil entra no lugar. É assim que mantenho o crescimento contínuo — aqui estão as que estou trabalhando agora.",
      "goals.g.pro": "Profissional",
      "goals.g.edu": "Educação",
      "goals.g.ath": "Atletismo",
      "goal.mba": "MBA em Engenharia de Software — USP",
      "goal.mba.d": "Pesquisar programas, aplicar e concluir o MBA em até 3 anos.",
      "goal.cs50": "Certificado CS50x — Harvard",
      "goal.cs50.d": "Concluir o curso e entregar o projeto final em até 1 ano.",
      "goal.aws": "Certificação AWS",
      "goal.aws.d": "Estudar e passar no exame AWS Solutions Architect em 4 meses.",
      "goal.english": "Atingir proficiência C1 em inglês",
      "goal.english.d": "Estudo e conversação constantes e, depois, um exame de proficiência (TOEFL / IELTS) em até 1 ano.",
      "goal.neuro": "Fundamentos de neurociência",
      "goal.neuro.d": "Cursos introdutórios e livros base para uma boa fundação em 4 meses.",
      "goal.philo": "Fundamentos de filosofia",
      "goal.philo.d": "Ler os clássicos (Platão, Aristóteles, Kant) e escrever resumos.",
      "goal.run": "Correr 1 km sem parar",
      "goal.run.d": "Evoluir de 500 m até 1 km confortáveis em ~7 semanas.",
      "goal.bike": "Pedalar 30 km",
      "goal.bike.d": "Progredir de 10 km até 30 km ao longo de dois meses.",
      "goal.muay": "3º grau no Muay Thai",
      "goal.muay.d": "Técnica, condicionamento e sparring rumo ao próximo grau em até 1 ano.",

      "meta.certs.title": "Certificados — Gabriel Bustus",
      "certs.eyebrow": "Certificados",
      "certs.title": "Certificados & credenciais",
      "certs.lead": "PDFs para download de cursos e credenciais que concluí.",
      "certs.download": "Baixar",
      "cert.ai": "Ferramentas e Aplicações de IA",
      "cert.global": "Global Network",
      "cert.lan": "Local Area Network",
      "cert.excel": "Microsoft Excel",

      "meta.settings.title": "Configurações — Gabriel Bustus",
      "set.title": "Configurações",
      "set.themeLabel": "Tema",
      "set.themeHint": "Alterne entre escuro e claro.",
      "set.dark": "Escuro",
      "set.light": "Claro",
      "set.langLabel": "Idioma",
      "set.langHint": "Escolha o idioma do site.",
      "set.fontLabel": "Tamanho da fonte",
      "set.fontHint": "Ajuste o tamanho base de leitura.",
      "set.save": "Salvar configurações",
      "set.back": "Voltar ao início",
      "toast.saved": "Configurações salvas",
      "toast.theme.dark": "Tema alterado para escuro",
      "toast.theme.light": "Tema alterado para claro",
      "toast.lang": "Idioma: Português",
      "toast.font": "Tamanho da fonte: ",

      /* ===================== páginas dos projetos ===================== */
      "cs.faq": "FAQ",
      "cs.faqTitle": "Perguntas frequentes",
      "cs.backWork": "Voltar aos projetos",

      /* ---- Serveo ---- */
      "serveo.meta": "Serveo — SaaS de gestão para restaurantes",
      "serveo.badge": "SaaS multi-tenant para restaurantes",
      "serveo.h1a": "O restaurante todo",
      "serveo.h1b": "em uma só tela.",
      "serveo.lead":
        "O Serveo une PDV, KDS, salão, delivery, cardápio digital, IA conversacional e motor fiscal — para a operação que não pode perder uma comanda nem uma nota.",
      "serveo.cta1": "Ver os módulos",
      "serveo.cta2": "Stack técnica",
      "serveo.s1n": "12", "serveo.s1l": "migrations cobrindo 10 fases",
      "serveo.s2n": "2", "serveo.s2l": "apps Angular (PDV + PWA)",
      "serveo.s3n": "100%", "serveo.s3l": "Supabase Cloud — sem backend próprio",
      "serveo.s4n": "IA", "serveo.s4l": "Edge Functions com Anthropic",
      "serveo.modEyebrow": "A plataforma",
      "serveo.modTitle": "Da mesa à cozinha, ao fiscal.",
      "serveo.modLead":
        "Doze módulos integrados que conversam por RLS, triggers Postgres e Edge Functions.",
      "serveo.m1t": "PDV", "serveo.m1d": "Frente de caixa rápida, comandas, divisão de conta e múltiplas formas de pagamento.",
      "serveo.m2t": "KDS", "serveo.m2d": "Painel da cozinha em tempo real — preparo, prioridades e tempo por prato.",
      "serveo.m3t": "Salão", "serveo.m3d": "Mapa de mesas, status, junções e reservas com sincronização ao vivo.",
      "serveo.m4t": "Delivery", "serveo.m4d": "Pedidos, taxa por região, status de entrega e integração com motoboy.",
      "serveo.m5t": "Cardápio digital", "serveo.m5d": "QR Code na mesa, PWA do cliente, abertura de comanda sem app.",
      "serveo.m6t": "IA conversacional", "serveo.m6d": "Garçom virtual e atendimento WhatsApp com Anthropic via Edge Functions.",
      "serveo.m7t": "Motor fiscal", "serveo.m7d": "NFC-e SEFAZ, contingência e impressão automática integradas ao PDV.",
      "serveo.m8t": "Meta / WhatsApp", "serveo.m8d": "Webhook integrado ao Meta Graph para pedidos e respostas automáticas.",
      "serveo.m9t": "Relatórios", "serveo.m9d": "Vendas, ticket médio, mix de produtos e fechamento de caixa em tempo real.",
      "serveo.stackEyebrow": "Arquitetura",
      "serveo.stackTitle": "Sem backend próprio. Supabase + Angular.",
      "serveo.stackLead":
        "Regras de negócio em policies RLS, triggers Postgres ou Edge Functions Deno. Multi-tenant nativo.",
      "serveo.feT": "Frontend",
      "serveo.fe1": "admin-pdv · Angular 17 — operação interna",
      "serveo.fe2": "menu-pwa · Angular 17 — cliente final (QR mesa)",
      "serveo.fe3": "PWA com modo offline",
      "serveo.beT": "Backend-as-a-Service",
      "serveo.be1": "Supabase Cloud — Postgres + RLS",
      "serveo.be2": "Auth, Realtime, Storage",
      "serveo.be3": "Edge Functions Deno (IA, fiscal, webhook)",
      "serveo.phEyebrow": "Roadmap",
      "serveo.phTitle": "Construído em 10 fases.",
      "serveo.phLead":
        "Todas as fases (0–10) já têm migração e as Edge Functions necessárias. Integrações externas entregues como stubs documentados.",
      "serveo.p1l": "FASE 0–1", "serveo.p1t": "Fundação + Operação",
      "serveo.p2l": "FASE 2–3", "serveo.p2t": "Estoque + Compras",
      "serveo.p3l": "FASE 4", "serveo.p3t": "Cardápio digital + QR",
      "serveo.p4l": "FASE 5–6", "serveo.p4t": "Delivery + Pagamentos",
      "serveo.p5l": "FASE 7", "serveo.p5t": "Motor fiscal NFC-e",
      "serveo.p6l": "FASE 8–10", "serveo.p6t": "IA + Meta + BI",
      "serveo.q1": "Por que multi-tenant?",
      "serveo.a1": "Cada restaurante tem o próprio espaço lógico isolado por RLS, sem instâncias separadas — menor custo e deploy mais simples.",
      "serveo.q2": "Funciona sem internet?",
      "serveo.a2": "O PDV opera em modo PWA com cache local; comandas sincronizam quando a conexão volta. O motor fiscal tem contingência NFC-e.",
      "serveo.q3": "Como funciona a IA conversacional?",
      "serveo.a3": "Edge Functions chamam a API da Anthropic com contexto do cardápio e da comanda. O cliente conversa em linguagem natural pelo WhatsApp ou pelo QR.",

      /* ---- Lumo ---- */
      "lumo.meta": "Lumo — Controle financeiro para pequenas empresas",
      "lumo.badge": "SaaS financeiro para pequenas empresas",
      "lumo.h1a": "Dinheiro entrando.",
      "lumo.h1b": "E saindo no controle.",
      "lumo.lead":
        "O Lumo é o controle financeiro feito para barbearias, lojas de roupas e pequenas empresas — com OCR de notas fiscais, precificação automática e dashboard em tempo real.",
      "lumo.cta1": "Conhecer recursos",
      "lumo.cta2": "Ver planos",
      "lumo.s1n": "7d", "lumo.s1l": "trial gratuito sem cartão",
      "lumo.s2n": "OCR", "lumo.s2l": "Gemini extrai notas em segundos",
      "lumo.s3n": "RLS", "lumo.s3l": "multi-tenant nativo no Postgres",
      "lumo.s4n": "PIX", "lumo.s4l": "cartão e boleto via Mercado Pago",
      "lumo.modEyebrow": "Funcionalidades",
      "lumo.modTitle": "Tudo que o dono precisa, sem planilha.",
      "lumo.m1t": "Multi-tenant", "lumo.m1d": "Cada empresa enxerga só os próprios dados, garantido por RLS no Postgres.",
      "lumo.m2t": "OCR de notas fiscais", "lumo.m2d": "Tire foto da nota — o Gemini 2.0 Flash extrai número, CNPJ, valor e itens automaticamente.",
      "lumo.m3t": "Clientes & CRM leve", "lumo.m3d": "Cadastro de clientes, histórico de compras e ticket médio individual.",
      "lumo.m4t": "Entradas e saídas", "lumo.m4d": "Categoria, cliente, forma de pagamento e centro de custo em cada movimento.",
      "lumo.m5t": "Centro de custos", "lumo.m5d": "Aluguel, água, luz, internet — com rateio automático entre serviços e produtos.",
      "lumo.m6t": "Precificação automática", "lumo.m6d": "Calcula o preço sugerido por serviço considerando todos os custos diretos e indiretos.",
      "lumo.m7t": "Dashboard", "lumo.m7d": "Entradas, saídas, custos e lucro do mês em uma tela só.",
      "lumo.m8t": "Assinaturas Mercado Pago", "lumo.m8d": "PIX, cartão e boleto. Trial de 14 dias e renovação automática.",
      "lumo.stackEyebrow": "Stack",
      "lumo.stackTitle": "Moderno, simples, deploy em minutos.",
      "lumo.t1t": "Next.js 14", "lumo.t1d": "App Router · TS · Tailwind",
      "lumo.t2t": "Supabase", "lumo.t2d": "Postgres + Auth + Storage",
      "lumo.t3t": "Gemini 2.0", "lumo.t3d": "OCR de notas fiscais",
      "lumo.t4t": "Mercado Pago", "lumo.t4d": "assinaturas recorrentes",
      "lumo.plEyebrow": "Planos",
      "lumo.plTitle": "Comece grátis. Cresça quando precisar.",
      "lumo.pl1t": "Trial", "lumo.pl1b": "Pra testar antes de assinar.", "lumo.pl1a": "14 dias", "lumo.pl1p": "Sem cartão",
      "lumo.pl1f1": "Acesso completo", "lumo.pl1f2": "OCR de notas",
      "lumo.pl2t": "Essencial", "lumo.pl2b": "Para barbearias e lojas pequenas.", "lumo.pl2a": "R$ 69,90", "lumo.pl2p": "por mês",
      "lumo.pl2f1": "Clientes ilimitados", "lumo.pl2f2": "Entradas e saídas", "lumo.pl2f3": "OCR de notas fiscais", "lumo.pl2f4": "Dashboard mensal",
      "lumo.pl3t": "Profissional", "lumo.pl3b": "Para quem cresce.", "lumo.pl3a": "R$ 149,90", "lumo.pl3p": "por mês",
      "lumo.pl3f1": "Tudo do Essencial", "lumo.pl3f2": "Centro de custos com rateio", "lumo.pl3f3": "Precificação automática", "lumo.pl3f4": "Múltiplos usuários",
      "lumo.pop": "Mais popular",
      "lumo.q1": "O Lumo serve para a minha barbearia / loja?",
      "lumo.a1": "Sim. Foi desenhado para barbearias, lojas de roupas e pequenas empresas que precisam saber o lucro real sem entender contabilidade.",
      "lumo.q2": "Como funciona o OCR de notas?",
      "lumo.a2": "Você anexa foto ou PDF da nota e o Gemini 2.0 Flash extrai número, CNPJ, valor total e itens. Você confere e salva.",
      "lumo.q3": "Meus dados ficam isolados?",
      "lumo.a3": "Sim. Cada empresa tem RLS no Postgres garantindo que ninguém consegue ler nada além do próprio espaço — nem mesmo por engano.",
      "lumo.q4": "Posso pagar com PIX?",
      "lumo.a4": "Sim. As assinaturas vão pelo Mercado Pago e aceitam PIX, cartão e boleto.",

      /* ---- Vexia ---- */
      "vexia.meta": "Vexia — Plataforma inteligente para coleta urbana e frotas",
      "vexia.badge": "Plataforma operacional com IA para coleta urbana e frotas",
      "vexia.h1a": "A cidade limpa começa com",
      "vexia.h1b": "decisões em tempo real.",
      "vexia.lead":
        "O Vexia une frota ao vivo, roteirização inteligente, oficina, fiscalização e relatórios em uma só plataforma — para empresas de coleta urbana que não podem errar uma rota nem um documento da prefeitura.",
      "vexia.cta1": "Agendar demonstração",
      "vexia.cta2": "Ver a plataforma",
      "vexia.s1n": "-32%", "vexia.s1l": "custo de combustível por rota otimizada",
      "vexia.s2n": "+45%", "vexia.s2l": "eficiência operacional média",
      "vexia.s3n": "100%", "vexia.s3l": "rastreabilidade da frota e equipes",
      "vexia.s4n": "24/7", "vexia.s4l": "monitoramento ao vivo da operação",
      "vexia.mapBar": "vexia.app — Mapa operacional ao vivo",
      "vexia.lg1": "Em rota", "vexia.lg2": "Coletando", "vexia.lg3": "Parado", "vexia.lg4": "Oficina",
      "vexia.trust": "Construído para operações que não podem parar",
      "vexia.tr1": "Empresas de coleta", "vexia.tr2": "Cooperativas", "vexia.tr3": "Oficinas próprias", "vexia.tr4": "Programas de reciclagem", "vexia.tr5": "Contratos com prefeitura",
      "vexia.probEyebrow": "O problema",
      "vexia.probTitle": "A coleta urbana ainda anda no escuro.",
      "vexia.probLead": "Planilhas perdidas, rádio pra acompanhar caminhão, multas que ninguém vê chegar, manutenção corretiva e cidadão reclamando antes do gestor saber. O Vexia muda isso.",
      "vexia.pr1t": "Sem visibilidade", "vexia.pr1d": "Você só descobre que a coleta falhou quando o cidadão liga reclamando.",
      "vexia.pr2t": "Papelada que esconde dinheiro", "vexia.pr2d": "Checklists em papel, ordens de serviço soltas, KM e combustível impossíveis de auditar.",
      "vexia.pr3t": "Decisão sem dado", "vexia.pr3d": "Sem indicadores, cada reunião com a prefeitura vira achismo — e o contrato vira risco.",
      "vexia.modEyebrow": "A plataforma",
      "vexia.modTitle": "Tudo que sua operação precisa, em um só lugar.",
      "vexia.modLead": "Módulos integrados que conversam entre si — do app do motorista ao painel do dono.",
      "vexia.m1t": "Frota ao Vivo", "vexia.m1d": "Mapa em tempo real com cada veículo, status, rota e equipe a bordo.",
      "vexia.m2t": "Roteirização Inteligente", "vexia.m2d": "Planeje setores, dimensione rotas e simule cenários antes de despachar.",
      "vexia.m3t": "Agente IA Operacional", "vexia.m3d": "Faça perguntas em linguagem natural e receba diagnósticos da operação na hora.",
      "vexia.m4t": "VexiaMec — Oficina", "vexia.m4d": "Ordens de serviço, manutenção preventiva, peças e custo por veículo.",
      "vexia.m5t": "Checklist Digital", "vexia.m5d": "Pré e pós-operação, com fotos, assinatura e auditoria por veículo.",
      "vexia.m6t": "Gestão de Equipes", "vexia.m6d": "Funcionários, escalas, ausências, faltas e produtividade individual.",
      "vexia.m7t": "Eco Pontos", "vexia.m7d": "Programa de reciclagem com pontuação, gamificação e relatório ESG.",
      "vexia.m8t": "Financeiro & Contratos", "vexia.m8d": "Custo por rota, por veículo e por contrato — com a empresa pronta para entregar a medição à prefeitura.",
      "vexia.m9t": "Relatórios & Documentos", "vexia.m9d": "PDF e Excel no padrão exigido pela prefeitura, gerados em segundos com 1 clique.",
      "vexia.perEyebrow": "Para quem",
      "vexia.perTitle": "Uma plataforma. Seis visões.",
      "vexia.perLead": "Cada perfil tem sua própria interface, otimizada para o que ele precisa fazer no dia a dia.",
      "vexia.pe1t": "Gestor", "vexia.pe1d": "Painel completo, decisões em tempo real e os documentos que a empresa precisa entregar à prefeitura.",
      "vexia.pe2t": "Mecânico", "vexia.pe2d": "Ordens de serviço, peças e histórico de cada veículo na palma da mão.",
      "vexia.pe3t": "Ecoponto", "vexia.pe3d": "Visão dedicada por unidade de coleta seletiva — entradas, pesagem, pontuação e relatórios ESG.",
      "vexia.pe4t": "Encarregado", "vexia.pe4d": "Coordena turnos, libera frota, valida checklists e centraliza ocorrências de campo.",
      "vexia.pe5t": "Fiscal", "vexia.pe5d": "Auditoria de campo, registro de inconformidades com foto e GPS.",
      "vexia.pe6t": "Motorista", "vexia.pe6d": "App mobile com rota, checklist, ocorrências e navegação assistida.",
      "vexia.howEyebrow": "Como funciona",
      "vexia.howTitle": "Do papel ao painel em 30 dias.",
      "vexia.st1t": "Diagnóstico", "vexia.st1d": "Mapeamos sua operação, contratos e dores em uma reunião.",
      "vexia.st2t": "Setup guiado", "vexia.st2d": "Cadastramos frota, equipes e setores com você. Sem friction.",
      "vexia.st3t": "Treinamento", "vexia.st3d": "Capacitamos motoristas, gestor, mecânico e fiscal — cada um no seu app.",
      "vexia.st4t": "Go-live", "vexia.st4d": "Operação no ar com suporte dedicado nos primeiros 30 dias.",
      "vexia.voices": "Vozes do Vexia",
      "vexia.qv1tag": "Palavra do fundador",
      "vexia.qv1": "O Vexia nasceu na operação, não no escritório. Eu vivi o checklist no papel, o gestor decidindo no escuro e a prefeitura cobrando indicador que ninguém tinha. Estamos construindo a plataforma que faltava — feita por quem entende o caminhão e o painel.",
      "vexia.qv1name": "Gabriel Bustus", "vexia.qv1role": "CEO & Fundador · GB Systems",
      "vexia.qv2tag": "Quem usa",
      "vexia.qv2": "Atuante na área de limpeza pública há 7 anos, nunca vi nada igual: tudo em uma única plataforma. Sempre estivemos defasados de algo tão completo, simples e fácil de usar. Os níveis de acesso por operador e o alto controle das informações reduzem drasticamente a margem de erro.",
      "vexia.qv2name": "Vander Cattini", "vexia.qv2role": "Analista de Planejamento · SP Urbano",
      "vexia.plEyebrow": "Planos",
      "vexia.plTitle": "Cresça no seu ritmo.",
      "vexia.plLead": "Comece pelo essencial e ative módulos conforme a operação amadurece.",
      "vexia.onreq": "Sob consulta", "vexia.pop": "Mais popular",
      "vexia.pl1t": "Essencial", "vexia.pl1b": "Para começar a enxergar a operação.", "vexia.pl1p": "Por veículo / mês",
      "vexia.pl1f1": "Frota ao vivo", "vexia.pl1f2": "App do motorista", "vexia.pl1f3": "Checklist digital", "vexia.pl1f4": "Relatórios básicos",
      "vexia.pl1c": "Começar",
      "vexia.pl2t": "Profissional", "vexia.pl2b": "A operação completa, ponta a ponta.", "vexia.pl2p": "Por veículo / mês",
      "vexia.pl2f1": "Tudo do Essencial", "vexia.pl2f2": "Roteirização inteligente", "vexia.pl2f3": "VexiaMec — Oficina", "vexia.pl2f4": "Fiscalização & auditoria", "vexia.pl2f5": "Financeiro por contrato", "vexia.pl2f6": "Documentos no padrão da prefeitura",
      "vexia.pl2c": "Falar com vendas",
      "vexia.pl3t": "Enterprise", "vexia.pl3b": "Para grupos e operações multiempresa.", "vexia.pl3p": "Customizado",
      "vexia.pl3f1": "Tudo do Profissional", "vexia.pl3f2": "Agente IA Operacional", "vexia.pl3f3": "Multiempresa & multi-contrato", "vexia.pl3f4": "SSO & integração via API", "vexia.pl3f5": "SLA dedicado",
      "vexia.pl3c": "Falar com especialista",
      "vexia.q1": "Vocês atendem prefeituras diretamente?",
      "vexia.a1": "Não. O Vexia é uma plataforma B2B feita para a empresa de coleta que tem contrato com a prefeitura. Entregamos o ferramental para que essa empresa cumpra o contrato e gere, automaticamente, os documentos, indicadores e medições que a prefeitura exige.",
      "vexia.q2": "Quanto tempo leva para implantar?",
      "vexia.a2": "A implantação típica vai de 15 a 30 dias, incluindo cadastro de frota, equipes, treinamento e go-live com suporte dedicado.",
      "vexia.q3": "Funciona offline para o motorista?",
      "vexia.a3": "Sim. O app mobile funciona em modo offline e sincroniza automaticamente quando recupera sinal — essencial para áreas rurais e periféricas.",
      "vexia.q4": "É possível integrar com nosso ERP?",
      "vexia.a4": "Sim. Disponibilizamos API e exportações estruturadas (Excel, JSON) e integramos com sistemas de folha, financeiro e BI.",
      "vexia.q5": "Como é a segurança e privacidade dos dados?",
      "vexia.a5": "O Vexia roda em infra Google Cloud / Firebase com criptografia em trânsito e em repouso, logs de auditoria imutáveis e conformidade com a LGPD.",
      "vexia.ctaTitle": "Pronto para enxergar sua operação?",
      "vexia.ctaLead": "Agende uma demonstração de 30 minutos. Sem compromisso, com casos reais.",
      "vexia.ctaBtn": "Falar com a gente",

      /* ---- AirLink ---- */
      "airlink.meta": "AirLink — Todos os seus links em um só lugar",
      "airlink.badge": "Open-source & 100% gratuito",
      "airlink.h1a": "Todos os seus links em",
      "airlink.h1b": "um só lugar.",
      "airlink.lead":
        "O AirLink é uma plataforma open-source para criar páginas de links personalizadas. Agrupe suas redes, portfólios e contatos de forma prática, gratuita e sem complicação.",
      "airlink.cta1": "Ver o código",
      "airlink.cta2": "Voltar aos projetos",
      "airlink.handle": "@gabriel.bustus",
      "airlink.bio": "Dev Full-stack & Engenheiro",
      "airlink.modEyebrow": "Destaques",
      "airlink.modTitle": "Simples, rápido e seu.",
      "airlink.m1t": "Totalmente gratuito", "airlink.m1d": "Sem planos premium escondidos, sem custos ou limitações para criar e compartilhar suas páginas de links.",
      "airlink.m2t": "Alta personalização", "airlink.m2d": "Customize cores, botões, fontes e fundos com facilidade para que a página tenha exatamente a sua identidade.",
      "airlink.m3t": "Experiência simples", "airlink.m3d": "Interface limpa e intuitiva — feita para que qualquer pessoa, de iniciantes a desenvolvedores avançados, possa usar.",
      "airlink.m4t": "Acesso instantâneo", "airlink.m4d": "Compartilhe seus links rapidamente em qualquer rede social, sem instalações ou configurações complexas.",
      "airlink.demoNote": "No AirLink real, o usuário configura cores hexadecimais, fotos de fundo, efeitos nos botões e gerencia os links via painel administrativo.",

      /* ---- GB Courses ---- */
      "gb.meta": "GB Courses — Plataforma de cursos on-demand",
      "gb.badge": "Em desenvolvimento",
      "gb.h1a": "Aprendizado on-demand,",
      "gb.h1b": "feito com cuidado.",
      "gb.lead":
        "O GB Courses é uma plataforma de cursos on-demand em desenvolvimento ativo — assinaturas por nível e uma experiência de aprendizado limpa e personalizada, entregue milestone a milestone.",
      "gb.cta": "Voltar aos projetos",
      "gb.soonTitle": "Em breve",
      "gb.soonLead": "Este case study está sendo escrito enquanto o produto é construído. Volte em breve.",

    },
  };

  function getLang() {
    const stored = localStorage.getItem("lang");
    return stored === "pt" || stored === "en" ? stored : "pt";
  }

  function t(key, lang) {
    lang = lang || getLang();
    return (T[lang] && T[lang][key]) || (T.en && T.en[key]) || key;
  }

  function apply(lang) {
    lang = lang || getLang();
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"), lang);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n-html"), lang);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr")
        .split(";")
        .forEach((pair) => {
          const [attr, key] = pair.split(":").map((s) => s && s.trim());
          if (attr && key) el.setAttribute(attr, t(key, lang));
        });
    });

    // reflect state on toggle buttons
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.textContent = lang === "en" ? "PT" : "EN";
      btn.setAttribute(
        "aria-label",
        lang === "en" ? "Mudar para português" : "Switch to English"
      );
    });
    document.querySelectorAll("[data-lang-opt]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-opt") === lang);
    });
  }

  function setLang(lang) {
    if (lang !== "pt" && lang !== "en") return;
    localStorage.setItem("lang", lang);
    apply(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  window.I18N = { t, apply, setLang, getLang };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => apply());
  } else {
    apply();
  }
})();
