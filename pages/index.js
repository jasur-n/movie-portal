import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import MovieList from '../components/movie-list';
import Pagination from '../components/pagination';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [moviesTotalNumber, setMoviesTotalNumber] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.itv.uz/api/content/main/2/list?page=${currentPage}&user=4bb5a3841629114633e611b7590584ec044`
      )
      .then((response) => {
        const { data } = response.data;
        setMovies(data.movies);
        setMoviesTotalNumber(data.total_items);
        setItemsPerPage(data.items_per_page);
      })
      .catch(() => {
        throw new Error('Something went wrong while fetching movies...');
      });
  }, [currentPage]);

  return (
    <Layout>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MovieList title="Movies" items={movies} />
      {moviesTotalNumber && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsNumber={moviesTotalNumber}
          itemsPerPage={itemsPerPage}
        />
      )}
    </Layout>
  );
}
