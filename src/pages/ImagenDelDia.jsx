/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import ParagraphDropCap from "../components/elements/ParagraphDropCap";
import { fetchPicture } from "../services/fetchData";

export default function ImagenDelDia() {
  const [data, setData] = useState({});

  const fetchPictureNassa = async () => {
    const data = await fetchPicture();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPictureNassa();
  }, []);

  return (
    <div className="h-dvh flex  w-full lg:w-4/6 mx-4 lg:mx-auto gap-20 mt-1 lg:mt-8">
      <section className="w-1/2 ">
        <h1
          className={`
          text-sm md:text-2xl lg:text-5xl text-black/80 dark:text-white/90 
          text-balance font-bold
          lg:leading-tight
          mb-0 md:mb-2
       `}
        >
          Imagen del día
        </h1>
        <div className="h-72 md:h-80 lg:h-full overflow-auto">
          <ParagraphDropCap text={data?.explanation} size="xs" />
        </div>
      </section>
      {data.url && (
        <ImageView url={data?.url} title={data?.title} date={data?.date} />
      )}
    </div>
  );
}

function ImageView({ url, title, date }) {
  return (
    <section className="w-1/2">
      <h1
        className={`
          text-sm md:text-xl lg:text-3xl text-black/80 dark:text-white/90 
          text-balance font-bold mb-2
          lg:leading-tight
        `}
      >
        {title}
      </h1>
      <main className="relative">
        <div
          className={`
            absolute aspect-square p-0 lg:p-4 object-contain
             border-2 rounded-md
              border-black/60 dark:border-white/60
            `}
        >
          <img
            src={url}
            alt="imagen del día"
            className="w-full h-full object-cover"
          />
          <div
            className={`
            absolute bottom-[-1.2em] left-[50%] transform translate-x-[-50%]
            bg-slate-200 dark:bg-gray-900
            p-1 rounded-md border-2 border-black/60 dark:border-white/60
            `}
          >
            <h2
              className={`
            text-xs lg:text-lg text-black/60 dark:text-white/90 
            font-bold 
          `}
            >
              {date}
            </h2>
          </div>
        </div>
      </main>
    </section>
  );
}
