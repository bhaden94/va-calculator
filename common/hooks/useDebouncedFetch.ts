import { debounce } from "@mui/material";
import { useEffect,useMemo, useState } from "react";

function useDebouncedFetch<T>(
  url: string,
  searchData: string | undefined,
  delay = 500,
) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFetchData = useMemo(
    () =>
      debounce((searchData: string) => {
        setIsLoading(true);
        fetch(`${url}?query=${searchData}`)
          .then((response) => response.json())
          .then((data: T[]) => setData(data)) // Ensure data is of type T[]
          .finally(() => setIsLoading(false));
      }, delay),
    [url, delay],
  );

  useEffect(() => {
    if (searchData) {
      debouncedFetchData(searchData);
    }

    return () => {
      debouncedFetchData.clear();
    };
  }, [searchData, debouncedFetchData]);

  return { data, isLoading };
}

export default useDebouncedFetch;
