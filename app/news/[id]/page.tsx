'use client';
// pages/news/[id].tsx

import { useParams } from 'next/navigation';
import NewsDetail from '../../components/NewsDetail';
import useNewsStore from '../../store/zustand';

const NewsDetailPage: React.FC = () => {
  const params = useParams();
  console.log(params);

  const { id } = params;
  const { news } = useNewsStore();

  // Fetch the news details using the id parameter
  const newsDetails = news[id];

  return (
    <div className="flex flex-col justify-centerm mx-auto gap-4 my-8 w-[90%]">
      <h1 className="text-white text-2xl ml-2">News Detail Page {id}</h1>
      <NewsDetail news={newsDetails} />
    </div>
  );
};

export default NewsDetailPage;
