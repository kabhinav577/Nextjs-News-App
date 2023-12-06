'use client';

import { useEffect, useState } from 'react';
import useNewsStore from '../store/zustand';
import NewsList from './NewsList';
import Loader from './Loader';

const News = () => {
  const { news, fetchNews } = useNewsStore();
  const [loading, setLoading] = useState(false);
  // console.log(news);

  useEffect(() => {
    setLoading(true);
    fetchNews();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{loading ? <Loader /> : <NewsList news={news} />}</div>;
};

export default News;
