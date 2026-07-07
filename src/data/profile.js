// ─────────────────────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE. Components read from this single file.
//  Update your resume info, projects, skills, experience and links below.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  driver: {
    firstName: 'AYUSH',
    lastName: 'BHATT',
    number: 6,
    title: 'Software Developer',
    team: 'AB Motorsport',
    tagline:
      'Backend systems, workflow orchestration & scalable cloud platforms — building event-driven fintech at race pace.',
    location: 'Bangalore, India',
  },

  links: {
    email: 'bhattayush15@gmail.com',
    github: 'https://github.com/AyushB21',
    githubUser: 'AyushB21',
    linkedin: 'https://www.linkedin.com/in/ayushb5',
    leetcode: 'https://leetcode.com/u/ayushbh0612/',
    resume: '/resume.pdf', // drop your file at public/resume.pdf
  },

  // ── THE GARAGE (projects) ──────────────────────────────────────────────────
  // repoName is matched against cached GitHub data (stars/description) at build.
  projects: [
    {
      id: 'steagnomask',
      name: 'SteagnoMask',
      repoName: 'SteagnoMask',
      badge: 'Featured · IEEE',
      badgeCompound: 'soft',
      points: 24,
      short:
        'Flask system embedding hidden watermarks across image, video, audio & text to block unauthorized AI training.',
      subtitle: 'AI data-protection & ethical ML · IEEE-published',
      stack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'Machine Learning', 'Git'],
      stats: [
        { value: '95→40%', label: 'Img accuracy cut' },
        { value: '76→50%', label: 'Text sentiment cut' },
        { value: '4', label: 'Media types' },
      ],
      overview:
        'A Flask-based data-protection platform that embeds imperceptible digital watermarks into images, video, audio and text — giving creators a practical way to prove ownership and decide whether their work may be used to train AI models.',
      results: [
        {
          label: 'Micro-interference engine',
          text: "Injects finely tuned perturbation patterns that quietly steer a model's learning away from the true signal, dropping image-classification accuracy from 95% to 40% and text-sentiment accuracy from 76% to 50% in controlled tests.",
        },
        {
          label: 'Multi-modal coverage',
          text: 'A single Flask pipeline protects four media types — image, video, audio and text — with an SQLite-backed registry of every watermarked asset.',
        },
        {
          label: 'Research-backed',
          text: 'The technique became the foundation of a co-authored IEEE paper on enforcing ownership and authorization protocols in machine-learning development.',
        },
      ],
      github: 'https://github.com/AyushB21',
      demo: null,
    },
    {
      id: 'qrbuddy',
      name: 'QR Buddy',
      repoName: 'QR-Buddy',
      badge: 'Deployed',
      badgeCompound: 'med',
      points: 12,
      short:
        'End-to-end QR ticketing & attendance platform — 2,500+ API requests across 3 events of 500+ attendees.',
      subtitle: 'Scalable event ticketing & attendance platform',
      stack: ['Python', 'Flask', 'HTML', 'CSS', 'SQLite', 'Git'],
      stats: [
        { value: '2,500+', label: 'API requests' },
        { value: '3', label: 'Live events' },
        { value: '500+', label: 'Attendees/event' },
      ],
      overview:
        'An end-to-end event-operations platform that issues QR-coded tickets, verifies attendees at the gate and keeps organisers in control through an admin dashboard and automated email notifications.',
      results: [
        {
          label: 'QR ticketing & check-in',
          text: 'Generates unique QR passes and validates them instantly on entry, comfortably serving 2,500+ API requests.',
        },
        {
          label: 'Proven at scale',
          text: 'Ran live across three large events of 500+ attendees each, keeping entry queues moving and attendance records accurate.',
        },
        {
          label: 'Backend leadership',
          text: 'Led backend development and integrated the frontend modules within a focused three-person team.',
        },
      ],
      github: 'https://github.com/AyushB21',
      demo: null,
    },
    {
      id: 'foodmlops',
      name: 'Food-Demand-Forecasting-MLOPS',
      repoName: 'Food-Demand-Forecasting-MLOPS',
      badge: 'MLOps',
      badgeCompound: 'hard',
      points: 15,
      short:
        'End-to-end MLOps pipeline forecasting food demand on 100K+ samples — RMSE 63, tracked with DVC & MLflow.',
      subtitle: 'Production ML pipeline with experiment tracking',
      stack: ['Python', 'MLflow', 'DVC', 'Power BI', 'scikit-learn', 'Pandas'],
      stats: [
        { value: '100K+', label: 'Samples' },
        { value: '63', label: 'RMSE' },
        { value: 'E2E', label: 'Pipeline' },
      ],
      overview:
        'A production-style MLOps pipeline that forecasts food demand end-to-end — from raw-data ingestion through to a tracked, reproducible and continuously monitored model.',
      results: [
        {
          label: 'Scalable pipeline',
          text: 'Engineered and optimised data & ML stages that process 100K+ samples and reach a solid RMSE of 63 on demand prediction.',
        },
        {
          label: 'Experiment tracking',
          text: 'Wired in DVC for data versioning and MLflow for run tracking and real-time model monitoring, making every result fully reproducible.',
        },
        {
          label: 'Decision-ready insights',
          text: 'Surfaced forecasts through interactive Power BI dashboards for transparent, at-a-glance reporting.',
        },
      ],
      github: 'https://github.com/AyushB21',
      demo: null,
    },
  ],

  // ── TELEMETRY (skills) — level out of 5 ────────────────────────────────────
  skillSectors: [
    {
      id: 's1',
      code: 'S1',
      compound: 'soft',
      sector: 'Sector 1',
      title: 'Languages',
      skills: [
        ['Python', 5],
        ['Java', 5],
        ['SQL', 4],
        ['JavaScript', 3],
        ['Node.js', 3],
        ['HTML', 4],
        ['CSS', 4],
      ],
    },
    {
      id: 's2',
      code: 'S2',
      compound: 'med',
      sector: 'Sector 2',
      title: 'Frameworks & Data',
      skills: [
        ['Spring Boot', 5],
        ['Flask', 5],
        ['REST APIs', 5],
        ['Kafka', 4],
        ['MySQL', 4],
        ['SQLite', 4],
        ['MongoDB', 3],
        ['Redis', 3],
        ['SQS', 4],
        ['Selenium', 3],
      ],
    },
    {
      id: 's3',
      code: 'S3',
      compound: 'hard',
      sector: 'Sector 3',
      title: 'Tools / Cloud',
      skills: [
        ['Git', 5],
        ['AWS', 4],
        ['Docker', 4],
        ['Zeebe / Camunda', 4],
        ['Jenkins', 3],
        ['Postman', 4],
        ['JIRA', 4],
        ['Linux', 4],
        ['Flagsmith', 3],
        ['Salesforce', 3],
        ['DVC', 3],
        ['MLflow', 3],
        ['Power BI', 3],
      ],
    },
  ],

  // ── RACE CALENDAR (experience) ─────────────────────────────────────────────
  experience: [
    {
      id: 'exp-rupeek-sde',
      round: 'Round 03 · Home Grand Prix',
      role: 'Software Developer',
      org: 'Rupeek Fintech · Bangalore',
      dates: '09/2025 — Present',
      short: 'Architected part-release slot booking (Spring Boot + Zeebe) — 500+ customers in 2 weeks.',
      tools: ['Java', 'Spring Boot', 'Zeebe', 'SQS', 'Kafka', 'Salesforce', 'Flagsmith', 'Camunda'],
      results: [
        {
          label: 'End-to-end workflow architecture',
          text: 'Designed and shipped the part-release slot-booking capability on Java Spring Boot and Zeebe — introducing new workflows, DTO layers and an order-level data model. A Salesforce ticketing integration let 500+ customers book slots within the first two weeks.',
        },
        {
          label: 'Lender-specific integrations',
          text: 'Led the part-release integration for lender SIB, building Zeebe orchestration pipelines, service contracts and compatibility layers so new lenders onboard without disrupting existing full-release journeys.',
        },
        {
          label: 'Digital automation',
          text: 'Built an e-Sign pipeline connecting payment events to signing providers for fully paperless, compliant document execution across customers and lenders.',
        },
        {
          label: 'Feature rollout & risk control',
          text: 'Hardened the platform with Flagsmith city-wise rollouts, renewal blocking (cityId + loanRequestId) and rebate-cancellation APIs to keep feature exposure and risk tightly controlled.',
        },
        {
          label: 'Scalable bulk processing',
          text: 'Designed a bulk file-upload system that validates GL IDs and publishes verified documents to SQS as the trusted source of truth for downstream processing.',
        },
      ],
    },
    {
      id: 'exp-rupeek-intern',
      round: 'Round 02 · Rookie Test',
      role: 'Software Developer Intern',
      org: 'Rupeek · Bangalore',
      dates: '05/2025 — 09/2025',
      short: 'Rookie stint that earned the full-time seat — workflow & backend groundwork.',
      tools: ['Java', 'Spring Boot', 'Zeebe', 'REST'],
      results: [
        {
          label: 'Foundation stint',
          text: 'Built the backend services and Zeebe-based workflow groundwork that earned a full-time race seat at the end of the internship.',
        },
        {
          label: 'Hands-on delivery',
          text: 'Contributed to Spring Boot service development and orchestration flows across the lending platform.',
        },
      ],
    },
    {
      id: 'exp-preprod',
      round: 'Round 01 · Data Circuit',
      role: 'Data Analyst & Web Developer',
      org: 'PreProd Corp · Bangalore',
      dates: '11/2023 — 05/2024',
      short: 'ML pipelines for demand forecasting (100K+ samples, RMSE 63); Power BI, DVC, MLflow.',
      tools: ['Python', 'Flask', 'Power BI', 'DVC', 'MLflow', 'Pandas'],
      results: [
        {
          label: 'ML pipeline optimisation',
          text: 'Engineered and optimised scalable data & ML pipelines for food-demand forecasting across 100K+ samples, reaching a strong RMSE of 63.',
        },
        {
          label: 'Tracking & visualisation',
          text: 'Implemented DVC and MLflow for experiment tracking and monitoring, and built interactive Power BI dashboards for reproducible, transparent reporting.',
        },
        {
          label: 'Full-stack data products',
          text: 'Developed and deployed Flask applications — including automated invoice/report generation and a CRM serving 3 hospitals and 30+ enterprise clients.',
        },
        {
          label: 'Applied research',
          text: 'Ran deep-dive research across AI, ML and Data Science, turning academic and industry insight into practical, data-driven decisions.',
        },
      ],
    },
  ],

  // ── THE ACADEMY (education) — static ───────────────────────────────────────
  education: [
    {
      dates: '2021 — 2025',
      formula: 'Formula 1 · Degree',
      title: 'B.Tech, Computer Science & Engineering',
      org: 'Vellore Institute of Technology · Bhopal',
      notes: 'CGPA 8.60',
    },
    {
      dates: '2020 — 2021',
      formula: 'Formula 2 · Senior Secondary',
      title: 'Senior Secondary (12th)',
      org: 'Kendriya Vidyalaya No.2, AFS Tambaram · Chennai',
      notes: '87.6% · CBSE Board',
    },
    {
      dates: '2018 — 2019',
      formula: 'Formula 3 · Secondary',
      title: 'Secondary (10th)',
      org: 'Kendriya Vidyalaya No.2, AFS Tambaram · Chennai',
      notes: '85% · CBSE Board',
    },
  ],

  // ── PODIUM (achievements / certifications) ─────────────────────────────────
  podium: [
    { pos: 'P2', title: 'Google Project Management' },
    { pos: 'P1', title: 'IEEE Publication 2025' },
    { pos: 'P3', title: 'Google Cloud Digital Leader' },
  ],
  pointsFinishes: [
    'Salesforce Dev Virtual Internship',
    'MySQL Bootcamp',
    'Privacy & Security in Social Media',
  ],
};
