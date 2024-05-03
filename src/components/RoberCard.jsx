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
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className="flex flex-col">
        <span>
          <strong>Fecha de aterrisaje: </strong>
          {landingDate}
        </span>
        <span>
          <strong>Fecha de lanzamiento: </strong>
          {launchDate}
        </span>
        <span>
          <strong>Estado: </strong>
          {status}
        </span>
        <span>
          <strong>Fecha máxima: </strong>
          {maxDate}
        </span>
        <span>
          <strong>Total de fotos: </strong>
          {totalPhotos}
        </span>
      </div>
    </Card>
  );
}
