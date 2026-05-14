import { motion } from "framer-motion";
import BookPage from "../BookPage";
import ChapterHeader from "../ChapterHeader";

const skillCategories = [
  { label: "Languages", items: ["Python", "Java", "C", "SQL", "JavaScript"] },
  { label: "AI / ML", items: ["LLMs", "RAG", "LangChain", "Ollama", "Agentic AI", "scikit-learn", "Prompt Engineering"] },
  { label: "Cybersecurity", items: ["Container Security", "SBOM", "CVE Analysis", "Vulnerability Triage", "SaaS Security"] },
  { label: "DevOps & Backend", items: ["Docker", "Kubernetes", "Flask", "Node.js", "PostgreSQL", "MongoDB", "Git", "Linux"] },
  { label: "Practices", items: ["Agile", "CI/CD", "SDLC"] },
];

const SkillsSection = () => {
  return (
    <BookPage pageNumber={3} alternate>
      <ChapterHeader number="III" title="Skills" subtitle="A curated toolkit, refined through practice." />
      <div className="space-y-10">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="font-serif text-lg text-ink mb-3 italic">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, j) => (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + j * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="px-3 py-1.5 text-sm font-sans border border-page-edge text-ink-light rounded-sm
                    hover:border-gold hover:text-ink transition-colors duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </BookPage>
  );
};

export default SkillsSection;
