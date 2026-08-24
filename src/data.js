import {
  FaPython, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaJava, FaDocker,
} from "react-icons/fa";
import {
  SiFastapi, SiPostgresql, SiAnsible, SiPrometheus, SiGithubactions,
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiSpringboot,
  SiLangchain,
} from "react-icons/si";

export const listTools = [
  { id: 1, icon: FaPython, nama: "Python", ket: "Language", dad: "100" },
  { id: 2, icon: SiFastapi, nama: "FastAPI", ket: "Backend Framework", dad: "200" },
  { id: 3, icon: FaNodeJs, nama: "Node.js", ket: "Runtime", dad: "300" },
  { id: 4, icon: SiPostgresql, nama: "PostgreSQL", ket: "Database", dad: "400" },
  { id: 5, icon: FaJava, nama: "Java / Spring Boot", ket: "Language & Framework", dad: "500" },
  { id: 6, icon: FaDocker, nama: "Docker", ket: "Containerization", dad: "600" },
  { id: 7, icon: SiAnsible, nama: "Ansible", ket: "Infra Automation", dad: "700" },
  { id: 8, icon: SiPrometheus, nama: "Prometheus", ket: "Monitoring", dad: "800" },
  { id: 9, icon: SiGithubactions, nama: "GitHub Actions", ket: "CI/CD", dad: "900" },
  { id: 10, icon: SiLangchain, nama: "LangChain", ket: "Applied AI / RAG", dad: "1000" },
  { id: 11, icon: FaReact, nama: "React", ket: "Frontend", dad: "1100" },
  { id: 12, icon: SiNextdotjs, nama: "Next.js", ket: "Frontend Framework", dad: "1200" },
  { id: 13, icon: SiTypescript, nama: "TypeScript", ket: "Language", dad: "1300" },
  { id: 14, icon: SiJavascript, nama: "JavaScript", ket: "Language", dad: "1400" },
  { id: 15, icon: SiTailwindcss, nama: "Tailwind CSS", ket: "Styling", dad: "1500" },
  { id: 16, icon: FaGitAlt, nama: "Git", ket: "Version Control", dad: "1600" },
  { id: 17, icon: FaGithub, nama: "GitHub", ket: "Version Control", dad: "1700" },
];

export const listProyek = [
  {
    id: 1,
    title: "DocuMind — AI Document Intelligence",
    subtitle: "RAG-based document Q&A: upload a PDF, ask questions in natural language.",
    fullDescription:
      "A RAG-based document intelligence system built with Python and FastAPI. Upload a PDF, ask questions in natural language, and get context-aware answers using semantic search over sentence embeddings.",
    tags: ["Python", "FastAPI", "RAG", "LangChain", "FAISS"],
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
    title: "SmartFarmX — IoT Precision Agriculture",
    subtitle: "IEEE ICIPCN 2026 published — ESP32-based sensor ingestion & anomaly classification.",
    fullDescription:
      "An IoT precision-agriculture robot on ESP32, published at IEEE ICIPCN 2026. Built the sensor data ingestion and classification layer, reaching roughly 75% anomaly-detection accuracy on field sensor data.",
    tags: ["ESP32", "C++", "IoT", "IEEE Published"],
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/leumaslarotrebor/smartfarmx",
    dad: "300",
  },
  {
    id: 4,
    title: "TaskFlow — Async Job Queue System",
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
      "A backend data engineering project that ingests a dataset, runs automated data quality checks (null detection, duplicate rows), stores audit results in PostgreSQL with timestamps, and exposes REST endpoints via FastAPI to trigger audits and fetch results.",
    tags: ["Python", "pandas", "PostgreSQL", "FastAPI", "SQLAlchemy"],
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "https://github.com/leumaslarotrebor/data-audit-pipeline",
    dad: "500",
  },
  {
    id: 6,
    title: "SamLang",
    subtitle: "A custom programming language built from scratch — lexer, parser, AST, interpreter.",
    fullDescription:
      "A custom programming language built from scratch in Python, with a handwritten lexer, recursive-descent parser, AST, and tree-walking interpreter — built to understand what actually happens between source code and execution.",
    tags: ["Python", "Language Design", "Compilers"],
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://github.com/leumaslarotrebor/samlang",
    dad: "600",
  },
  {
    id: 7,
    title: "DocuChat Pro",
    subtitle: "AI document chat platform — Spring Boot backend, Next.js frontend.",
    fullDescription:
      "A document chat platform with a Java/Spring Boot backend (Dockerized) and a separate Next.js/TypeScript frontend, exploring the same document-intelligence problem as DocuMind with a different, JVM-based stack.",
    tags: ["Java", "Spring Boot", "Docker", "Next.js", "TypeScript"],
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://github.com/leumaslarotrebor/docuchat-pro",
    dad: "700",
  },
  {
    id: 8,
    title: "NovaMark — Digital Marketing Platform",
    subtitle: "Web & Product Development internship assignment — conversion-focused site with ROI calculator.",
    fullDescription:
      "A conversion-focused digital marketing services site built as a Web & Product Development internship assignment for Aprisity Technologies. Single-file, framework-free frontend with a working ROI calculator, pricing tiers, and scroll-driven interactions.",
    tags: ["HTML", "CSS", "JavaScript", "No Framework"],
    borderColor: "#FF4427",
    gradient: "linear-gradient(180deg, #FF4427, #000)",
    url: "https://github.com/leumaslarotrebor/novamark-digital",
    dad: "800",
  },
  {
    id: 9,
    title: "Urban Drifter",
    subtitle: "REST API backend with JWT authentication, built on Node.js and MongoDB.",
    fullDescription:
      "A Node.js/Express REST API backend with MongoDB via Mongoose, featuring JWT-based authentication and password hashing with bcrypt.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    borderColor: "#22C55E",
    gradient: "linear-gradient(145deg, #22C55E, #000)",
    url: "https://github.com/leumaslarotrebor/urban-drifter",
    dad: "900",
  },
  {
    id: 10,
    title: "Vintage Todo App",
    subtitle: "Full-stack todo app with a handcrafted 1960s-themed UI.",
    fullDescription:
      "A full-stack todo application with a Node.js/Express backend, MongoDB for persistent storage, and a handcrafted 1960s-themed frontend UI.",
    tags: ["Node.js", "Express", "MongoDB", "HTML/CSS"],
    borderColor: "#D97706",
    gradient: "linear-gradient(180deg, #D97706, #000)",
    url: "https://github.com/leumaslarotrebor/todo-fullstack-vintage-ui",
    dad: "1000",
  },
  {
    id: 11,
    title: "JPMorgan Chase — Software Engineering Job Simulation",
    subtitle: "Forage virtual experience: REST API → Kafka event stream → H2 SQL ingestion pipeline.",
    fullDescription:
      "Completed the JPMorgan Chase Advanced Software Engineering job simulation on Forage — built a REST API to Kafka event stream to H2 SQL ingestion pipeline and designed microservice boundaries and payload schemas.",
    tags: ["Java", "Kafka", "REST API", "Forage Certified"],
    borderColor: "#7C3AED",
    gradient: "linear-gradient(145deg, #7C3AED, #000)",
    url: "https://github.com/leumaslarotrebor/forage-midas",
    dad: "1100",
  },
];
