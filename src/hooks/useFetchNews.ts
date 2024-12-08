import { useEffect, useState } from 'react';
import { INews } from '../components/LatestNews';
import { NEWS_API, randomDelay } from '../common';
import axios from 'axios';

export default function useFetchNews() {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let ignore = false;
    const fetchNews = async () => {
      try {
        const news = await fetchNewsData();
        if (!ignore) {
          setNews(news);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        if (!ignore) {
          setError(true);
          setLoading(false); // stop loading animation
        }
      }
    };
    fetchNews();
    return () => {
      ignore = true;
    };
  }, []);

  return { news, loading, error };
}

async function fetchNewsData(): Promise<INews[]> {
  await randomDelay();
  const response = await axios.get(NEWS_API);

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
}
