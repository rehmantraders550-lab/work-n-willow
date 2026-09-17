import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { motionTokens } from '../../lib/motion';

interface MotionContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionContainer({ children, className = '', delay = 0 }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ 
        duration: motionTokens.slow, 
        delay: delay, 
        ease: motionTokens.ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
