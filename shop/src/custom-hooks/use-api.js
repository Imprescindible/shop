import { useEffect, useState } from 'react';

const useApi = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const getData = () => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading };
};
export default useApi;
