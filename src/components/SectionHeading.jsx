import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <motion.p
        className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan"
        initial={{ opacity: 0, letterSpacing: '0.08em' }}
        whileInView={{ opacity: 1, letterSpacing: '0.24em' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {eyebrow}
      </motion.p>
      <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;
