/* eslint-disable react/prop-types */
export default function ParagraphDropCap({ text }) {
  return (
    <p
      className={`
          text-md lg:text-lg text-black/60 dark:text-white/60 text-pretty mb-2
          first-letter:text-black/80 first-letter:dark:text-white/80 first-letter:text-5xl 
            first-letter:float-start first-letter:me-2 
        `}
    >
      {text}
    </p>
  );
}
