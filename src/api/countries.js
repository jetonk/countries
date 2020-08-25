import { useState } from 'react';
import Request from 'utils/Request';

export default () => {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  const getCountriesByRegion = async (region) => {
    try {
      const response = await Request.get(`/region/${region}`);
      setCountries(response.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return [getCountriesByRegion, countries, errorMessage];
};