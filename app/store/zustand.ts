// app/stores/newsStore.js
import create, { State, SetState } from 'zustand';

interface NewsItem {
  title: string;
  description: string;
}

interface NewsStoreState extends State {
  news: NewsItem[];
  favorites: NewsItem[];
  fetchNews: () => Promise<void>;
  toggleFavorite: (article: NewsItem) => void;
  isFavorite: (article: NewsItem) => boolean;
}

const useNewsStore = create<NewsStoreState>(
  (set: SetState<NewsStoreState>) => ({
    news: [],
    favorites: [],
    fetchNews: async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok') {
          set({ news: data.articles });
        } else {
          console.error('Failed to fetch news:', data.message);
        }
      } catch (error) {
        console.error('Error fetching news:', (error as Error).message);
      }
    },
    toggleFavorite: (article) => {
      set((state) => {
        const isFavorite = state.favorites.some(
          (fav) => fav.title === article.title
        );

        if (isFavorite) {
          return {
            favorites: state.favorites.filter(
              (fav) => fav.title !== article.title
            ),
          };
        } else {
          return { favorites: [...state.favorites, article] };
        }
      });
    },
    isFavorite: (article) => {
      return useNewsStore
        .getState()
        .favorites.some((fav: any) => fav.title === article.title);
    },
  })
);

export default useNewsStore;
