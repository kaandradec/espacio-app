import { useState } from "react";
import { useEffect } from "react";
import ParagraphDropCap from "../components/elements/ParagraphDropCap";
import { API_KEYS } from "../../apikeys";

export default function ImagenDelDia() {
  const APOD_KEY = API_KEYS.NASA_APOD;
  const [data, setData] = useState({});

  const fetchPicture = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${APOD_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fallo al hacer fectch", error);
      throw error;
    }
  };

  const fetchPictureNassa = async () => {
    const data = await fetchPicture();
    setData(data);
  };

  useEffect(() => {
    fetchPictureNassa();
  }, []);
  return (
    <div className="h-dvh flex justify-between w-4/6 mx-auto gap-40 mt-8">
      <section className="w-1/2 ">
        <h1
          className={`
          text-4xl md:text-6xl lg:text-8xl text-black/60 dark:text-white/90 
          text-balance font-bold
          lg:leading-tight
          mb-8
       `}
        >
          Imagen del día
        </h1>
        <ParagraphDropCap text={data?.explanation} />
      </section>
      <section className="w-1/2">
        <h1
          className={`
          text-lg md:text-xl lg:text-3xl text-black/60 dark:text-white/90 
          text-balance font-bold mb-2
          lg:leading-tight
        `}
        >
          {data?.title}
        </h1>
        <main className="relative">
          <div
            className={`
            absolute aspect-square p-4 object-contain
             border-2 rounded-md
              border-black/60 dark:border-white/60
            `}
          >
            <img
              src={data?.url}
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
            text-md md:text-lg lg:text-xl text-black/60 dark:text-white/90 
            font-bold 
          `}
              >
                {data?.date}
              </h2>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
