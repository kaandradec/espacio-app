/* eslint-disable react/prop-types */
export default function ParagraphDropCap({ text, color, size }) {
  const colorVariants = {
    blue: "text-blue-400 dark:text-blue-300",
    red: "text-red-400 dark:text-red-300",
  };
  const sizeVariants = {
    xs: "text-xs md:text-sm lg:text-md",
    sm: "text-sm md:text-md lg:text-lg",
    md: "text-md lg:text-lg",
    lg: "text-lg",
  };
  return (
    <p
      className={`
           text-xs md:text-sm lg:text-md text-black/60 dark:text-white/60 text-pretty mb-2
          first-letter:text-black/80 first-letter:dark:text-white/80 first-letter:text-5xl 
            first-letter:float-start first-letter:me-2 ${
              colorVariants[color] || ""
            }
            ${sizeVariants[size] || ""}
        `}
    >
      {text}
    </p>
  );
}
