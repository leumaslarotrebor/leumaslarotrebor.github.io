import { useState } from "react";
import { SiOpenai, SiClaude, SiGooglegemini, SiPerplexity } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import "./AITools.css";

const aiTools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: SiOpenai,
    color: "#10A37F",
    description:
      "Used ChatGPT to accelerate SQL queries, Python data analysis, debugging, and transform complex analytical problems into practical solutions.",
  },
  {
    id: "claude",
    name: "Claude",
    icon: SiClaude,
    color: "#D97757",
    description:
      "Used Claude to work through complex datasets, improve analytical workflows, review code, and structure clear technical solutions.",
  },
  {
    id: "gemini",
    name: "Google Gemini",
    icon: SiGooglegemini,
    color: "#4285F4",
    description:
      "Used Gemini for research, data exploration, coding assistance, and generating ideas to improve analytical workflows.",
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    icon: FaMicrosoft,
    color: "#00A4EF",
    description:
      "Used Microsoft Copilot to speed up Excel-based analysis, reporting, documentation, and productivity workflows.",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    icon: SiPerplexity,
    color: "#20808D",
    description:
      "Used Perplexity for research and source discovery, helping turn scattered information into structured insights for projects and analysis.",
  },
];

function AITools() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="ai-tools-wrap">
      {aiTools.map((tool, i) => {
        const Icon = tool.icon;
        const isActive = activeId === tool.id;
        return (
          <div
            key={tool.id}
            className={`ai-tool-tile ${isActive ? "ai-tool-tile--active" : ""}`}
            style={{ "--tool-color": tool.color, "--tile-index": i }}
            onMouseEnter={() => setActiveId(tool.id)}
            onMouseLeave={() => setActiveId(null)}
            onFocus={() => setActiveId(tool.id)}
            onBlur={() => setActiveId(null)}
            onClick={() => setActiveId(isActive ? null : tool.id)}
            tabIndex={0}
            role="button"
            aria-expanded={isActive}
            aria-label={tool.name}
          >
            <div className="ai-tool-icon-shell">
              <Icon size={34} />
            </div>
            <span className="ai-tool-name">{tool.name}</span>

            <div className={`ai-tool-popover ${isActive ? "ai-tool-popover--visible" : ""}`}>
              <p className="ai-tool-popover-title">{tool.name}</p>
              <p className="ai-tool-popover-desc">{tool.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AITools;
