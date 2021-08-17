import MovieItem from './movie-item';

export default function MovieList({ title, items }) {
  return (
    <div className="relative pt-14 pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl mb-10 tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          {title}
        </h2>

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
    </div>
  );
}
