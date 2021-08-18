import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import MovieList from '../components/movie-list';
import Pagination from '../components/pagination';

export default function Home({
  fetchedMovies,
  moviesNumber,
  moviesPerPage,
  loadedPage
}) {
  const [movies, setMovies] = useState(fetchedMovies);
  const [moviesTotalNumber, setMoviesTotalNumber] = useState(moviesNumber);
  const [currentPage, setCurrentPage] = useState(loadedPage);

  useEffect(() => {
    axios
      .get(
        `https://api.itv.uz/api/content/main/2/list?page=${currentPage}&user=4bb5a3841629114633e611b7590584ec044`
      )
      .then((response) => {
        const { data } = response.data;
        setMovies(data.movies);
        setMoviesTotalNumber(data.total_items);
      })
      .catch(() => {
        throw new Error('Something went wrong while fetching movies...');
      });
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 1) {
      Router.push({
        query: {}
      });
    } else {
      Router.push({
        query: { page: currentPage }
      });
    }
  }, [currentPage]);

  return (
    <Layout>
      <Head>
        <title>Movies</title>
      </Head>
      <MovieList title="Movies" items={movies} />
    </Layout>
  );
}

Home.propTypes = {
  fetchedMovies: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string,
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
    })
  ),
  moviesNumber: PropTypes.number.isRequired,
  moviesPerPage: PropTypes.number.isRequired,
  loadedPage: PropTypes.number.isRequired
};

Home.defaultProps = {
  fetchedMovies: []
};

export async function getServerSideProps(context) {
  const { query } = context;
  const pageNumber = +query.page || 1;
  const res = await axios.get(
    `https://api.itv.uz/api/content/main/2/list?page=${pageNumber}&user=4bb5a3841629114633e611b7590584ec044`
  );
  const { data } = res.data;
  return {
    props: {
      fetchedMovies: data.movies,
      moviesNumber: data.total_items,
      moviesPerPage: data.items_per_page,
      loadedPage: pageNumber
    }
  };
}
