/* eslint-disable react/prop-types */
import { Carousel } from "flowbite-react";

export function ImagesCarousel({ images }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images?.map((image, index) => (
          <img key={index} src={image} alt="..." />
        ))}
      </Carousel>
    </div>
  );
}
