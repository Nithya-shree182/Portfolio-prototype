import { motion } from "framer-motion";
import BookPage from "../BookPage";
import ChapterHeader from "../ChapterHeader";
import { Award, Users, Heart } from "lucide-react";

const certifications = [
  "IBM Cybersecurity Analyst Professional Certificate — Coursera (IBM), 2024",
];

const leadership = [
  {
    icon: Users,
    title: "Chair, IEEE Computer Society",
    period: "2025 – Present",
    desc: "Led ImpactX'25 hackathon with 35+ teams (140+ participants) and organized technical workshops impacting 100+ students.",
  },
  {
    icon: Award,
    title: "Joint Treasurer, IEEE Student Branch",
    period: "2025 – Present",
    desc: "Managed budgeting and coordinated industry speakers for large-scale events including NextGen Summit 2025.",
  },
  {
    icon: Heart,
    title: "Volunteer, Dazzling Stars",
    period: "Ongoing",
    desc: "Teaching classical music to underprivileged children (ages 6–12).",
  },
];

const CertificationsSection = () => {
  return (
    <BookPage pageNumber={6}>
      <ChapterHeader number="VI" title="Certifications & Leadership" subtitle="Milestones along the way." />

      <div className="mb-12">
        <h3 className="font-serif text-xl text-ink mb-4 italic">Certifications</h3>
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="body-text pl-4 border-l-2 border-gold"
          >
            {cert}
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="font-serif text-xl text-ink mb-6 italic">Leadership & Activities</h3>
        <div className="space-y-8">
          {leadership.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-page-edge flex items-center justify-center">
                <item.icon className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-ink">{item.title}</h4>
                <p className="text-xs tracking-widest uppercase text-gold mb-1 font-sans">{item.period}</p>
                <p className="body-text text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BookPage>
  );
};

export default CertificationsSection;
