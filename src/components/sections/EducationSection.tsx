import { motion } from "framer-motion";
import BookPage from "../BookPage";
import ChapterHeader from "../ChapterHeader";

const education = [
  {
    institution: "RNS Institute of Technology",
    degree: "BE: CSE (Cyber Security)",
    period: "2023 – 2027",
    score: "CGPA: 9.1 (Current, Pre-Final Year)",
  },
  {
    institution: "Vidya Mandir Independent PU College",
    degree: "PUC: PCMB",
    period: "2021 – 2023",
    score: "93.08%",
  },
  {
    institution: "Nirmala Rani High School",
    degree: "SSLC",
    period: "2021",
    score: "98.08%",
  },
];

const EducationSection = () => {
  return (
    <BookPage pageNumber={2}>
      <ChapterHeader number="II" title="Education" />
      <div className="space-y-10">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-8 border-l border-page-edge"
          >
            <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gold -translate-x-[4.5px]" />
            <p className="text-xs tracking-widest uppercase text-ink-light mb-1 font-sans">{edu.period}</p>
            <h3 className="font-serif text-xl md:text-2xl text-ink mb-1">{edu.institution}</h3>
            <p className="body-text text-sm">{edu.degree}</p>
            <p className="text-sm font-medium text-gold mt-1">{edu.score}</p>
          </motion.div>
        ))}
      </div>
    </BookPage>
  );
};

export default EducationSection;
