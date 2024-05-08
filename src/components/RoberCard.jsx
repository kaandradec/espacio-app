/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

export function RoberCard({
  imgSrc,
  name,
  landingDate,
  launchDate,
  status,
  maxDate,
  totalPhotos,
}) {
  return (
    <Card className="" imgSrc={imgSrc} horizontal>
      <h5 className="text-lg lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="flex flex-col">
        <TextInfo title="Fecha de aterrizaje: " value={landingDate} />
        <TextInfo title="Fecha de lanzamiento: " value={launchDate} />
        <TextInfo title="Estado: " value={status} />
        <TextInfo title="Fecha máxima: " value={maxDate} />
        <TextInfo title="Total de fotos: " value={totalPhotos} />
      </div>
    </Card>
  );
}

const TextInfo = ({ title, value }) => (
  <span className="text-xs">
    <strong>{title}</strong>
    {value}
  </span>
);
