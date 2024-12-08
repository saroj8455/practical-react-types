import { useEffect, useState } from 'react';
import { INews } from '../components/LatestNews';

export default function useFetchNews() {
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {}, []);

  return { news };
}
