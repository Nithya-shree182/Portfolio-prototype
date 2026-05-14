import { motion } from "framer-motion";
import BookPage from "../BookPage";
import ChapterHeader from "../ChapterHeader";

const experiences = [
  {
    role: "Software Testing Intern",
    company: "Leistung Technologies (FireDesk NextGen)",
    location: "Bengaluru, IN",
    period: "Nov 2025 – Dec 2025",
    bullets: [
      "Designed and automated 40+ end-to-end test workflows for the NextGen FireDesk MVP using Cypress, achieving 95%+ coverage across core user flows.",
      "Built a real-time bug reporting pipeline to Google Sheets with automated screenshot capture on failure, eliminating manual QA updates.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "RNS Institute of Technology",
    location: "Institutionally Funded",
    period: "Apr 2024 – Present",
    bullets: [
      "Built an ML pipeline for non-invasive migraine detection using wearable biomarkers (HRV, cortisol proxies, sleep cycles) across 3 sensor modalities.",
      "Trained SVM and CNN classifiers with feature engineering, achieving 82%+ classification accuracy on held-out data.",
      "Secured institutional grant funding under the Undergraduate Research Forum (URF).",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <BookPage pageNumber={5} alternate>
      <ChapterHeader number="V" title="Experience" subtitle="Chapters of professional growth." />
      <div className="space-y-14">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
              <div>
                <h3 className="font-serif text-2xl text-ink">{exp.role}</h3>
                <p className="body-text text-sm mt-1">
                  {exp.company} <span className="text-ink-light">· {exp.location}</span>
                </p>
              </div>
              <p className="text-xs tracking-widest uppercase text-gold mt-1 md:mt-0 font-sans">{exp.period}</p>
            </div>
            <ul className="space-y-3 mt-4">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="body-text text-sm pl-4 border-l-2 border-page-edge">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </BookPage>
  );
};

export default ExperienceSection;
