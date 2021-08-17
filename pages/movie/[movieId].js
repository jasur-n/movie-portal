/* eslint-disable react/prop-types */
import axios from 'axios';
import Layout from '../../components/layout';
import MovieDetails from '../../components/movie-details';

export default function Movie({
  title,
  files,
  description,
  year,
  countries_str: countries,
  genres_str: genres,
  directors,
  scenarists,
  producers,
  actors
}) {
  return (
    <Layout>
      <MovieDetails
        title={title}
        poster={files.poster_url}
        description={description}
        year={year}
        country={countries}
        genre={genres}
        directors={directors}
        scenarists={scenarists}
        producers={producers}
        actors={actors}
        trailers={files.trailers}
      />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.movieId;

  try {
    const res = await axios.get(
      `https://api.itv.uz/api/content/main/2/show/${id}?user=4bb5a3841629114633e611b7590584ec044`
    );
    return {
      props: res.data.data.movie
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
}
