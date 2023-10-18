import { useState, useCallback, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`${resp.statusText}`);
      }

      const data = await resp.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { fetchData, data, error, loading };
};

export default useFetch;
