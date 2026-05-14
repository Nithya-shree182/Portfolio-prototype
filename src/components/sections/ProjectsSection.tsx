import { motion } from "framer-motion";
import BookPage from "../BookPage";
import ChapterHeader from "../ChapterHeader";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enhancing Product Security Using Generative AI",
    tech: "Trivy, ChromaDB, RAG, KubeScore, Kubescape, Kyverno, Docker",
    bullets: [
      "Built an end-to-end DevSecOps pipeline scanning Docker images and Kubernetes manifests using Trivy, KubeScore, Kubescape, and Kyverno, with findings stored in ChromaDB for RAG-based LLM remediation.",
      "Implemented iterative self-healing: each LLM-generated fix is rebuilt and rescanned until critical CVEs are resolved, reducing high/critical vulnerabilities from 15+ to < 3 per image.",
      "Awarded Best Implemented Industry Project at Nokia University Day 2025, selected from 30+ competing teams.",
    ],
    highlight: "🏆 Nokia University Day 2025 — Best Project",
  },
  {
    title: "Personalized Fitness Recommendation Platform",
    tech: "MERN Stack, REST APIs",
    bullets: [
      "Developing a full-stack fitness application using the MERN stack to track workouts and nutrition.",
      "Implementing personalized recommendation logic for workout plans and meal suggestions based on user preferences.",
      "Designing RESTful APIs and backend services with JWT authentication and real-time analytics dashboard.",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <BookPage pageNumber={4}>
      <ChapterHeader number="IV" title="Projects" subtitle="Stories told through code." />
      <div className="space-y-14">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative"
          >
            {project.highlight && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-block px-3 py-1 text-xs font-sans tracking-wide bg-gold/10 text-gold border border-gold/20 rounded-sm mb-4"
              >
                {project.highlight}
              </motion.div>
            )}
            <h3 className="font-serif text-2xl md:text-3xl text-ink mb-2">{project.title}</h3>
            <p className="text-xs tracking-widest uppercase text-ink-light mb-4 font-sans">{project.tech}</p>
            <ul className="space-y-3">
              {project.bullets.map((bullet, j) => (
                <li key={j} className="body-text text-sm pl-4 border-l-2 border-page-edge">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </BookPage>
  );
};

export default ProjectsSection;
