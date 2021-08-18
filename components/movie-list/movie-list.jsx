import PropTypes from 'prop-types';
import MovieItem from './movie-item';
import Pagination from '../pagination/pagination';

export default function MovieList({ title, items }) {
  return (
    <div>
      <div className="relative max-w-7xl mx-auto pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
        {title && (
          <h2 className="text-3xl mb-10 tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
        )}

        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-4">
          {items &&
            items.map((item) => (
              <MovieItem
                key={item.id}
                poster={item.files.poster_url}
                title={item.title}
                year={item.year}
                id={item.id}
              />
            ))}
        </ul>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsNumber={moviesTotalNumber}
        itemsPerPage={moviesPerPage}
      />
    </div>
  );
}

MovieList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string,
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

MovieList.defaultProps = {
  title: ''
};
