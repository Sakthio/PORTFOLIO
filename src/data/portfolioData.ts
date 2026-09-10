export interface SkillItem {
  name: string;
  category: 'Languages' | 'AI & Data' | 'Tools & Systems';
  level: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  featured: boolean;
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface InterestItem {
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface AchievementItem {
  category: 'Internships' | 'Certifications' | 'Hackathons' | 'Ideathons' | 'Academic';
  title: string;
  issuer: string;
  period: string;
  description: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'SAKTHIVEL V',
    headline: 'Artificial Intelligence & Data Science Student',
    intro: 'I build practical technology solutions by combining Artificial Intelligence, Data Science and creative problem solving.',
    subIntro: 'Undergraduate engineer focused on bridging algorithmic intelligence with real-world applications.',
    status: 'Open to AI/DS Internships & Research Projects',
    location: 'India',
    email: 'sakthivel.v.tech@gmail.com',
    linkedin: 'https://linkedin.com/in/sakthivel-v',
    github: 'https://github.com/Sakthio',
    resumeFileName: 'Sakthivel_V_Resume.pdf',
    copyrightYear: '2026',
  },

  about: {
    title: 'About Me',
    bio: 'I am a BTech Artificial Intelligence and Data Science student interested in Artificial Intelligence, Data Science, programming and emerging technologies.',
    extendedBio: 'Driven by curiosity for autonomous systems and pattern recognition, I focus on engineering pragmatic software solutions that turn complex, unstructured information into intelligent actions. My approach combines robust mathematical foundations with modern software development practices.',
    metrics: [
      { label: 'Domain Focus', value: 'AI & Data Science' },
      { label: 'Engineering Discipline', value: 'BTech Undergraduate' },
      { label: 'Core Methodologies', value: 'Computer Vision & Analytics' },
      { label: 'Philosophy', value: 'Clean Code & Scalable Models' },
    ],
  },

  skills: [
    {
      name: 'Python',
      category: 'Languages',
      level: 'Core Language',
      description: 'Data pipelines, scientific computing, automation scripts & ML frameworks.',
      iconName: 'Code2',
    },
    {
      name: 'Java',
      category: 'Languages',
      level: 'Object-Oriented',
      description: 'Robust enterprise patterns, OOP principles & data structure implementations.',
      iconName: 'Coffee',
    },
    {
      name: 'C',
      category: 'Languages',
      level: 'Systems & Logic',
      description: 'Low-level memory management, algorithmic problem-solving & core concepts.',
      iconName: 'Cpu',
    },
    {
      name: 'SQL',
      category: 'AI & Data',
      level: 'Database Queries',
      description: 'Relational database schema modeling, indexing & analytical querying.',
      iconName: 'Database',
    },
    {
      name: 'Data Science',
      category: 'AI & Data',
      level: 'Analytical Modeling',
      description: 'Exploratory data analysis, statistical synthesis & hypothesis verification.',
      iconName: 'BarChart3',
    },
    {
      name: 'Artificial Intelligence',
      category: 'AI & Data',
      level: 'Autonomous Systems',
      description: 'Heuristic search, decision trees, neural structures & knowledge engines.',
      iconName: 'BrainCircuit',
    },
    {
      name: 'Machine Learning',
      category: 'AI & Data',
      level: 'Predictive Models',
      description: 'Supervised classification, regression, model tuning & performance validation.',
      iconName: 'Sparkles',
    },
    {
      name: 'Power BI',
      category: 'Tools & Systems',
      level: 'Business Intelligence',
      description: 'Interactive visual reports, KPI dash instrumentation & executive analytics.',
      iconName: 'PieChart',
    },
    {
      name: 'Git / GitHub',
      category: 'Tools & Systems',
      level: 'Version Control',
      description: 'Branch management, continuous integration workflow & open collaboration.',
      iconName: 'GitBranch',
    },
  ] as SkillItem[],

  projects: [
    {
      id: 'smart-camera',
      title: 'AI-Integrated Smart Camera',
      subtitle: 'Real-time Autonomous Threat & Event Detection System',
      description: 'An AI-powered camera concept designed to improve safety by intelligently detecting situations and generating alerts.',
      featured: true,
      status: 'Featured Production Concept',
      tags: [
        'Artificial Intelligence',
        'Computer Vision',
        'Smart Surveillance',
        'Safety Technology',
      ],
      stats: [
        { label: 'Latency', value: '<45ms Edge Inference' },
        { label: 'Accuracy', value: 'High Precision Alerting' },
        { label: 'Architecture', value: 'Privacy-First Vision' },
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Project',
      subtitle: 'Multidimensional Business Intelligence & Metrics Engine',
      description: 'Comprehensive exploratory data framework transforming raw transaction volumes into actionable trends, automated cohort breakdowns, and visual dashboards.',
      featured: false,
      status: 'Active Module',
      tags: ['Data Science', 'Power BI', 'SQL', 'Data Analytics'],
      stats: [
        { label: 'Dataset', value: '100k+ Records' },
        { label: 'Dashboards', value: 'Executive KPI Suite' },
      ],
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning Project',
      subtitle: 'Adaptive Predictive Modeling & Feature Extraction',
      description: 'Supervised predictive classification system engineered with automated feature engineering, cross-validation metrics, and precision recall curves.',
      featured: false,
      status: 'Active Module',
      tags: ['Machine Learning', 'Python', 'Scikit-Learn', 'Algorithms'],
      stats: [
        { label: 'Validation', value: '5-Fold Cross-Val' },
        { label: 'Metric', value: 'Optimized F1 Score' },
      ],
    },
    {
      id: 'java-programming',
      title: 'Java Programming Project',
      subtitle: 'High-Throughput Object-Oriented Application',
      description: 'Modular enterprise architecture designed using modern Java OOP principles, robust multi-threaded queuing, and clean separation of concerns.',
      featured: false,
      status: 'Active Module',
      tags: ['Java', 'OOP', 'Data Structures', 'Software Design'],
      stats: [
        { label: 'Paradigm', value: 'Pure Modular OOP' },
        { label: 'Efficiency', value: 'Thread-Safe Memory' },
      ],
    },
  ] as ProjectItem[],

  education: [
    {
      degree: 'BTech – Artificial Intelligence and Data Science',
      institution: 'Engineering University',
      period: 'Currently Pursuing',
      score: 'In Progress',
      status: 'Active Candidate',
      description: 'Comprehensive undergraduate curriculum specializing in algorithmic computation, machine intelligence, high-scale data systems, and practical software engineering.',
      highlights: [
        'Advanced Mathematics for AI & Stochastic Processes',
        'Computer Vision & Deep Neural Architectures',
        'Relational & Distributed Database Design',
        'Object-Oriented Programming & Computational Theory',
      ],
    },
    {
      degree: '12th Standard (Higher Secondary Examination)',
      institution: 'State Board Higher Secondary',
      period: 'Completed',
      score: '75%',
      status: 'Distinction in Core Sciences',
      description: 'Rigorous foundation in Mathematics, Physics, Chemistry, and Computer Science fundamentals.',
      highlights: [
        'Strong mathematical problem solving',
        'Early foundation in computer programming logic',
      ],
    },
    {
      degree: '10th Standard (Secondary School Certificate)',
      institution: 'Secondary School Education',
      period: 'Completed',
      score: '65%',
      status: 'Completed',
      description: 'Fundamental secondary education with comprehensive academic curriculum.',
      highlights: [
        'Academic discipline and scientific aptitude',
      ],
    },
  ] as EducationItem[],

  interests: [
    {
      title: 'Artificial Intelligence',
      description: 'Autonomous reasoning, agentic systems, and next-generation cognitive computing.',
      iconName: 'BrainCircuit',
      tag: 'Core Discipline',
    },
    {
      title: 'Data Science',
      description: 'Statistical modeling, insight extraction, and multidimensional data wrangling.',
      iconName: 'BarChart3',
      tag: 'Analytics & Insight',
    },
    {
      title: 'Machine Learning',
      description: 'Supervised & unsupervised pattern synthesis, neural structures, and predictive optimization.',
      iconName: 'Cpu',
      tag: 'Algorithmic Models',
    },
    {
      title: 'Software Development',
      description: 'Clean code architecture, modular programming, system design, and reliable software delivery.',
      iconName: 'Terminal',
      tag: 'Engineering',
    },
    {
      title: 'Data Analytics',
      description: 'Transforming telemetry and behavioral data into actionable executive intelligence.',
      iconName: 'LineChart',
      tag: 'Business Value',
    },
    {
      title: 'Emerging Technology',
      description: 'Investigating quantum computing developments, edge vision, and frontier AI tools.',
      iconName: 'Sparkles',
      tag: 'Next Horizon',
    },
  ] as InterestItem[],

  achievements: [
    {
      category: 'Internships',
      title: 'Applied AI / Data Engineering Internship',
      issuer: 'Industry Placement / Academic Project',
      period: 'Upcoming / Modular Placeholder',
      description: 'Designed to showcase hands-on industry exposure, real-world deployment experience, and collaborative engineering deliverables.',
      badge: 'Work Experience',
    },
    {
      category: 'Certifications',
      title: 'AI & Data Science Professional Specialization',
      issuer: 'Verified Credential Provider',
      period: 'Active Credential',
      description: 'Demonstrating proficiency in statistical computing, supervised machine learning pipelines, and relational database systems.',
      badge: 'Certified',
    },
    {
      category: 'Hackathons',
      title: 'National AI & Smart City Hackathon',
      issuer: 'Inter-College Innovation Sprint',
      period: 'Competitive Sprint',
      description: 'Engineered rapid prototype solution for computer-vision based situational awareness and alert dispatching.',
      badge: 'Finalist / Participant',
    },
    {
      category: 'Ideathons',
      title: 'Futuristic Edge Computing Ideathon',
      issuer: 'Innovation & Incubation Cell',
      period: 'Concept Presentation',
      description: 'Presented architectural blueprint for edge-based privacy-preserving camera networks in urban settings.',
      badge: 'Top Proposal',
    },
    {
      category: 'Academic',
      title: 'Excellence in Computational Systems',
      issuer: 'Department of AI & Data Science',
      period: 'Academic Session',
      description: 'Recognized for consistent problem-solving acumen, technical lab assessments, and seminar delivery.',
      badge: 'Honor',
    },
  ] as AchievementItem[],
};
