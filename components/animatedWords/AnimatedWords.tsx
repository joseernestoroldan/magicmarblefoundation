"use client"
import { motion } from "framer-motion";
import { staggerChildren, wordAnimation } from "@/utils/animation";

type AnimatedWordsProps = {
    title: string;
  };


export const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title }) => {
    return (
      <motion.span variants={staggerChildren}>
        {title.split(" ").map((word, idx) => (
          <div key={idx} className="inline-block overflow-hidden p-1">
            <motion.span
              className="inline-block overflow-hidden pb-[12px]"
              variants={wordAnimation}
            >
              {word + "\u00A0"}
            </motion.span>
          </div>
        ))}
      </motion.span>
    );
  };