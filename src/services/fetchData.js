import { API_KEYS } from "../constants/apikeys";
const NASA_KEY = API_KEYS.NASA;

export const fetchPicture = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
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

export const fetchRobertsInfo = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${NASA_KEY}`
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
