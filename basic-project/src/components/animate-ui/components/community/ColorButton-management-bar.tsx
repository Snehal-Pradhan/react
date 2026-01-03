import { motion, type Variants, type Transition } from "motion/react";

/* ---------------- Motion Config ---------------- */

const LABEL_VARIANTS: Variants = {
  rest: { opacity: 0, x: 4 },
  hover: { opacity: 1, x: 0, visibility: "visible" },
  tap: { opacity: 1, x: 0, visibility: "visible" },
};

const LABEL_TRANSITION: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

const BUTTON_MOTION_CONFIG = {
  initial: "rest",
  whileHover: "hover",
  whileTap: "tap",
  variants: {
    rest: { maxWidth: "40px" },
    hover: {
      maxWidth: "140px",
      transition: { type: "spring", stiffness: 200, damping: 35, delay: 0.15 },
    },
    tap: { scale: 0.95 },
  },
  transition: { type: "spring", stiffness: 250, damping: 25 },
} as const;

/* ---------------- Colors ---------------- */

export type ButtonColor =
  | "green"
  | "blue"
  | "red"
  | "yellow"
  | "purple"
  | "pink"
  | "indigo"
  | "teal"
  | "orange"
  | "gray";

const COLOR_CLASSES: Record<ButtonColor, string> = {
  green:
    "bg-green-200/60 text-green-600 dark:bg-green-800/80 dark:text-green-300",
  blue: "bg-blue-200/60 text-blue-600 dark:bg-blue-800/80 dark:text-blue-300",
  red: "bg-red-200/60 text-red-600 dark:bg-red-800/80 dark:text-red-300",
  yellow:
    "bg-yellow-200/60 text-yellow-600 dark:bg-yellow-800/80 dark:text-yellow-300",
  purple:
    "bg-purple-200/60 text-purple-600 dark:bg-purple-800/80 dark:text-purple-300",
  pink: "bg-pink-200/60 text-pink-600 dark:bg-pink-800/80 dark:text-pink-300",
  indigo:
    "bg-indigo-200/60 text-indigo-600 dark:bg-indigo-800/80 dark:text-indigo-300",
  teal: "bg-teal-200/60 text-teal-600 dark:bg-teal-800/80 dark:text-teal-300",
  orange:
    "bg-orange-200/60 text-orange-600 dark:bg-orange-800/80 dark:text-orange-300",
  gray: "bg-gray-200/60 text-gray-600 dark:bg-gray-800/80 dark:text-gray-300",
};

const BODY_BG_CLASSES: Record<ButtonColor, string> = {
  green: "bg-green-100",
  blue: "bg-blue-100",
  red: "bg-red-100",
  yellow: "bg-yellow-100",
  purple: "bg-purple-100",
  pink: "bg-pink-100",
  indigo: "bg-indigo-100",
  teal: "bg-teal-100",
  orange: "bg-orange-100",
  gray: "bg-gray-100",
};

interface ColorButtonManagementBarProps {
  buttonColor?: ButtonColor;
  label?: string;
}

export default function ColorButtonManagementBar({
  buttonColor = "green",
  label = "Hire",
}: ColorButtonManagementBarProps) {
  const handleClick = () => {
    document.body.classList.remove(...Object.values(BODY_BG_CLASSES));
    document.body.classList.add(BODY_BG_CLASSES[buttonColor]);
  };

  return (
    <motion.button
      {...BUTTON_MOTION_CONFIG}
      onClick={handleClick}
      className={`flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg px-2.5 py-2 ${COLOR_CLASSES[buttonColor]}`}
      aria-label={label}
    >
      <motion.span
        variants={LABEL_VARIANTS}
        transition={LABEL_TRANSITION}
        className="invisible text-sm"
      >
        {label}
      </motion.span>
    </motion.button>
  );
}
