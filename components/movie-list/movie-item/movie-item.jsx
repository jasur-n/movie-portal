import Link from 'next/link';
import PropTypes from 'prop-types';

export default function MovieItem({ poster, title, year, id }) {
  return (
    <li className="relative">
      <Link href={`/movie/${id}`}>
        <div className="group cursor-pointer block w-full aspect-w-5 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          <img
            src={poster}
            alt={title}
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
        </div>
      </Link>
      <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
        {title}
      </p>
      <p className="block text-sm font-medium text-gray-500 pointer-events-none">
        {year}
      </p>
    </li>
  );
}

MovieItem.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
