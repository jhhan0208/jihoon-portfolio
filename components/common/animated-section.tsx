"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  id?: string;
  trigger?: "inView" | "mount";
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  id,
  trigger = "inView",
}: AnimatedSectionProps) => {
  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  const initialOffset = directionOffset[direction];
  const transition = {
    duration: 0.8,
    delay,
    ease: "easeOut" as const,
  };

  if (trigger === "mount") {
    return (
      <motion.div
        id={id}
        className={className}
        initial={{ opacity: 0, ...initialOffset }}
        animate={{ opacity: 1, x: 0, y: 0, transition }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition,
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};
