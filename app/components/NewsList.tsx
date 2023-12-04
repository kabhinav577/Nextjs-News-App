/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import useNewsStore from '../store/zustand';
import { FaHeart, FaArrowRight } from 'react-icons/fa';

interface NewsListProps {
  news: [];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  const { toggleFavorite, isFavorite } = useNewsStore();
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <div className="container mx-auto my-4 md:w-">
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleView}
        >
          {isGridView ? 'List View' : 'Grid View'}
        </button>
      </div>

      <div
        className={`grid gap-8 ${isGridView ? 'grid-cols-1' : 'grid-cols-2'}`}
      >
        {news.map((article: any, i: any) => (
          <div
            key={i}
            className="bg-gray-800 border border-gray-700 flex flex-col gap-2 p-4 rounded-md shadow"
          >
            <div>
              <img
                src={
                  !article.urlToImage
                    ? '/images/placeholder.webp'
                    : article.urlToImage
                }
                width={250}
                height={250}
                alt="Article Image"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl text-neutral-200 font-bold mb-2">
                {article.title}
              </h2>
              <div className="flex items-center justify-between">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more{'  '} <FaArrowRight size={15} className="pl-1" />
                </a>
                <button onClick={() => toggleFavorite(article)}>
                  <FaHeart color={isFavorite(article) ? 'red' : 'gray'} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
