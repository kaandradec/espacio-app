/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchRobertsInfo } from "../services/fetchData";
import { ImagesCarousel } from "../components/ImagesCarousel";
import { RobertsTabs } from "../components/RobertsTabs";

export default function Roberts() {
  const [photosData, setPhotosData] = useState([]);

  const getData = async () => {
    const data = await fetchRobertsInfo();
    setPhotosData(data.photos);
  };

  const getImages = () => {
    let images = photosData.map((photo) => {
      return photo.img_src;
    });
    return images;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Seleccione el robert</h1>
      <RobertsTabs />
      <div className=" max-w-4xl">
        <ImagesCarousel images={getImages()} />
      </div>
    </>
  );
}
