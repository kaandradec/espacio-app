/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchRobertsInfo } from "../services/fetchData";
import { Carousel } from "flowbite-react";
import { ImagesCarousel } from "../components/ImagesCarousel";

export default function Roberts() {
  const [photosData, setPhotosData] = useState([]);

  const getData = async () => {
    const data = await fetchRobertsInfo();
    setPhotosData(data.photos);
  };

  useEffect(() => {
    getData();
  }, []);

  const getImages = () => {
    let images = photosData.map((photo) => {
      return photo.img_src;
    });
    return images;
  };

  return (
    <div className=" max-w-sm">
      <ImagesCarousel images={getImages()} />
    </div>
  );
}
