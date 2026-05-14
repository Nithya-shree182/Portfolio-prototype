import { motion } from "framer-motion";
import BookPage from "../BookPage";
import ChapterHeader from "../ChapterHeader";

const AboutSection = () => {
  return (
    <BookPage pageNumber={1} alternate>
      <ChapterHeader number="I" title="About Me" />
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="body-text text-lg md:text-xl leading-relaxed"
        >
          I'm a pre-final year Computer Science student specializing in Cyber Security at 
          RNS Institute of Technology, Bengaluru. My journey in tech is driven by a passion for 
          building systems that are not just functional, but <em className="font-serif text-ink">secure by design</em>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-text"
        >
          With hands-on experience in full-stack development, DevSecOps, and AI-driven security systems, 
          I've built scalable applications and automated vulnerability remediation pipelines using 
          container and cloud-native technologies.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="body-text"
        >
          Beyond code, I lead as <span className="text-ink font-medium">Chair of IEEE Computer Society</span>, 
          organizing hackathons and technical workshops, and volunteer teaching classical music to children. 
          I believe the best engineers are also compassionate leaders.
        </motion.p>
      </div>
    </BookPage>
  );
};

export default AboutSection;
