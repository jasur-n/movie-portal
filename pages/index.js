import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.itv.uz/api/content/main/2/list?user=4bb5a3841629114633e611b7590584ec044'
      )
      .then((response) => setMovies(response.data.data.movies))
      .catch(() => {
        throw new Error('Something went wrong while fetching movies...');
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Movie Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl mb-4 tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Movies
          </h2>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {movies &&
              movies.map((movie) => (
                <li key={movie.id} className="relative">
                  <div className="group block w-full aspect-w-5 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                    <img
                      src={movie.files.poster_url}
                      alt={movie.title}
                      className="object-cover pointer-events-none group-hover:opacity-75"
                    />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {movie.title}
                      </span>
                    </button>
                  </div>
                  <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                    {movie.title}
                  </p>
                  <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                    {movie.year}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
