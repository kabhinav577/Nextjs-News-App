'use client';

import { useEffect, useState } from 'react';
import useNewsStore from '../store/zustand';
import NewsList from './NewsList';

const News = () => {
  const { news, fetchNews } = useNewsStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default News;
