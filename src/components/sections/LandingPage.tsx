import { motion } from "framer-motion";
import BookPage from "../BookPage";
import { ChevronDown } from "lucide-react";

const LandingPage = () => {
  return (
    <BookPage className="!min-h-screen">
      <div className="flex flex-col items-center justify-center text-center min-h-[80vh]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="chapter-number mb-6"
        >
          A Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-ink"
        >
          Nithyashree
          <br />
          <span className="italic font-normal text-ink-light">Ramesh</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "5rem" }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-px bg-gold my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="body-text max-w-lg text-center"
        >
          Computer Science · Cyber Security · Full-Stack Development
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-sm text-ink-light mt-3 font-sans tracking-wide"
        >
          Building secure, scalable systems at the intersection of AI & security
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-ink-light" />
          </motion.div>
        </motion.div>
      </div>
    </BookPage>
  );
};

export default LandingPage;
