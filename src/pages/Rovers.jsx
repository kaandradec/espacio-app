/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchRobertsInfo } from "../services/fetchData";
import { ImagesCarousel } from "../components/ImagesCarousel";
import { RoversTabs } from "../components/RoversTabs";
import { RoverPagination } from "../components/RoverPagination";

export default function Roberts() {
  const [photosData, setPhotosData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [roverInfo, setRoverInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  const getData = async () => {
    let roverName = "spirit";
    if (activeTab === 0) roverName = "curiosity";
    if (activeTab === 1) roverName = "opportunity";
    if (activeTab === 2) roverName = "spirit";
    const data = await fetchRobertsInfo(roverName, pageNumber);
    setPhotosData(data.photos);
    setRoverInfo(data.photos[0].rover);
  };

  const getImages = () => {
    let images = photosData.map((photo) => {
      return photo.img_src;
    });
    return images;
  };

  useEffect(() => {
    getData();
  }, [activeTab, pageNumber]);

  return (
    <main className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 my-2 md:my-8 p-4">
      <section>
        <RoversTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          roberInfo={roverInfo}
        />
      </section>
      <div className=" max-w-4xl">
        <ImagesCarousel images={getImages()} />
        <RoverPagination setPageNumber={setPageNumber} />
      </div>
    </main>
  );
}
