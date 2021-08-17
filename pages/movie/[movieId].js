import axios from 'axios';
import Layout from '../../components/layout';
import MovieDetails from '../../components/movie-details';

export default function Movie({ data }) {
  console.log(data.files.trailers);
  return (
    <Layout>
      <MovieDetails
        title={data.title}
        poster={data.files.poster_url}
        description={data.description}
        year={data.year}
        country={data.countries_str}
        genre={data.genres_str}
        directors={data.directors}
        scenarists={data.scenarists}
        producers={data.producers}
        actors={data.actors}
      />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.movieId;
  const res = await axios.get(
    `https://api.itv.uz/api/content/main/2/show/${id}?user=4bb5a3841629114633e611b7590584ec044`
  );

  return {
    props: { data: res.data.data.movie }
  };
}
