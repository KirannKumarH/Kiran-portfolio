export const caseStudies = [
  {
    slug: 'clicktrail',
    name: 'ClickTrail',
    headline: 'Know every link works—and why it matters.',
    category: 'Campaign link intelligence',
    url: 'https://clicktrail.cloud/',
    screenshot: '/project-screenshots/clicktrail.jpg',
    screenshotAlt: 'ClickTrail public product page showing a campaign link audit interface.',
    metaDescription: 'How ClickTrail brings link health, redirect checks, tracking parameters, and campaign analytics into one SaaS workflow.',
    summary: 'A SaaS product for teams that need to know whether campaign links still work, preserve tracking, and keep earning after launch.',
    problem: 'A link can fail after a campaign goes live: a destination may disappear, a redirect chain can strip tracking parameters, and the problem may only surface in a later report.',
    users: 'Performance marketers, agencies, and teams managing campaigns across many destinations.',
    role: 'Co-Founder & CTO at Ketrium Labs. Implementation details are drawn from the supplied resume project history and aligned to the current ClickTrail product brief.',
    architecture: [
      { title: 'Web product', body: 'React and TypeScript experience for link management, campaign reporting, and workspace use.' },
      { title: 'Service layer', body: 'Go with Fiber APIs and access-control middleware for product and workspace workflows.' },
      { title: 'Data & analytics', body: 'PostgreSQL for application data, Redis for caching, and batch aggregation for click analytics.' },
      { title: 'Billing', body: 'Stripe checkout, subscription enforcement, upgrades, and webhook handling.' }
    ],
    stack: ['Go · Fiber', 'React · TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'Turborepo'],
    decisions: [
      { title: 'Treat the destination as a monitored dependency', body: 'The public product experience audits destinations and explains the result, extending link management beyond shortening.' },
      { title: 'Preserve campaign context through redirects', body: 'Tracking-parameter integrity is a visible product concern, so link checks report the redirect path and whether parameters survive.' },
      { title: 'Separate recurring value from click volume', body: 'Public pricing describes monitoring cadence and monitored-link limits as the plan meter.' }
    ],
    challenges: [
      { problem: 'Analytics must stay useful as click volume and dimensions grow.', solution: 'The resume records Redis caching and batch aggregation for analytics, alongside time-series reporting.' },
      { problem: 'Teams need to act on a broken destination before campaign spend is wasted.', solution: 'The public walkthrough shows scheduled checks and alert workflows. Its overnight incident is explicitly illustrative, so it is shown only as product behavior, not a customer result.' }
    ],
    reliability: 'The public site demonstrates destination checks, redirect tracing, parameter-preservation checks, and scheduled monitoring. The implementation details that are public in the resume include caching and batch aggregation. Security specifics beyond the product’s public security page are not claimed here.',
    walkthrough: [
      'Submit a campaign or landing-page URL for a destination audit.',
      'Inspect redirect hops and whether UTMs survive the route.',
      'Monitor saved links on a recurring cadence and review campaign analytics.'
    ],
    publicCapabilities: ['Destination audits', 'Redirect tracing', 'Tracking-parameter checks', 'Scheduled link monitoring', 'Campaign analytics'],
    briefCapabilities: ['Multi-tenant workspaces', 'Authentication and subscriptions', 'API access and webhooks', 'Automated campaign workflows'],
    status: 'The public ClickTrail site is live. Its sample-day totals and overnight incident are labelled illustrative; no customer outcome or portfolio-reported performance metric is claimed here.',
    lesson: 'Campaign links need operational checks after launch. A useful analytics product should connect the destination, the redirect path, and the campaign context in one place.'
  },
  {
    slug: 'citetrail',
    name: 'CiteTrail',
    headline: 'See who AI cites when buyers ask.',
    category: 'AI search visibility & citation intelligence',
    url: 'https://citetrail.cloud/',
    screenshot: '/project-screenshots/citetrail.jpg',
    screenshotAlt: 'CiteTrail public product page showing an AI answer and its cited source cards, labelled as an illustrative example.',
    metaDescription: 'How CiteTrail measures brand mentions and citations across AI assistant answers over repeated runs.',
    summary: 'A product for understanding how AI assistants answer buyer questions, which sources they cite, and where a brand is missing.',
    problem: 'A brand can be absent from an AI answer or its citations even when competing sources are repeatedly recommended. One model response is not enough to establish a durable trend.',
    users: 'SaaS and ecommerce teams, content and SEO specialists, and agencies tracking how assistants represent brands.',
    role: 'Co-Founder & CTO at Ketrium Labs, shaping the product and its engineering. The public site describes product workflows; no private infrastructure design is published.',
    architecture: [
      { title: 'Question set', body: 'Teams define buyer questions and competitors to monitor.' },
      { title: 'Provider runs', body: 'CiteTrail collects answers from supported assistant APIs. The public site lists OpenAI, Anthropic, Perplexity, and Google providers.' },
      { title: 'Citation record', body: 'Answers and sources are retained so mentions, citations, and competitor coverage can be compared across runs.' },
      { title: 'Reporting', body: 'A dated history and reports make changes in the answer and its citations inspectable.' }
    ],
    stack: ['OpenAI API', 'Anthropic API', 'Perplexity API', 'Google AI APIs', 'Background processing', 'Analytics & reporting'],
    decisions: [
      { title: 'Measure repeated answers, not one-off outputs', body: 'The product explains that model answers vary and shows repeated runs across assistants. This makes the limits of a single observation visible.' },
      { title: 'Keep citations attached to the answer', body: 'The public product walkthrough connects source references to the answer, making it easier to inspect what an assistant used.' },
      { title: 'Separate a readiness crawl from an AI run', body: 'The live public page distinguishes a one-page site crawl from account-based provider runs.' }
    ],
    challenges: [
      { problem: 'Answers and citations can vary from run to run.', solution: 'The product records runs over time and presents answer history rather than implying that one response settles visibility.' },
      { problem: 'A visibility score alone does not explain what to change.', solution: 'The public walkthrough connects a missing citation to the sources present and a suggested content action. Its example is explicitly illustrative.' }
    ],
    reliability: 'The public site states that provider outputs vary between runs, distinguishes real-time site crawls from AI prompts, and labels sample answers and histories illustrative. The underlying deployment, queue, storage, and security architecture is not publicly documented and is not described as fact here.',
    walkthrough: [
      'Choose buyer questions and the AI assistants to check.',
      'Review the answer and inspect the sources cited or omitted.',
      'Compare repeated runs to see how the answer and citations change over time.'
    ],
    publicCapabilities: ['One-page readiness crawl', 'Provider-backed answer runs', 'Citation and competitor analysis', 'Stored answer history', 'Reports and free tools'],
    briefCapabilities: ['Multi-provider LLM integration', 'Background processing', 'AI visibility monitoring', 'Analytics and reporting'],
    status: 'The public CiteTrail site is live and documents supported workflows. Illustrative examples are labelled on the site; no customer visibility gains or outcome metrics are claimed here.',
    lesson: 'AI visibility is a pattern across questions, providers, and time. Keeping the answer and the cited source together makes that pattern easier to act on.'
  },
  {
    slug: 'neuraleye',
    name: 'NeuralEye',
    headline: 'Find every brand appearance, frame by frame.',
    category: 'Computer vision · sponsorship analytics',
    url: 'https://neuraleye.cloud/',
    screenshot: '/project-screenshots/neuraleye.jpg',
    screenshotAlt: 'NeuralEye public demo showing a sponsor mark detected within a sports broadcast frame.',
    metaDescription: 'How NeuralEye turns video footage into frame-level sponsor recognition records and share-of-voice reporting.',
    summary: 'A computer-vision product that finds brand marks in video and attaches each detection to a frame, timestamp, and visual region.',
    problem: 'Reviewing long video footage by hand makes sponsorship exposure difficult to find, verify, and report at the level of an individual appearance.',
    users: 'Sports rights holders, sponsorship teams, and organizations measuring brand visibility across video footage.',
    role: 'Co-Founder & CTO at Ketrium Labs. The current public product focuses on sponsor-brand evidence in video; older generic object-detection language has been left out.',
    architecture: [
      { title: 'Footage', body: 'A video is processed as a sequence of frames.' },
      { title: 'Brand detection', body: 'The current product page describes zero-shot brand detection without a customer-supplied training set.' },
      { title: 'Evidence record', body: 'A detection can be inspected by frame, timestamp, brand mark, and bounding region.' },
      { title: 'Analysis', body: 'The public demo shows a detection timeline, a record view, and share-of-voice reporting.' }
    ],
    stack: ['Computer vision', 'Video processing', 'Brand recognition', 'Asynchronous job orchestration', 'Detection analytics', 'Exportable evidence'],
    decisions: [
      { title: 'Make each result inspectable', body: 'The public demo attaches a timecode and bounding region to a detection, making a report trace back to a specific moment in the footage.' },
      { title: 'Avoid a new training-set requirement', body: 'The current product page presents zero-shot brand detection as a central product choice.' },
      { title: 'Report exposure as both totals and evidence', body: 'Share-of-voice analysis is paired with records that can be checked frame by frame.' }
    ],
    challenges: [
      { problem: 'A total exposure figure needs evidence that a sponsor can check.', solution: 'The public demo links analysis to individual detections with frame numbers, timecodes, and visual regions.' },
      { problem: 'Video is too long to inspect one frame at a time.', solution: 'The product walkthrough presents detection timelines and aggregate share-of-voice alongside the underlying records.' }
    ],
    reliability: 'The public page demonstrates a recorded sample reel and its associated detection records. Its sample marks and footage are described as demonstration material. The product’s production inference topology, retention, access-control design, and processing guarantees are not disclosed in the public material and are not claimed here.',
    walkthrough: [
      'Select a brand to inspect in a video.',
      'Review detected appearances by frame and timecode, with the mark’s visual region.',
      'Explore exposure summaries and return to the evidence behind each detection.'
    ],
    publicCapabilities: ['Zero-shot brand detection demo', 'Frame and timecode records', 'Bounding-region evidence', 'Detection timeline', 'Share-of-voice analysis'],
    briefCapabilities: ['Distributed video processing', 'Asynchronous job orchestration', 'Visual similarity search', 'Analytics and reporting'],
    status: 'The public NeuralEye site presents a live product flow and a recorded demonstration reel. Demo marks are invented for demonstration; no customer footage or measured customer results are presented.',
    lesson: 'Computer-vision reporting earns trust when every summary can be traced to the frame that produced it.'
  }
];

export const experience = [
  {
    company: 'London Stock Exchange Group',
    title: 'Senior Software Developer',
    dates: 'April 2026 — Present',
    summary: 'Building enterprise software in a data-intensive financial technology environment.',
    highlights: [
      'Contribute to platform architecture and backend APIs for complex financial datasets.',
      'Design data-access and query strategies across a distributed service environment.',
      'Add distributed tracing, application metrics, and operational monitoring with OpenTelemetry.',
      'Integrate Redis caching for high-frequency data access and responsive application workflows.'
    ],
    technologies: ['C#', '.NET 8', 'GraphQL', 'React', 'Azure', 'SQL', 'Redis', 'OpenTelemetry']
  },
  {
    company: 'Ketrium Labs',
    title: 'Co-Founder & CTO',
    dates: 'Current',
    summary: 'Co-founded a product company developing ClickTrail, CiteTrail, and NeuralEye.',
    highlights: [
      'Own product and engineering direction across SaaS, AI search visibility, and computer-vision products.',
      'Build and operate products from initial problem framing through public product experiences.'
    ],
    technologies: ['Product engineering', 'SaaS', 'AI integrations', 'Computer vision']
  },
  {
    company: 'CSGI',
    title: 'Software Developer Engineer I',
    dates: 'September 2023 — 2026',
    summary: 'Delivered enterprise SaaS features and backend services across full product releases.',
    highlights: [
      'Improved API response time from 6 minutes to 15 seconds through asynchronous execution, query optimization, and caching (resume-reported).',
      'Modernized a legacy AngularJS interface to React and TypeScript, reducing UI defects by 50% (resume-reported).',
      'Automated remediation workflows and CI/CD; the resume reports approximately $2M/year in savings and 30% shorter release cycles.',
      'Mentored 10 junior engineers and interns; the resume reports a 25% increase in team delivery velocity.'
    ],
    technologies: ['C#', '.NET', 'React', 'TypeScript', 'SQL Server', 'PostgreSQL', 'Redis', 'Azure', 'Docker']
  },
  {
    company: 'CSGI',
    title: 'Software Developer Engineer Grad',
    dates: 'February 2022 — August 2023',
    summary: 'Built an internal HR management platform and supported recruiting workflows.',
    highlights: [
      'Delivered a full-stack MVP in 30 days using FastAPI and React with TypeScript.',
      'Built authenticated REST APIs and candidate data validation; the resume reports an 80% reduction in manual effort.',
      'Designed PostgreSQL schemas and CSV exports; added structured logging and automated deployment pipelines.'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'GitHub Actions']
  },
  {
    company: 'Cognizant',
    title: 'Programmer Analyst Trainee',
    dates: 'February 2021 — February 2022',
    summary: 'Completed full-stack engineering training and built a task-tracking proof of concept.',
    highlights: [
      'Built a React and FastAPI application with REST integration, CRUD workflows, and JWT authentication.',
      'Practiced Agile delivery, API documentation, testing, and deployment with Azure DevOps.'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Azure DevOps']
  }
];

export const skillGroups = [
  { name: 'Frontend & UI', items: ['React 19', 'TypeScript', 'Vite', 'Ant Design', 'Zustand', 'TanStack React Query', 'Emotion', 'JavaScript', 'Angular', 'AngularJS', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'Bootstrap', 'jQuery', 'Streamlit', 'Plotly'] },
  { name: 'Backend & APIs', items: ['.NET Framework 4.8', '.NET Core 6+', 'ASP.NET Web API', 'C#', 'Entity Framework 6', 'Entity Framework Core', 'Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'Express.js', 'Django', 'REST APIs', 'GraphQL', 'JWT', 'Microservices', 'Dart', 'Java', 'Golang', 'Node.js'] },
  { name: 'Data & databases', items: ['SQL Server', 'Oracle', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Prisma', 'Mongoose', 'Firebase', 'SQLite'] },
  { name: 'Cloud & deployment', items: ['AWS', 'Azure', 'Azure AD', 'Google Cloud', 'Docker', 'Docker Compose', 'Supervisor', 'Kubernetes', 'Vercel', 'Netlify', 'Heroku'] },
  { name: 'Tools', items: ['Visual Studio', 'VS Code', 'Git', 'GitHub', 'Linux', 'PowerShell', 'TFS', 'Gulp', 'Postman', 'Figma', 'Jenkins', 'Webpack', 'Babel'] },
  { name: 'Mobile development', items: ['Android', 'Swift', 'Flutter', 'React Native', 'Kotlin'] },
  { name: 'AI, ML & analytics', items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Pandas', 'NumPy', 'Scikit-learn', 'OpenCV', 'LLMs', 'Financial Modeling', 'Data Visualization'] },
  { name: 'Testing', items: ['Jest', 'React Testing Library', 'pytest', 'NUnit', 'Cypress', 'Mocking', 'Unit Testing', 'Integration Testing'] },
  { name: 'Security', items: ['OAuth2', 'Row-level Security', 'Input Validation', 'SSL/TLS'] },
  { name: 'Engineering practices', items: ['ESLint', 'Prettier', 'Husky', 'Unity DI Container', 'CI/CD Pipelines', 'Automated Deployment', 'Performance Monitoring', 'Code Quality'] }
];

export const services = [
  {
    name: 'SaaS & MVP development',
    description: 'Turn a product idea into a working first version, with the core user journey and a maintainable foundation in place.',
    deliverables: 'Discovery and technical plan · application and API · data model · deployment-ready handoff',
    tools: 'React · TypeScript · FastAPI · Go · PostgreSQL',
    evidence: 'ClickTrail · CiteTrail',
    subject: 'SaaS or MVP development'
  },
  {
    name: 'Backend engineering & API development',
    description: 'Add reliable services, integrations, and data workflows when an application needs stronger foundations or new capabilities.',
    deliverables: 'API design · service implementation · background jobs · data access and observability',
    tools: 'Python · FastAPI · C# · .NET · Go · Redis · SQL',
    evidence: 'Enterprise systems · ClickTrail',
    subject: 'Backend engineering or APIs'
  },
  {
    name: 'AI integrations & workflow automation',
    description: 'Bring AI into a real product workflow with clear inputs, useful outputs, and room to evaluate quality.',
    deliverables: 'Provider integration · orchestration · retrieval or reporting workflow · operational monitoring',
    tools: 'LLM APIs · Python · FastAPI · queues · React',
    evidence: 'CiteTrail · enterprise LLM proof of concept',
    subject: 'AI integrations or automation'
  },
  {
    name: 'Modernization & performance',
    description: 'Improve an existing application’s speed, reliability, or ability to evolve without discarding everything that works.',
    deliverables: 'Performance review · migration plan · targeted refactor · deployment and observability improvements',
    tools: '.NET · React · SQL Server · PostgreSQL · Redis · CI/CD',
    evidence: 'Enterprise modernization work',
    subject: 'Application modernization or performance'
  }
];

export const additionalFeaturedProjects = [
  {
    name: 'MatterFunds',
    category: 'Financial pro forma management',
    summary: 'A financial pro forma management project focused on structured statements, project assumptions, and reporting.',
    image: '/project-illustrations/matterfunds.png',
    imageAlt: 'Illustrative MatterFunds interface graphic from the previous portfolio.',
    stack: ['FastAPI', 'Python', 'PostgreSQL', 'Streamlit', 'Plotly', 'Docker'],
    sourceNote: 'Illustration from the original repository. Financial values shown are sample interface content, not verified results.',
    details: [
      'Financial pro forma workflows for structured statements and project assumptions.',
      'Reporting and data visualization with Streamlit and Plotly.',
      'The interface values are samples; no customer or business outcomes are claimed.'
    ]
  },
  {
    name: 'Seronic Hub 360',
    category: 'Mobile · IoT',
    summary: 'A hub-management app connecting to devices over WebSockets, with ESP32 provisioning and BLE/Wi-Fi onboarding.',
    image: '/project-illustrations/seronic-hub-360.png',
    imageAlt: 'Mobile interface collage for the Seronic Hub 360 IoT app from the previous portfolio.',
    stack: ['Flutter', 'Dart', 'BLoC', 'WebSockets', 'SQLite', 'ESP32'],
    sourceNote: 'Based on the supplied resume and repository materials. No public product demo is linked.',
    details: [
      'Mobile hub management with real-time device communication over WebSockets.',
      'Device onboarding using BLE and Wi-Fi with ESP32 hardware.',
      'Flutter and Dart application organized with BLoC and local SQLite storage.'
    ]
  },
  {
    name: 'Intelligent Database Analyzer Chatbot',
    category: 'AI/ML · proof of concept',
    summary: 'A proof of concept for conversational database analysis, built as a React microfrontend with a FastAPI backend and local LLM integration.',
    image: '/project-illustrations/database-analyzer.png',
    imageAlt: 'Concept illustration of a chatbot assistant from the previous portfolio.',
    stack: ['React', 'FastAPI', 'Python', 'Local LLM', 'SQLAlchemy', 'PostgreSQL'],
    sourceNote: 'Concept illustration from the repository. This is a proof of concept; no public demo is linked.',
    details: [
      'Explored natural language interaction with database schemas and data.',
      'React microfrontend paired with a FastAPI service and local LLM integration.',
      'Proof of concept only; no production or customer results are claimed.'
    ]
  },
  {
    name: 'Enterprise Portfolio Management System',
    category: 'Enterprise SaaS · portfolio management',
    summary: 'Enterprise portfolio management work involving forecasting and real-time analytics, presented with a high-level view of the product area.',
    image: '/project-illustrations/enterprise-portfolio.png',
    imageAlt: 'Enterprise portfolio management illustration from the original repository.',
    stack: ['React', 'TypeScript', 'Python microservices', 'Forecasting', 'Enterprise systems'],
    sourceNote: 'Details are limited to the supplied resume and brief. The repository illustration contains sample dashboard figures, not verified project results; no public demo is linked.',
    details: [
      'Enterprise SaaS platform work with real-time analytics and forecasting, as described in the resume.',
      'Resume lists a React and TypeScript frontend with Python microservices.',
      'The resume also references integration with internal Portfolio Management systems for user provisioning and role-based onboarding.',
      'Internal architecture, client details, and unverified outcome metrics are not included.'
    ]
  }
];

export const secondaryProjects = [
  {
    name: 'Internal HR management platform',
    type: 'Full-stack enterprise tool',
    summary: 'A recruiting workflow application with candidate records, authenticated APIs, file handling, and CSV reporting.',
    technologies: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'JWT']
  },
  {
    name: 'Developer knowledge assistant',
    type: 'LLM proof of concept',
    summary: 'An internal prototype exploring LLM-assisted knowledge retrieval in a developer workflow; presented as a proof of concept.',
    technologies: ['FastAPI', 'React', 'Python', 'LLM APIs']
  }
];
