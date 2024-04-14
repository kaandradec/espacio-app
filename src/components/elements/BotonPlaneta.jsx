/* eslint-disable react/prop-types */

export default function BotonPlaneta({
  text,
  url,
  keyNumber,
  keyPlanet,
  handleClick,
}) {
  return (
    <div
      className={`
      h-min
      w-12 md:w-16 lg:w-36 mx-auto bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 
      shadow-lg
      hover:shadow-cyan-400/90 transition-all ease-in-out duration-500 
      ${keyNumber === keyPlanet ? "shadow-cyan-400/90" : "shadow-lg"}
    `}
      onClick={handleClick}
    >
      <a href="#">
        <img className="rounded-t-lg" src={url} alt="planeta" />
      </a>
      <a className="cursor-pointer">
        <h5 className="my-0.5 text-center text-xs md:text-sm lg:text-xl tracking-tight text-gray-900 dark:text-white">
          {text}
        </h5>
      </a>
    </div>
  );
}
