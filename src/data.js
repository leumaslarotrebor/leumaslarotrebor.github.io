import {
  FaPython, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaJava, FaDocker,
  FaLinux, FaChartLine, FaDatabase, FaShieldAlt, FaFilter, FaSearch,
  FaBrain, FaRobot, FaComments, FaLayerGroup, FaNetworkWired, FaServer,
} from "react-icons/fa";
import {
  SiFastapi, SiPostgresql, SiAnsible, SiPrometheus, SiGithubactions,
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiSpringboot,
  SiLangchain, SiPandas, SiGrafana,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

// Tools & Technologies: reflects resume: Technical Skills section
export const listTools = [
  // Data & Analytics
  { id: 1, icon: FaPython, nama: "Python", ket: "Language", dad: "100" },
  { id: 2, icon: TbSql, nama: "SQL", ket: "Query Language", dad: "150" },
  { id: 3, icon: SiPandas, nama: "Pandas", ket: "Data Analysis", dad: "200" },
  { id: 4, icon: SiPostgresql, nama: "PostgreSQL", ket: "Database", dad: "250" },
  { id: 5, icon: FaChartLine, nama: "Data Analysis", ket: "Data & Analytics", dad: "300" },
  { id: 6, icon: FaDatabase, nama: "Data Modelling", ket: "Data & Analytics", dad: "350" },
  { id: 7, icon: FaShieldAlt, nama: "Data Validation", ket: "Data Quality", dad: "400" },
  { id: 8, icon: FaFilter, nama: "Data Aggregation & Filtering", ket: "Data & Analytics", dad: "450" },
  { id: 9, icon: FaSearch, nama: "Anomaly Detection", ket: "Data Quality & Auditing", dad: "500" },

  // AI & Emerging Technology
  { id: 10, icon: FaBrain, nama: "Generative AI", ket: "AI & Emerging Tech", dad: "550" },
  { id: 11, icon: FaRobot, nama: "LLMs", ket: "AI & Emerging Tech", dad: "600" },
  { id: 12, icon: SiLangchain, nama: "RAG", ket: "Retrieval-Augmented Generation", dad: "650" },
  { id: 13, icon: FaComments, nama: "NLP", ket: "AI & Emerging Tech", dad: "700" },
  { id: 14, icon: FaLayerGroup, nama: "Vector Search", ket: "ChromaDB / FAISS", dad: "750" },
  { id: 15, icon: FaRobot, nama: "Agentic Automation", ket: "AI & Emerging Tech", dad: "800" },

  // Programming & Software Engineering
  { id: 16, icon: FaJava, nama: "Java", ket: "Language", dad: "850" },
  { id: 17, icon: SiFastapi, nama: "FastAPI", ket: "Backend Framework", dad: "900" },
  { id: 18, icon: FaNetworkWired, nama: "REST APIs", ket: "Programming & Software Eng.", dad: "950" },
  { id: 19, icon: SiSpringboot, nama: "Spring Boot", ket: "Framework", dad: "1000" },
  { id: 20, icon: SiJavascript, nama: "JavaScript", ket: "Language", dad: "1050" },
  { id: 21, icon: FaServer, nama: "Backend Architecture", ket: "Programming & Software Eng.", dad: "1100" },

  // Automation & Infrastructure
  { id: 22, icon: FaDocker, nama: "Docker", ket: "Containerization", dad: "1150" },
  { id: 23, icon: FaLinux, nama: "Linux", ket: "Automation & Infra", dad: "1200" },
  { id: 24, icon: SiAnsible, nama: "Ansible", ket: "Infra Automation", dad: "1250" },
  { id: 25, icon: SiGithubactions, nama: "CI/CD", ket: "GitHub Actions", dad: "1300" },
  { id: 26, icon: SiPrometheus, nama: "Prometheus", ket: "Monitoring", dad: "1350" },
  { id: 27, icon: SiGrafana, nama: "Grafana", ket: "Monitoring & Observability", dad: "1400" },
];

// All real public projects
export const listProyek = [
  {
    id: 1,
    title: "DocuMind: AI Document Intelligence",
    subtitle: "RAG-based document Q&A: upload a PDF, ask questions in natural language.",
    fullDescription:
      "Built a retrieval-augmented generation (RAG) system for document intelligence, integrating LLMs with ChromaDB/FAISS vector search to enable semantic querying over unstructured text. Deployed the system as a live application, applying generative AI and NLP techniques to a practical information-retrieval problem.",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "Vector Search"],
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/leumaslarotrebor/documind",
    dad: "100",
  },
  {
    id: 2,
    title: "InfraWatch",
    subtitle: "Linux server health monitoring & auto-remediation agent with Prometheus + Ansible.",
    fullDescription:
      "A lightweight Linux server health monitoring and auto-remediation agent with a Prometheus metrics endpoint, Grafana dashboards, Docker containerization, and Ansible-based deployment automation. Built to demonstrate core SRE practices: observability, infrastructure-as-code, containerization, CI/CD, and incident response.",
    tags: ["Prometheus", "Grafana", "Docker", "Ansible", "CI/CD"],
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/leumaslarotrebor/infrawatch",
    dad: "200",
  },
  {
    id: 3,
    title: "SmartFarmX: IoT Precision Agriculture",
    subtitle: "IEEE ICIPCN 2026 published, ESP32-based sensor ingestion for precision agriculture.",
    fullDescription:
      "Developed the sensor data ingestion layer for an IoT precision-agriculture system collecting real-time soil and environmental data; co-authored research published at IEEE ICIPCN 2026.",
    tags: ["ESP32", "C++", "IoT", "IEEE Published"],
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/leumaslarotrebor/smartfarmx",
    dad: "300",
  },
  {
    id: 4,
    title: "TaskFlow: Async Job Queue System",
    subtitle: "Production-style job queue: reliable retries, backoff, and a live monitoring dashboard.",
    fullDescription:
      "A production-grade job queue system built with Node.js, Express, PostgreSQL, and React. Submits async jobs via a REST API, processes them reliably with automatic retries and exponential backoff, and exposes real-time job status through a web dashboard.",
    tags: ["Node.js", "Express", "PostgreSQL", "React"],
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/leumaslarotrebor/TaskFlow",
    dad: "400",
  },
  {
    id: 5,
    title: "Data Quality Audit Pipeline",
    subtitle: "Automated data quality checks over a dataset, exposed via a FastAPI service.",
    fullDescription:
      "Built a data quality audit pipeline that validates structured datasets and flags anomalies, combining Pandas-based analysis with a FastAPI/PostgreSQL backend for processing and storage. Applied SQL-based aggregation and filtering to surface data inconsistencies, supporting the data validation and data quality checks required in analytics workflows.",
    tags: ["Python", "Pandas", "PostgreSQL", "FastAPI"],
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "https://github.com/leumaslarotrebor/data-audit-pipeline",
    dad: "500",
  },
  {
    id: 6,
    title: "SamLang",
    subtitle: "A custom programming language built from scratch: lexer, parser, AST, interpreter.",
    fullDescription:
      "A custom programming language built from scratch in Python, with a handwritten lexer, recursive-descent parser, AST, and tree-walking interpreter, built to understand what actually happens between source code and execution.",
    tags: ["Python", "Language Design", "Compilers"],
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://github.com/leumaslarotrebor/samlang",
    dad: "600",
  },
  {
    id: 7,
    title: "AgentResolve",
    subtitle: "Agentic automation system orchestrating tool-calling across customer service workflows.",
    fullDescription:
      "Built an agentic automation system that orchestrates tool-calling across ten typed operations (customer, order, refund, and escalation workflows), with guardrails, human-in-the-loop approval, and audit logging. Verified functionality through an evaluation harness and a backend test suite.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "SQLite"],
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://github.com/leumaslarotrebor/agentresolve",
    dad: "700",
  },
  {
    id: 8,
    title: "Research Platform",
    subtitle: "Containerized research publishing platform with Kubernetes deployment and CI/CD.",
    fullDescription:
      "Built and containerized a research publishing platform with a Laravel REST API, MySQL backend, Docker, and Kubernetes, integrating an existing open-source OJS platform. Designed Helm-based Kubernetes deployments and a CI/CD pipeline that builds, tests, deploys, and smoke-tests the application on an ephemeral cluster, with automated monitoring through Prometheus and Grafana.",
    tags: ["PHP", "Laravel", "MySQL", "Docker", "Kubernetes", "Helm"],
    borderColor: "#DC2626",
    gradient: "linear-gradient(145deg, #DC2626, #000)",
    url: "https://github.com/leumaslarotrebor/research-platform",
    dad: "800",
  },
  {
    id: 9,
    title: "DocuChat Pro",
    subtitle: "AI document chat platform: Spring Boot backend, Next.js frontend.",
    fullDescription:
      "A document chat platform with a Java/Spring Boot backend (Dockerized) and a separate Next.js/TypeScript frontend, exploring the same document-intelligence problem as DocuMind with a different, JVM-based stack.",
    tags: ["Java", "Spring Boot", "Docker", "Next.js", "TypeScript"],
    borderColor: "#22D3EE",
    gradient: "linear-gradient(145deg, #22D3EE, #000)",
    url: "https://github.com/leumaslarotrebor/docuchat-pro",
    dad: "900",
  },
  {
    id: 10,
    title: "NovaMark: Digital Marketing Platform",
    subtitle: "Web & Product Development internship assignment, conversion-focused site with ROI calculator.",
    fullDescription:
      "A conversion-focused digital marketing services site built as a Web & Product Development internship assignment for Aprisity Technologies. Single-file, framework-free frontend with a working ROI calculator, pricing tiers, and scroll-driven interactions.",
    tags: ["HTML", "CSS", "JavaScript", "No Framework"],
    borderColor: "#FF4427",
    gradient: "linear-gradient(180deg, #FF4427, #000)",
    url: "https://github.com/leumaslarotrebor/novamark-digital",
    dad: "1000",
  },
  {
    id: 11,
    title: "Urban Drifter",
    subtitle: "REST API backend with JWT authentication, built on Node.js and MongoDB.",
    fullDescription:
      "A Node.js/Express REST API backend with MongoDB via Mongoose, featuring JWT-based authentication and password hashing with bcrypt.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    borderColor: "#22C55E",
    gradient: "linear-gradient(145deg, #22C55E, #000)",
    url: "https://github.com/leumaslarotrebor/urban-drifter",
    dad: "1100",
  },
  {
    id: 12,
    title: "Vintage Todo App",
    subtitle: "Full-stack todo app with a handcrafted 1960s-themed UI.",
    fullDescription:
      "A full-stack todo application with a Node.js/Express backend, MongoDB for persistent storage, and a handcrafted 1960s-themed frontend UI.",
    tags: ["Node.js", "Express", "MongoDB", "HTML/CSS"],
    borderColor: "#D97706",
    gradient: "linear-gradient(180deg, #D97706, #000)",
    url: "https://github.com/leumaslarotrebor/todo-fullstack-vintage-ui",
    dad: "1200",
  },
  {
    id: 13,
    title: "JPMorgan Chase: Software Engineering Job Simulation",
    subtitle: "Forage virtual experience: REST API → Kafka event stream → H2 SQL ingestion pipeline.",
    fullDescription:
      "Completed the JPMorgan Chase Advanced Software Engineering job simulation on Forage, building a REST API to Kafka event stream to H2 SQL ingestion pipeline and designed microservice boundaries and payload schemas.",
    tags: ["Java", "Kafka", "REST API", "Forage Certified"],
    borderColor: "#7C3AED",
    gradient: "linear-gradient(145deg, #7C3AED, #000)",
    url: "https://github.com/leumaslarotrebor/forage-midas",
    dad: "1300",
  },
];
