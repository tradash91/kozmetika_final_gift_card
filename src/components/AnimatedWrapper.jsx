import * as motion from "motion/react-client";

function AnimatedWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // kezdő állapot
      animate={{ opacity: 1 }} // célállapot
      transition={{ duration: 1.5 }} // 1s alatt fade in
    >
      {children}
    </motion.div>
  );
}

export default AnimatedWrapper;
