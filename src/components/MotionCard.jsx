import { motion } from 'framer-motion';

function MotionCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`glass glow-border rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.58, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default MotionCard;
