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

// Tools & Technologies — reflects resume: Technical Skills section
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

// Selected Projects — matches resume "SELECTED PROJECTS" exactly
export const listProyek = [
  {
    id: 1,
    title: "Data Audit Pipeline",
    subtitle: "Data quality audit pipeline validating structured datasets and flagging anomalies.",
    fullDescription:
      "Built a data quality audit pipeline that validates structured datasets and flags anomalies, combining Pandas-based analysis with a FastAPI/PostgreSQL backend for processing and storage. Applied SQL-based aggregation and filtering to surface data inconsistencies, supporting the data validation and data quality checks required in analytics workflows.",
    tags: ["Python", "Pandas", "FastAPI", "PostgreSQL"],
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "https://github.com/leumaslarotrebor/data-audit-pipeline",
    dad: "100",
  },
  {
    id: 2,
    title: "DocuMind",
    subtitle: "RAG-based document intelligence system with semantic search over unstructured text.",
    fullDescription:
      "Built a retrieval-augmented generation (RAG) system for document intelligence, integrating LLMs with ChromaDB/FAISS vector search to enable semantic querying over unstructured text. Deployed the system as a live application, applying generative AI and NLP techniques to a practical information-retrieval problem.",
    tags: ["Python", "FastAPI", "LangChain", "LLMs", "RAG", "Vector Search"],
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://github.com/leumaslarotrebor/documind",
    dad: "200",
  },
  {
    id: 3,
    title: "AgentResolve",
    subtitle: "Agentic automation system orchestrating tool-calling across customer service workflows.",
    fullDescription:
      "Built an agentic automation system that orchestrates tool-calling across ten typed operations (customer, order, refund, and escalation workflows), with guardrails, human-in-the-loop approval, and audit logging. Verified functionality through an evaluation harness and a backend test suite, applying a structured, analytical approach to automation and problem-solving.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "SQLite"],
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://github.com/leumaslarotrebor/agentresolve",
    dad: "300",
  },
  {
    id: 4,
    title: "Research Platform",
    subtitle: "Containerized research publishing platform with Kubernetes deployment and CI/CD.",
    fullDescription:
      "Built and containerized a research publishing platform with a Laravel REST API, MySQL backend, Docker, and Kubernetes, integrating an existing open-source OJS platform through custom infrastructure and application components. Designed Helm-based Kubernetes deployments and a CI/CD pipeline that builds, tests, deploys, and smoke-tests the application on an ephemeral cluster, with automated monitoring through Prometheus and Grafana.",
    tags: ["PHP", "Laravel", "MySQL", "Docker", "Kubernetes", "Helm", "CI/CD"],
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/leumaslarotrebor/research-platform",
    dad: "400",
  },
  {
    id: 5,
    title: "SmartFarmX — IoT Precision Agriculture",
    subtitle: "IEEE ICIPCN 2026 published — ESP32-based sensor ingestion for precision agriculture.",
    fullDescription:
      "Developed the sensor data ingestion layer for an IoT precision-agriculture system collecting real-time soil and environmental data; co-authored research published at IEEE ICIPCN 2026.",
    tags: ["ESP32", "C++", "IoT", "IEEE Published"],
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/leumaslarotrebor/smartfarmx",
    dad: "500",
  },
];
