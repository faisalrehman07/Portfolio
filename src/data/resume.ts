export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'AI & Deep Learning' | 'IoT / Hardware' | 'Internship Case Study';
  type: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  outcomes: string[];
  role: string;
  affiliation?: string;
  iconName: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  category: 'Internship' | 'Workshop' | 'Expo' | 'Training';
  summary: string;
  highlights: string[];
  skillsGained: string[];
  badge: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  dateOrYear?: string;
  category: 'Cybersecurity' | 'AI & Prompt Engineering' | 'Professional & Office' | 'Expos & Competitions' | 'Full Stack';
  description: string;
  skillsCovered: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    description: string;
    tags: string[];
  }[];
}

export interface ToolItem {
  name: string;
  category: 'Development' | 'Data & BI' | 'Collaboration & Agile' | 'Diagramming & Planning' | 'AI Tools & Prototyping';
  purpose: string;
  icon: string;
}

export interface ResumeData {
  personal: {
    name: string;
    role: string;
    positioning: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
    availability: string;
    aboutNarrative: string;
    quickHighlights: { label: string; value: string }[];
  };
  education: {
    degree: string;
    institution: string;
    university: string;
    year: string;
    cgpa: string;
    location: string;
    coreCourses: string[];
  };
  industryExpertise: { title: string; desc: string }[];
  areasOfExpertise: string[];
  skillClusters: SkillCategory[];
  tools: ToolItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  languages: { name: string; note: string }[];
  beyondCode: { title: string; category: string; description: string; icon: string }[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "FAISAL REHMAN",
    role: "AI & Data Science Graduate | AI Tools Enthusiast",
    positioning: "AI Tools Power User & Software Engineer",
    tagline: "Engineering software and intelligent pipelines by leveraging Google Antigravity, Google AI Studio, Advanced Prompt Engineering, and Modern Full-Stack Architectures.",
    location: "Bangalore, India",
    email: "fr848808@gmail.com",
    phone: "+91 9620532473",
    linkedin: "https://www.linkedin.com/in/faisal-rehman-377731237",
    github: "https://github.com/faisalrehman07/",
    resumeUrl: "/FAISAL_REHMAN.pdf",
    availability: "Actively seeking Full-Time Engineering Roles in AI, Software & Data",
    aboutNarrative: `I am an IT graduate with a strong academic foundation in Artificial Intelligence and Data Science, coupled with a deep passion for modern AI developer tools. I actively utilize state-of-the-art AI platforms—including Google Antigravity, Google AI Studio, sophisticated prompt engineering methodologies, and LLM APIs—as an engineering force multiplier to rapidly architect, develop, and refine robust software projects.

My core competencies span Python, Java, SQL, and .NET, alongside practical exposure to machine learning pipelines, vulnerability assessment (VAPT), and database systems. By pairing rigorous computer science fundamentals with advanced AI toolchain proficiency, I deliver reliable, clean, and forward-looking digital solutions.`,
    quickHighlights: [
      { label: "Degree", value: "B.E. AI & Data Science" },
      { label: "Graduation", value: "Class of 2025" },
      { label: "CGPA", value: "7.9 / 10" },
      { label: "University", value: "VTU / Navkis College" },
      { label: "AI Tooling", value: "Antigravity, AI Studio & Prompting" },
      { label: "Focus", value: "AI, ML, Full Stack & VAPT" }
    ]
  },

