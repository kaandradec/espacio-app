/* eslint-disable react/prop-types */
export default function ParagraphDropCap({ text }) {
  return (
    <p className="text-xs md:text-sm lg:text-lg text-black/60 dark:text-white/60 text-pretty mb-2">
      {text}
    </p>
  );
}
