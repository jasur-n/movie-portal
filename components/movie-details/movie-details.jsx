import PropTypes from 'prop-types';

export default function MovieDetails({
  poster,
  title,
  description,
  year,
  country,
  genre,
  directors,
  scenarists,
  producers,
  actors,
  trailers
}) {
  return (
    <>
      <div className="md:flex justify-between">
        <div className="md:w-1/3  mb-10 md:mb-0 w-full md:mr-10">
          <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
            <img src={poster} alt={title} />
          </div>
        </div>

        <div className="md:w-2/3 w-full">
          <div>
            <h3 className="text-3xl leading-6 font-medium text-gray-900">
              {title}
            </h3>
          </div>
          <p className="my-5 max-w-2xl text-sm text-gray-500">{description}</p>
          <div className=" border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Год</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{year}</span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Страна</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{country}</span>
                </dd>
              </div>
              <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Жанр</dt>
                <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <span className="flex-grow">{genre}</span>
                </dd>
              </div>
              {!!directors.length && (
                <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Режиссеры
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">
                      {directors.map((director, index) =>
                        index === directors.length - 1
                          ? `${director.name}.`
                          : `${director.name}, `
                      )}
                    </span>
                  </dd>
                </div>
              )}
              {!!scenarists.length && (
                <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Сценаристы
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">
                      {scenarists.map((scenarist, index) =>
                        index === scenarists.length - 1
                          ? `${scenarist.name}.`
                          : `${scenarist.name}, `
                      )}
                    </span>
                  </dd>
                </div>
              )}
              {!!producers.length && (
                <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Продюссеры
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">
                      {producers.map((producer, index) =>
                        index === producers.length - 1
                          ? `${producer.name}.`
                          : `${producer.name}, `
                      )}
                    </span>
                  </dd>
                </div>
              )}
              {!!actors.length && (
                <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">В ролях</dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">
                      {actors.map((actor, index) =>
                        index === actors.length - 1
                          ? `${actor.name}.`
                          : `${actor.name}, `
                      )}
                    </span>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
      {!!trailers.length && (
        <div>
          <div className="text-xl my-5">Трейлер</div>
          {trailers.map((trailer) => (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              className="w-full rounded-lg"
              controls
              key={trailer.video_url}
            >
              <source src={trailer.video_url} type="video/mp4" />
            </video>
          ))}
        </div>
      )}
    </>
  );
}

MovieDetails.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  directors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  scenarists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  producers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  trailers: PropTypes.arrayOf(
    PropTypes.shape({
      video_url: PropTypes.string
    })
  )
};

MovieDetails.defaultProps = {
  directors: [],
  producers: [],
  scenarists: [],
  actors: [],
  trailers: []
};
