import { motion } from "framer-motion";
import BookPage from "../BookPage";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <BookPage pageNumber={7} alternate>
      <div className="flex flex-col items-center text-center min-h-[60vh] justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="chapter-number mb-4"
        >
          Epilogue
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="chapter-title mb-4"
        >
          Let's Write the
          <br />
          <span className="italic">Next Chapter</span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gold mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="body-text max-w-md mb-10"
        >
          I'm always open to meaningful conversations — whether it's about technology, 
          collaboration, or new opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a
            href="mailto:nithyashreeiyer182005@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 border border-page-edge rounded-sm
              font-sans text-sm tracking-wide text-ink-light
              hover:border-gold hover:text-ink transition-all duration-300"
          >
            <Mail className="w-4 h-4 group-hover:text-gold transition-colors" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/nithyashree-ramesh-13a7a5281/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-page-edge rounded-sm
              font-sans text-sm tracking-wide text-ink-light
              hover:border-gold hover:text-ink transition-all duration-300"
          >
            <Linkedin className="w-4 h-4 group-hover:text-gold transition-colors" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Nithya-shree182"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 border border-page-edge rounded-sm
              font-sans text-sm tracking-wide text-ink-light
              hover:border-gold hover:text-ink transition-all duration-300"
          >
            <Github className="w-4 h-4 group-hover:text-gold transition-colors" />
            GitHub
          </a>
        </motion.div>

        <motion.a
          href="/Nithyashree_Resume.pdf"
          download
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          whileHover={{ y: -2 }}
          className="group inline-flex items-center gap-2 px-8 py-3 bg-ink text-primary-foreground
            font-sans text-sm tracking-widest uppercase rounded-sm
            hover:bg-ink/90 transition-all duration-300"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-xs text-ink-light font-sans tracking-wide"
        >
          Designed with care · Nithyashree Ramesh © {new Date().getFullYear()}
        </motion.p>
      </div>
    </BookPage>
  );
};

export default ContactSection;
