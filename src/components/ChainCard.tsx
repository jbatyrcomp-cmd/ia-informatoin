import React from 'react';
import { motion } from 'framer-motion';

interface ChainCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  direction?: 'up' | 'left' | 'right';
  onClick?: () => void;
}

export const ChainCard: React.FC<ChainCardProps> = ({
  children,
  className = '',
  index = 0,
  direction = 'up',
  onClick,
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -40, scale: 0.96 };
      case 'right':
        return { opacity: 0, x: 40, scale: 0.96 };
      case 'up':
      default:
        return { opacity: 0, y: 40, scale: 0.95 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.55,
          delay: (index % 4) * 0.08,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: false, amount: 0.15 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );
};

