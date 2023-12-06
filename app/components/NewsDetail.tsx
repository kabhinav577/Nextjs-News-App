/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface NewsDetailProps {
  news: any;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ news }) => {
  console.log(news);

  if (!news) {
    return <div className="text-gray-200 text-2xl my-4 pl-4">Loading...</div>;
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={news.url} target="_blank" rel="norefferer">
        <img
          className="rounded-t-lg"
          src={!news.urlToImage ? '/images/placeholder.webp' : news.urlToImage}
          alt="article image"
        />
      </a>
      <span className="flex items-center justify-end px-5 my-4 text-gray-500">
        By {news.author ? news.author : 'Unknown'} on{' '}
        {new Date(news.publishedAt).toLocaleTimeString()}
      </span>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {news.title}
        </h5>
        <p className="my-3 font-normal text-gray-300 ">{news.description}</p>
        <p className="mb-4 text-base text-gray-400">{news.content}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more <FaArrowRight size={15} className="pl-1" />
        </a>
      </div>
    </div>
  );
};

export default NewsDetail;