  education: {
    degree: "B.E. in Artificial Intelligence and Data Science",
    institution: "Navkis College of Engineering",
    university: "Visvesvaraya Technological University (VTU)",
    year: "2025",
    cgpa: "7.9",
    location: "Hassan / Bangalore, Karnataka",
    coreCourses: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (Java & Python)",
      "Deep Learning & Neural Networks",
      "Data Visualization & Analytics",
      "Operating Systems & Computer Networks",
      "Software Engineering & Project Management"
    ]
  },

  industryExpertise: [
    { title: "AI Tools & Rapid Prototyping", desc: "Supercharging software engineering velocity with Google Antigravity, Google AI Studio, and sophisticated prompt architectures." },
    { title: "Information Technology", desc: "Solid computing foundation, system architecture, enterprise IT processes, and software lifecycle." },
    { title: "Artificial Intelligence", desc: "Supervised and unsupervised learning, model evaluation, optimization, and prompt engineering." },
    { title: "Full Stack Development", desc: "End-to-end web applications, frontend UI/UX, backend API integration, and database operations." },
    { title: "Database Management", desc: "Relational database schema design, indexing, SQL queries, MySQL optimization, and data modeling." },
    { title: "Internet of Things (IoT)", desc: "Embedded sensor integration, automated telemetry, manual rover teleoperation, and real-time control." },
    { title: "Cybersecurity & VAPT", desc: "Vulnerability assessment, web application penetration testing, network defense, and secure coding." },
    { title: "Prompt Engineering", desc: "Structured prompt design, system instructions, few-shot conditioning, and LLM tool orchestration." }
  ],

  areasOfExpertise: [
    "AI Tools & Prompt Engineer",
    "Full Stack Developer",
    "Error Debugger",
    "Project Management",
    "UI/UX Designer",
    "Team Management"
  ],

  skillClusters: [
    {
      id: "ai-tools-prompting",
      name: "AI Tools & Prompt Engineering",
      icon: "Cpu",
      description: "Harnessing Google Antigravity, Google AI Studio, and advanced prompting techniques to architect and accelerate software delivery.",
      skills: [
        { name: "Google Antigravity & Agentic Workflows", description: "Agentic AI development, multi-tool orchestration, autonomous task execution, and accelerated shipping.", tags: ["Google Antigravity", "AI Agents"] },
        { name: "Google AI Studio & Gemini Ecosystem", description: "Prototyping with Gemini models, temperature/safety calibration, multimodal vision-text inputs, and structured JSON generation.", tags: ["Google AI Studio", "Gemini"] },
        { name: "Advanced Prompt Engineering", description: "Few-shot prompting, system instruction design, chain-of-thought logic decomposition, and deterministic LLM outputs.", tags: ["Prompting", "LLMs"] },
        { name: "AI-Accelerated Development", description: "Using modern LLM toolchains to rapidly ideate, build full-stack interfaces, write clean tests, and debug complex codebases.", tags: ["Productivity", "Fast Shipping"] }
      ]
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      icon: "Brain",
      description: "Supervised & unsupervised learning, model optimization, feature selection, and neural architectures.",
      skills: [
        { name: "Machine Learning Algorithms", description: "Supervised & unsupervised methods, classification, regression, and clustering.", tags: ["Core AI", "Algorithms"] },
        { name: "Feature Selection & Optimization", description: "Dimensionality reduction, feature engineering, loss minimization, and hyperparameter tuning.", tags: ["Pipelines", "Optimization"] },
        { name: "Model Evaluation", description: "Validation metrics, confusion matrices, ROC-AUC curves, precision-recall, and error analysis.", tags: ["Evaluation", "Metrics"] },
        { name: "TensorFlow & Keras", description: "Deep learning models, neural networks, and model training pipelines.", tags: ["Deep Learning", "Frameworks"] },
        { name: "Scikit-Learn", description: "Production ML pipelines, preprocessing, estimators, and cross-validation.", tags: ["Data Science", "ML"] },
        { name: "Pandas & Data Wrangling", description: "Complex dataset manipulation, cleaning, aggregation, and feature transformation.", tags: ["Data", "Analysis"] }
      ]
    },
    {
      id: "dev-programming",
      name: "Programming & Full Stack",
      icon: "Code2",
      description: "Core programming languages, backend frameworks, relational databases, and modern web interfaces.",
      skills: [
        { name: "Python", description: "AI/ML scripting, data analysis pipelines, automation, and backend logic.", tags: ["Language", "Primary"] },
        { name: "Java", description: "Object-oriented programming, data structures, enterprise application patterns, and debugging.", tags: ["Language", "OOP"] },
        { name: "SQL", description: "Complex relational queries, table joins, indexing, triggers, and schema migrations.", tags: ["Database", "Querying"] },
        { name: ".NET Framework", description: "Applied during CifTech Solutions internship for hospital system software architecture.", tags: ["Backend", "Enterprise"] },
        { name: "MySQL DB", description: "Relational database configuration, normalization, data integrity, and CRUD management.", tags: ["Database", "Storage"] },
        { name: "Web Development", description: "Semantic markup, client-side interactivity, responsive layouts, and REST API integration.", tags: ["Frontend", "Full-Stack"] }
      ]
    },
    {
      id: "data-viz",
      name: "Data Visualization & Insights",
      icon: "BarChart3",
      description: "Translating complex raw datasets into actionable executive visual dashboards and reports.",
      skills: [
        { name: "Tableau", description: "Interactive dashboards, exploratory data analysis, visual storytelling, and trend discovery.", tags: ["BI", "Visuals"] },
        { name: "Power BI", description: "Business analytics reporting, metric visualization, and dataset modeling.", tags: ["BI", "Analytics"] },
        { name: "Matplotlib & Seaborn", description: "Statistical distribution graphs, heatmaps, scatter correlations, and visual exploratory analysis.", tags: ["Python", "Plots"] },
        { name: "Data Derivation & Insights", description: "Extracting meaningful business patterns, identifying anomalies, and executive synthesis.", tags: ["Analytics", "Strategy"] }
      ]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity & VAPT",
      icon: "ShieldCheck",
      description: "Hands-on experience in vulnerability assessment, web penetration testing, and defensive practices.",
      skills: [
        { name: "Web Application VAPT", description: "Practical hands-on training at NICC in identifying and mitigating web application vulnerabilities.", tags: ["Security", "VAPT"] },
        { name: "Network Security & Scanning", description: "Network topology awareness, port scanning concepts, and vulnerability analysis tools.", tags: ["Networking", "Scanning"] },
        { name: "Threat Analysis & Defensive Mechanisms", description: "Phishing attack vectors, malware detection awareness, and defense-in-depth principles.", tags: ["Defense", "Threats"] },
        { name: "Safe Digital Practices & Ethics", description: "Ethical hacking compliance, data privacy principles, and responsible security reporting.", tags: ["Ethics", "Compliance"] }
      ]
    },
    {
      id: "engineering-tools",
      name: "Tools & Engineering Practices",
      icon: "Layers",
      description: "Agile project workflows, visual architecture mapping, error debugging, and productivity platforms.",
      skills: [
        { name: "Error Debugging", description: "Systematic root-cause analysis, stack trace inspection, and bug isolation across tech stacks.", tags: ["Debugging", "QA"] },
        { name: "Project & Team Management", description: "Agile execution, task delegation, timeline tracking, and collaborative code reviews.", tags: ["Agile", "Management"] },
        { name: "UI/UX Design", description: "User journey mapping, wireframing, component hierarchy, and responsive interface design.", tags: ["Design", "UX"] },
        { name: "Internet of Things (IoT)", description: "Hardware-software interfacing, telemetry collection, and robotic rover control systems.", tags: ["IoT", "Embedded"] }
      ]
    }
  ],

  tools: [
    { name: "Google Antigravity", category: "AI Tools & Prototyping", purpose: "Agentic AI development environment, multi-agent orchestration, and accelerated full-stack building.", icon: "Cpu" },
    { name: "Google AI Studio", category: "AI Tools & Prototyping", purpose: "Prototyping Gemini models, multimodal prompt tuning, system instructions, and API key orchestration.", icon: "Workflow" },
    { name: "Prompt Engineering", category: "AI Tools & Prototyping", purpose: "Structured system prompting, few-shot conditioning, JSON schema generation, and tool chaining.", icon: "Terminal" },
    { name: "ChatGPT & Claude", category: "AI Tools & Prototyping", purpose: "AI-assisted system architecture, rapid code review, bug isolation, and workflow automation.", icon: "FileText" },
    { name: "Jupyter", category: "Development", purpose: "Interactive Python execution, exploratory data analysis, and ML model experimentation.", icon: "Terminal" },
    { name: "Tableau", category: "Data & BI", purpose: "Building visual analytics dashboards and communicating complex data trends.", icon: "PieChart" },
    { name: "Power BI", category: "Data & BI", purpose: "Business intelligence modeling, reporting dashboards, and dataset visualization.", icon: "BarChart" },
    { name: "Lucid Charts", category: "Diagramming & Planning", purpose: "System architecture diagrams, database ER schemas, and process flowcharts.", icon: "Workflow" },
    { name: "Jira", category: "Collaboration & Agile", purpose: "Agile issue tracking, sprint planning, and task backlog management.", icon: "CheckSquare" },
    { name: "Salesforce", category: "Collaboration & Agile", purpose: "Enterprise CRM ecosystem awareness and structured data workflows.", icon: "Cloud" },
    { name: "Confluence", category: "Collaboration & Agile", purpose: "Technical documentation, architecture notes, and team knowledge sharing.", icon: "FileText" },
    { name: "MS Project", category: "Diagramming & Planning", purpose: "Project scheduling, milestone tracking, and resource allocation planning.", icon: "Calendar" }
  ],

  projects: [
    {
      id: "hospital-management-system",
      title: "Health Care and Hospital Management System",
      category: "Internship Case Study",
      type: "Full Stack Internship Project",
      shortDescription: "A comprehensive hospital management platform engineered during the CifTech Solutions internship to optimize structural efficiency and operational workflows.",
      fullDescription: `Developed during an intensive academic internship at CifTech Solutions Pvt. Ltd., Bangalore, titled "A Study of Hospital Management System". The project was engineered to improve administrative and operational efficiency across healthcare workflows.

The system incorporates structured database architecture with MySQL DB and robust application development via the .NET framework, delivering reliable record handling, patient data management, and operational clarity.`,
      technologies: [".NET Framework", "MySQL DB", "Full Stack Architecture", "Database Management", "System Planning"],
      features: [
        "Patient registration and medical record database management",
        "Operational workflow tracking for improved hospital structural efficiency",
        "Secure relational database schema built on MySQL",
        "Application backend and business logic implemented using .NET",
        "Comprehensive project lifecycle from planning to execution and delivery"
      ],
      outcomes: [
        "Delivered full-stack software solution during professional IT internship",
        "Received positive feedback for potential long-term structural improvements",
        "Successfully applied academic software principles to a real-world IT challenge"
      ],
      role: "Full Stack Development Intern",
      affiliation: "CifTech Solutions Pvt. Ltd., Bangalore",
      iconName: "Hospital",
      featured: true
    },
    {
      id: "heart-rate-stress-rppg",
      title: "Heart Rate Monitoring and Stress Level Prediction using rPPG",
      category: "AI & Deep Learning",
      type: "Academic Major Project",
      shortDescription: "Contactless physiological signal extraction using remote Photoplethysmography (rPPG) and machine learning for real-time stress assessment.",
      fullDescription: `A pioneering academic major project exploring contactless biomedical monitoring. The system uses remote Photoplethysmography (rPPG) to detect subtle facial blood volume variations from video feeds, analyzing pulse rates to predict real-time stress levels.

Combines computer vision preprocessing with machine learning predictive modeling for non-invasive health analytics.`,
      technologies: ["Python", "Computer Vision", "rPPG Signal Processing", "Machine Learning", "Data Analysis"],
      features: [
        "Contactless optical pulse extraction from facial video streams",
        "Noise filtering and signal processing for raw color variation data",
        "Machine learning model evaluation for classifying stress states",
        "Real-time visual monitoring dashboard for physiological metrics"
      ],
      outcomes: [
        "Demonstrated proficiency in computer vision and biomedical signal analysis",
        "Completed rigorous academic major project evaluation with practical demonstrations"
      ],
      role: "Lead Student Researcher / Developer",
      affiliation: "Navkis College of Engineering / VTU",
      iconName: "HeartPulse",
      featured: true
    },
    {
      id: "loan-eligibility-prediction",
      title: "Loan Eligibility Prediction using Deep Learning Methods",
      category: "AI & Deep Learning",
      type: "Academic Mini Project",
      shortDescription: "Predictive financial risk modeling utilizing multi-layer deep learning algorithms to assess applicant creditworthiness and loan approval viability.",
      fullDescription: `Developed as an academic mini project to evaluate financial datasets and automate credit scoring. The project utilizes deep learning classification models to analyze applicant financial profiles, income brackets, credit history, and asset allocations to predict loan eligibility with high fidelity.`,
      technologies: ["Python", "Deep Learning", "TensorFlow / Keras", "Scikit-Learn", "Pandas", "Feature Selection"],
      features: [
        "Automated applicant data cleaning and missing-value imputation",
        "Feature selection and correlation analysis to identify key risk drivers",
        "Multi-layer neural network model training and hyperparameter tuning",
        "Evaluation via confusion matrix, precision, recall, and ROC-AUC metrics"
      ],
      outcomes: [
        "Built end-to-end data pipeline from raw dataset to evaluated model",
        "Achieved reliable classification benchmark during project defense"
      ],
      role: "Developer / Analyst",
      affiliation: "Navkis College of Engineering / VTU",
      iconName: "BadgePercent"
    },
    {
      id: "self-manual-driven-rover",
      title: "Self and Manual Driven Rover",
      category: "IoT / Hardware",
      type: "IoT & Embedded Project",
      shortDescription: "An intelligent dual-mode rover combining autonomous obstacle navigation algorithms with manual remote teleoperation controls.",
      fullDescription: `An Internet of Things (IoT) hardware-software project engineering a mobile robotic rover capable of dual-mode operation: fully autonomous self-driving mode with sensor-driven obstacle avoidance, and a manual teleoperation mode controlled over a wireless interface.`,
      technologies: ["IoT Architecture", "Embedded Sensors", "Autonomous Navigation", "Hardware Interfacing", "Motor Control"],
      features: [
        "Dual-mode switching between autonomous guidance and manual teleoperation",
        "Ultrasonic and proximity sensor integration for real-time obstacle avoidance",
        "Low-latency wireless command processing",
        "Resilient chassis and power-distribution design"
      ],
      outcomes: [
        "Demonstrated practical IoT embedded system integration",
        "Exhibited in academic project exhibitions"
      ],
      role: "IoT Systems Engineer",
      affiliation: "Navkis College of Engineering",
      iconName: "Bot"
    },
    {
      id: "car-parking-management",
      title: "Car Parking Management System",
      category: "Full Stack",
      type: "Full Stack Software Project",
      shortDescription: "A centralized software platform for real-time vehicular slot allocation, ticket billing, occupancy tracking, and parking lot logistics.",
      fullDescription: `A full-stack software application built to modernize parking facility operations. Provides slot availability monitoring, automated entry/exit timestamping, ticket billing calculation, and database tracking for high-traffic parking lots.`,
      technologies: ["Full Stack Web", "SQL Database", "Backend Logic", "UI/UX Design", "CRUD Operations"],
      features: [
        "Real-time parking slot availability mapping and status indicators",
        "Entry and exit ticketing with automated fee calculations",
        "Relational database storage for historical vehicle records and transactions",
        "Responsive operator dashboard with quick search and filtering"
      ],
      outcomes: [
        "Streamlined vehicular flow and reduced manual parking bookkeeping",
        "Implemented secure database transactions and data consistency"
      ],
      role: "Full Stack Developer",
      affiliation: "Academic Project",
      iconName: "Car"
    },
    {
      id: "finance-tracking-wallet",
      title: "Finance Tracking Wallet",
      category: "Full Stack",
      type: "Full Stack Financial App",
      shortDescription: "A personal expense tracking and budgeting platform enabling users to log transactions, categorize expenditures, and visualize cash flows.",
      fullDescription: `A full-stack web application designed for personal financial management. The system allows users to log income and expenses, assign custom budget categories, track spending trends over time, and visualize savings progress through intuitive visual dashboards.`,
      technologies: ["Full Stack Development", "Database Management", "Data Visualization", "JavaScript / Python", "UI/UX"],
      features: [
        "Categorized expense and income logging with date filters",
        "Monthly budget allocation and overspending alert indicators",
        "Interactive visual breakdown of spending habits across categories",
        "Secure storage and exportable financial summaries"
      ],
      outcomes: [
        "Delivered a clean, user-friendly personal finance tracking utility",
        "Applied data visualization principles to personal financial insights"
      ],
      role: "Full Stack Developer",
      affiliation: "Independent Engineering Project",
      iconName: "Wallet"
    }
  ],

  experience: [
    {
      id: "ciftech-internship",
      title: "Full Stack Development Internship",
      organization: "CifTech Solutions Pvt. Ltd.",
      location: "Bangalore, India",
      period: "Late 2024 (Sept – Dec 2024 / Nov – Jan 2025)",
      category: "Internship",
      badge: "Industry Internship",
      summary: "Completed a comprehensive full-stack development internship focusing on hospital enterprise systems, relational database architecture, and project delivery.",
      highlights: [
        "Developed full-stack project 'A Study of Hospital Management System', demonstrating end-to-end software development proficiency.",
        "Utilized .NET framework and MySQL DB for building core application modules and database schemas.",
        "Contributed to architectural improvements aimed at structural efficiency within healthcare operations.",
        "Gained direct practical experience in project planning, execution, milestone delivery, and collaborative debugging in a professional IT environment.",
        "Received positive feedback on the system's potential helpfulness for organizational workflow improvements."
      ],
      skillsGained: [".NET", "MySQL DB", "Full Stack Development", "Database Management", "Project Planning", "IT Delivery"]
    },
    {
      id: "nicc-internship",
      title: "Cyber Security & VAPT Internship",
      organization: "National Information & Cybersecurity Council (NICC)",
      location: "National Cybersecurity Centre of Excellence (NCCCE)",
      period: "Late 2023 (Oct – Nov 2023)",
      category: "Internship",
      badge: "Security Internship",
      summary: "Completed an intensive specialized internship in Vulnerability Assessment and Penetration Testing (VAPT) for web applications.",
      highlights: [
        "Gained hands-on experience conducting VAPT on web applications following standard security assessment methodologies.",
        "Conducted practical training in networking fundamentals, web application vulnerability scanning, and penetration testing workflows.",
        "Collaborated with cybersecurity professionals at the National Cybersecurity Centre of Excellence (NCCCE).",
        "Demonstrated strong diligence, work ethic, and analytical rigor in identifying and documenting common vulnerabilities.",
        "Applied theoretical cybersecurity knowledge to real-world defensive security scenarios."
      ],
      skillsGained: ["VAPT", "Web Application Security", "Networking", "Vulnerability Scanning", "Penetration Testing", "Threat Mitigation"]
    },
    {
      id: "ieee-expo-2025",
      title: "IEEE Project Expo – 2025 Participant",
      organization: "IEEE CEDA Bangalore Chapter & Dept of ECE",
      location: "Navkis College of Engineering, Hassan",
      period: "29 April 2025",
      category: "Expo",
      badge: "Technical Expo",
      summary: "Participated and showcased technical engineering project at the IEEE-affiliated state-level exhibition.",
      highlights: [
        "Presented engineering project at the IEEE Project Expo 2025 organized by IEEE CEDA Bangalore Chapter.",
        "Engaged with technical exhibition conducted in association with IEEE Bangalore Section and Mysore Subsection.",
        "Articulated system architecture and outcomes to expert evaluators and engineering peers.",
        "Awarded Certificate of Participation for showcasing innovation in an IEEE-affiliated forum."
      ],
      skillsGained: ["Technical Presentation", "IEEE Engagement", "System Defense", "Engineering Communication"]
    },
    {
      id: "mini-project-expo-2024",
      title: "Mini Project Expo – 2024 Participant",
      organization: "Department of IT, Navkis College of Engineering",
      location: "Hassan, Karnataka",
      period: "1 August 2024",
      category: "Expo",
      badge: "Academic Expo",
      summary: "Showcased innovative technical project and collaborated across diverse engineering student teams.",
      highlights: [
        "Presented an innovative technical project to academic faculty and industry evaluators.",
        "Explained project design principles, database architecture, and target outcomes during live demonstrations.",
        "Engaged in peer-to-peer technical exchange and constructive feedback sessions."
      ],
      skillsGained: ["Project Presentation", "Peer Collaboration", "Demonstration", "Technical Articulation"]
    },
    {
      id: "nicc-workshop",
      title: "Ethical Hacking & Cyber Security Workshop",
      organization: "National Information and Cybersecurity Council (NICC)",
      location: "NICC Training Campus",
      period: "21 August – 23 August 2023",
      category: "Workshop",
      badge: "3-Day Workshop",
      summary: "3-day hands-on intensive workshop exploring defensive cybersecurity mechanisms, penetration testing, and safe cyberspace practices.",
      highlights: [
        "Participated in hands-on lab sessions on cyber threats, vulnerability identification, and mitigation.",
        "Learned fundamental techniques of penetration testing and network security protocols.",
        "Explored critical vectors including phishing attack vectors, malware detection, and digital data protection.",
        "Enhanced awareness of safe digital practices and ethical responsibilities in cybersecurity."
      ],
      skillsGained: ["Ethical Hacking", "Malware Awareness", "Phishing Defense", "Network Fundamentals", "Data Protection"]
    },
    {
      id: "ten-seconds-training",
      title: "Soft Skills & Microsoft Office Training",
      organization: "10 Seconds",
      location: "Corporate Training Program",
      period: "July 2022 – August 2022",
      category: "Training",
      badge: "Professional Training",
      summary: "Structured corporate training focused on organizational productivity, formal workplace communication, and professional document design.",
      highlights: [
        "Enhanced time management and organizational methodologies through structured workplace simulations.",
        "Mastered formal communication, email etiquette, and document structuring in Microsoft Word.",
        "Acquired foundational data entry, formula modeling, and tabular analysis skills in Microsoft Excel.",
        "Designed professional executive slide decks adhering to formatting best practices in Microsoft PowerPoint.",
        "Participated in public speaking and group discussions to hone team collaboration and corporate adaptability."
      ],
      skillsGained: ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Time Management", "Formal Communication", "Public Speaking"]
    }
  ],

  certifications: [
    {
      id: "cert-nicc",
      title: "Cyber Security Internship & Training",
      issuer: "National Information and Cyber Security Council (NICC)",
      dateOrYear: "2023",
      category: "Cybersecurity",
      description: "Comprehensive training and internship in Web Application VAPT, vulnerability scanning, and cybersecurity defenses.",
      skillsCovered: ["VAPT", "Web App Security", "Vulnerability Analysis", "Networking"]
    },
    {
      id: "cert-10seconds",
      title: "Soft Skills & Microsoft Office Training",
      issuer: "10 Seconds",
      dateOrYear: "2022",
      category: "Professional & Office",
      description: "Structured corporate readiness training covering MS Excel, Word, PowerPoint, formal communication, and public speaking.",
      skillsCovered: ["MS Excel", "MS Word", "MS PowerPoint", "Workplace Communication"]
    },
    {
      id: "cert-ieee-2025",
      title: "IEEE Project Expo – 2025 Participant",
      issuer: "IEEE CEDA Bangalore Chapter & Dept of ECE",
      dateOrYear: "2025",
      category: "Expos & Competitions",
      description: "Official Certificate of Participation for presenting engineering innovation at the state-level IEEE Project Expo.",
      skillsCovered: ["Technical Presentation", "Engineering Defense", "IEEE Exhibition"]
    },
    {
      id: "cert-mini-expo-2024",
      title: "Mini Project Expo – 2024 Participant",
      issuer: "Department of IT, Navkis College of Engineering",
      dateOrYear: "2024",
      category: "Expos & Competitions",
      description: "Certificate of Participation for presenting innovative technical project to academic evaluators.",
      skillsCovered: ["Project Presentation", "Peer Learning", "Technical Articulation"]
    },
    {
      id: "cert-ciftech",
      title: "CifTech Solutions Internship",
      issuer: "CifTech Solutions Pvt. Ltd.",
      dateOrYear: "2024",
      category: "Full Stack",
      description: "Certificate of Completion for full-stack software development internship on Hospital Management System architecture.",
      skillsCovered: [".NET", "MySQL DB", "Full Stack Development", "Project Delivery"]
    },
    {
      id: "cert-chatgpt-guvi",
      title: "Certified in Program of Chat-GPT for Everyone",
      issuer: "GUVI",
      category: "AI & Prompt Engineering",
      description: "Certified program covering generative AI concepts, prompt design, and practical AI tooling workflows.",
      skillsCovered: ["ChatGPT", "Generative AI", "Prompt Engineering", "AI Productivity"]
    },
    {
      id: "cert-ai-be10x",
      title: "Certified in AI Tools and ChatGPT Workshop",
      issuer: "be10X",
      category: "AI & Prompt Engineering",
      description: "Hands-on workshop certification on leveraging modern AI tools for productivity, automation, and workflow acceleration.",
      skillsCovered: ["AI Tools", "Workflow Automation", "Prompting Techniques", "Productivity"]
    },
    {
      id: "cert-atingi",
      title: "Certified in Computing Skills for Business",
      issuer: "Atingi",
      category: "Professional & Office",
      description: "Digital business computing certification focusing on essential IT competencies, digital ethics, and workplace technology.",
      skillsCovered: ["Business Computing", "Digital Literacy", "IT Productivity", "Data Management"]
    }
  ],

  languages: [
    { name: "English", note: "Fluent professional working proficiency" },
    { name: "Hindi", note: "Fluent spoken and written proficiency" },
    { name: "Kannada", note: "Native regional proficiency" }
  ],

  beyondCode: [
    {
      title: "Outer Space & Astronomy Enthusiast",
      category: "Cosmic Sciences",
      description: "Fascinated by deep space exploration, astrophysical mechanics, stellar orbital dynamics, and planetary exploration missions.",
      icon: "Orbit"
    },
    {
      title: "Personal Coding Projects",
      category: "Software Craft",
      description: "Experimenting with emerging developer tools, frontend libraries, API mashups, and micro-utilities.",
      icon: "Laptop"
    },
    {
      title: "Game Development",
      category: "Interactive Tech",
      description: "Exploring game mechanics, 2D/3D physics engines, asset design, and real-time interaction logic.",
      icon: "Gamepad2"
    },
    {
      title: "Competitive Programming",
      category: "Algorithms",
      description: "Practicing data structures, algorithmic complexity optimization, and problem-solving puzzles in Python and Java.",
      icon: "Cpu"
    },
    {
      title: "Photography & Graphic Design",
      category: "Creative Arts",
      description: "Capturing visual perspectives and crafting digital graphic assets, layouts, and interface sketches.",
      icon: "Camera"
    },
    {
      title: "Fitness & Outdoor Activities",
      category: "Wellness",
      description: "Maintaining mental resilience, focus, and energy through consistent physical training and outdoor exploration.",
      icon: "Activity"
    },
    {
      title: "Public Speaking & Debate",
      category: "Communication",
      description: "Active participation in group discussions, idea pitching, technical defenses, and structured argumentation.",
      icon: "Mic"
    },
    {
      title: "Traveling",
      category: "Exploration",
      description: "Broadening horizons, experiencing diverse cultures, and discovering new viewpoints across different regions.",
      icon: "Compass"
    }
  ]
};
