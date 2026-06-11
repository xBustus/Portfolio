/* =====================================================================
   i18n — tiny bilingual (EN / PT) engine.
   Usage in markup:
     data-i18n="key"        -> sets textContent
     data-i18n-html="key"   -> sets innerHTML (for strings with markup)
     data-i18n-attr="title:key; aria-label:key2"  -> sets attributes
   Default language is English; preference is stored in localStorage.
   ===================================================================== */
(function () {
  const T = {
    en: {
      /* nav + chrome */
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
    },

    pt: {
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
    },
  };

  function getLang() {
    const stored = localStorage.getItem("lang");
    return stored === "pt" || stored === "en" ? stored : "en";
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
