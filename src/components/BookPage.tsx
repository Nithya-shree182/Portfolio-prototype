import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BookPageProps {
  children: ReactNode;
  pageNumber?: number;
  className?: string;
  alternate?: boolean;
}

const BookPage = ({ children, pageNumber, className = "", alternate = false }: BookPageProps) => {
  return (
    <section className={`book-page ${alternate ? "bg-parchment" : ""} ${className}`}>
      <div className="page-inner relative">
        {children}
        {pageNumber && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 page-number"
          >
            — {pageNumber} —
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BookPage;
