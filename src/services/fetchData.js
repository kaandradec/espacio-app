import { API_KEYS } from "../constants/apikeys";
const APOD_KEY = API_KEYS.NASA_APOD;

export const fetchPicture = async () => {
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
