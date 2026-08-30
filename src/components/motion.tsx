"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const staggerParent = (delay = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay, delayChildren: 0.05 },
  },
});

type FadeUpProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

export function FadeUp({ children, delay = 0, ...rest }: FadeUpProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE, delay },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

export function Stagger({ children, delay = 0.1, ...rest }: StaggerProps) {
  return (
    <motion.div
      variants={staggerParent(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function StaggerItem({ children, ...rest }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUp} {...rest}>
      {children}
    </motion.div>
  );
}