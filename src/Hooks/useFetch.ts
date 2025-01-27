import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

export const useFetch = <T>(url: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url, config);
        setData(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch(error:any) {
        setError(error.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, config]);

  return { data, loading, error };
};
