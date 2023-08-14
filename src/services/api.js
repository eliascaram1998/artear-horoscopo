import { axiosInstance } from './apiConfig';

export const getHoroscopes = async () => {
  try {
    const response = await axiosInstance.get('/zodiac_signs');
    return response.data;
  } catch (error) {
    console.error('Error fetching horoscopes:', error);
    return [];
  }
};

export const getHoroscopeByName = async (name) => {
  try {
    const response = await axiosInstance.get('/zodiac_signs', {
      params: {
        name: name
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${name} horoscope:`, error);
    return null;
  }
};

export const getHoroscopesAlphabetically = async () => {
  try {
    const response = await axiosInstance.get('/zodiac_signs', {
      params: {
        _sort: 'name',
        _order: 'asc'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching horoscopes alphabetically:', error);
    return [];
  }
};
