import axios from 'axios';
import projectConfig from "projectConfig";

const fetchAddress = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${projectConfig.googleApiKey}`
    );
    const formattedAddress = response.data.results[0];
    return formattedAddress || 'Address not found';
  } catch (error) {
    console.error('Error fetching address:', error);
    throw error;
  }
};

export default fetchAddress;
