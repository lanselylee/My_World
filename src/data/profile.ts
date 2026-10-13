// Career facts shown in the homepage case files. Source: Xiaomeng_Li_Resume_SDE.pdf.

export type Link = { label: string; href: string };

export type Role = {
  company: string;
  title: string;
  dates: string;
  place: string;
  blurb?: string;
  tracks: { name: string; stack: string; points: string[] }[];
};

export type Project = {
  title: string;
  stack: string;
  status?: string;
  points: string[];
  links: Link[];
};

export const profile = {
  name: 'Xiaomeng Li',
  summary:
    'Software engineer with production experience building AI-powered developer tools and agentic systems on an AI testing platform with 100K+ registered developers. Full-stack across Python, TypeScript, React, and serverless AWS, with experience in LLM applications, LLM evaluation, and applied ML.',
  education: {
    school: 'Northeastern University',
    degree: 'M.S. in Computer Science, Align Program',
    dates: 'Sep 2024 – Dec 2027 (expected)',
    place: 'Seattle, WA',
    gpa: '3.78 / 4.0',
    coursework: 'Algorithms, Data Structures, OOD, Web Development, Machine Learning, Cloud Computing',
  },
  skills: [
    { area: 'Languages', items: 'Python, TypeScript, JavaScript, Java, SQL' },
    { area: 'AI / ML', items: 'LLM integration, multimodal LLMs, MCP, agentic workflows, prompt evaluation, PyTorch, Transformers' },
    { area: 'Backend', items: 'Node.js, REST, GraphQL, AWS (Lambda, DynamoDB, S3, Cognito, Amplify), MySQL, serverless' },
    { area: 'Frontend', items: 'React, Next.js, Tailwind CSS, Material UI' },
    { area: 'Tools', items: 'Docker, GitHub Actions, Git, Jira' },
  ],
};

export const experience: Role[] = [
  {
    company: 'TestSprite, Inc.',
    title: 'Software Engineering Intern',
    dates: 'Jan 2026 – Aug 2026',
    place: 'Seattle, WA',
    blurb: 'AI-native autonomous end-to-end testing platform with 100K+ registered developers.',
    tracks: [
      {
        name: 'Product analytics dashboard',
        stack: 'React · TypeScript · AWS Lambda · LLM',
        points: [
          'Built and owned an internal analytics dashboard end-to-end (AWS Lambda data layer, React frontend, LLM-powered insight generation), replacing manual database queries with real-time tracking of sign-ups, feature adoption, and retention across international markets.',
          "Adopted as the CEO's daily reporting tool and the marketing team's main source for user-behavior analysis; surfaced cancellation patterns and regional sign-up trends that informed KOL selection and campaign timing.",
        ],
      },
      {
        name: 'Project deletion APIs',
        stack: 'DynamoDB · AWS Cognito · automated testing',
        points: [
          'Built production deletion APIs for tests, suites, reports, and run history, with Cognito-based authorization, dry-run previews with affected-resource counts, and soft-delete recovery.',
          'Added automated tests for cascading DynamoDB cleanup across related resources using partition/sort-key relationships.',
        ],
      },
      {
        name: 'Churn analysis agent',
        stack: 'Claude Code · LLM agents',
        points: [
          "Built an agentic workflow that replays each canceled user's pre-cancellation behavior trace, correlates product interactions with cancellation timing, and produces prioritized root-cause hypotheses and engineering TODOs.",
        ],
      },
      {
        name: 'AI testing engine & reporting',
        stack: 'MCP · tool use · prompt evaluation',
        points: [
          'Improved the MCP-exposed testing engine through iterative prompt and tool-use evaluation, refining test generation and failure attribution across Claude Code, Cursor, and VS Code integrations.',
          "Redesigned the report pipeline with richer visualizations and structured failure context; it became the engineering team's default format.",
        ],
      },
    ],
  },
  {
    company: 'Danspace Cultural Media Co., Ltd.',
    title: 'Software Engineering Intern (Full Stack)',
    dates: 'Mar 2024 – Jun 2024',
    place: 'Beijing, China',
    tracks: [
      {
        name: 'Games & analytics',
        stack: 'Java · Python · cloud deployment',
        points: [
          'Developed Java-based WeChat mini-game features and a Python analytics dashboard with cloud deployment; delivered responsive production UI components and contributed to a Universal Studios Beijing partnership prototype.',
        ],
      },
    ],
  },
  {
    company: 'Horror escape rooms',
    title: 'Theme & puzzle designer',
    dates: 'Two years',
    place: 'Beijing, China',
    tracks: [
      {
        name: 'Original horror rooms',
        stack: 'Story · puzzle flow · player experience',
        points: [
          'Created original horror escape-room themes, designed player journeys and puzzle flow, and helped market a venue that reached national hot rankings and became No. 1 in Beijing.',
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'AI Personal Shopping Agent',
    stack: 'Python · browser-use · multimodal LLMs',
    points: [
      'Multi-site shopping agent on a forked browser-use framework that gets through dynamic JS, anti-scraping, and authentication barriers; deep-crawls product pages for size-level and in-store availability, with retry and partial-state recovery for long browser sessions.',
      "Vision-language pipeline that learns a user's style from reference outfit images, routing cheap vision models for retrieval and a stronger model for final ranking to keep per-recommendation cost low.",
    ],
    links: [],
  },
  {
    title: 'AI Video Template Engine',
    stack: 'Python · LLMs · FFmpeg',
    points: [
      'Python/LLM pipeline that analyzes short-form videos for hooks, transitions, text effects, and editing structure, and turns them into reusable JSON templates that separate editing logic from source assets.',
      'FFmpeg-based asset substitution and programmatic reconstruction, so the same editing structure can be applied to new footage.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/lanselylee/ai-video-template-engine' }],
  },
  {
    title: 'Streaming Code-Switching Prediction',
    stack: 'Python · PyTorch · Transformers',
    status: 'CS6140 team project, in progress',
    points: [
      'Causal multitask model that, from only a streaming text prefix, predicts whether the next token switches language and how long the switched segment will last (SwitchLingua dataset).',
      'Benchmarking LLM baselines on Chinese–English and Japanese–English subsets by switch-prediction F1; I own the Claude baseline runs.',
    ],
    links: [],
  },
  {
    title: 'LeetCode Learning System',
    stack: 'Python · automation · GitHub Actions',
    points: [
      'Algorithm notebook with failure logs, spaced-repetition review, and GitHub Actions reminders.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/lanselylee/leetcode-learning-system' }],
  },
  {
    title: 'My World (this site)',
    stack: 'Next.js · TypeScript · CSS',
    points: [
      'Portfolio as an explorable room: a flashlight driven by CSS variables and requestAnimationFrame, SVG eyes that track the light, and accessible case-file dialogs synced to the URL.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/lanselylee/My_World' }],
  },
];
