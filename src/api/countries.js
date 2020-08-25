import { useState } from 'react';
import Request from 'utils/Request';

export default () => {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getCountriesByRegion = async (region) => {
    setLoading(true);
    try {
      const response = await Request.get(`/region/${region}`);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return [getCountriesByRegion, countries, errorMessage, isLoading];
};