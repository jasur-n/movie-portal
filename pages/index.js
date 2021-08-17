import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import MovieList from '../components/movie-list';

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
      <MovieList title="Movies" items={movies} />
    </Layout>
  );
}
