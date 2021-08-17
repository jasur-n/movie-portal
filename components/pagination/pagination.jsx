import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Pagination = ({
  currentPage,
  setCurrentPage,
  itemsNumber,
  itemsPerPage
}) => {
  const maxEl =
    itemsPerPage * currentPage < itemsNumber
      ? itemsPerPage * currentPage
      : itemsNumber;
  const minEl = itemsPerPage * (currentPage - 1) + 1;
  const pagesNumber =
    itemsNumber === itemsPerPage
      ? 1
      : Math.floor(itemsNumber / itemsPerPage) + 1;
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-favorite sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          className="disabled:opacity-50 relative inline-flex items-center px-4 py-2 border border-gray-favorite text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === pagesNumber}
          className="disabled:opacity-50 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-favorite text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex flex-wrap-reverse sm:items-center sm:justify-between">
        <div className="whitespace-nowrap mt-2">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{minEl}</span> to{' '}
            <span className="font-medium">{maxEl}</span> of{' '}
            <span className="font-medium">{itemsNumber}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              className="disabled:opacity-50 relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-favorite bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-favorite text-gray-500 hover:bg-gray-50" */}
            <button
              type="button"
              aria-current="page"
              onClick={() => setCurrentPage(1)}
              className={classnames(
                {
                  'z-10 bg-indigo-50 border-indigo-500 text-indigo-500 ':
                    currentPage === 1
                },
                {
                  'bg-white border-gray-favorite text-gray-500 hover:bg-gray-50':
                    currentPage !== 1
                },
                'relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              )}
            >
              1
            </button>
            {currentPage > 3 && (
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-favorite bg-white text-sm font-medium text-gray-700">
                ...
              </span>
            )}
            {Array(pagesNumber)
              .fill(1)
              .map((el, index) => {
                const pageNum = index + 1;
                const show =
                  pageNum !== 1 &&
                  pageNum !== pagesNumber &&
                  (pageNum === currentPage - 1 ||
                    pageNum === currentPage + 1 ||
                    pageNum === currentPage);

                return (
                  show && (
                    <button
                      key={pageNum}
                      type="button"
                      aria-current="page"
                      onClick={() => setCurrentPage(pageNum)}
                      className={classnames(
                        {
                          'z-10 bg-indigo-50 border-indigo-500 text-indigo-500 ':
                            pageNum === currentPage
                        },
                        {
                          'bg-white border-gray-favorite text-gray-500 hover:bg-gray-50':
                            currentPage !== pageNum
                        },
                        'relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                      )}
                    >
                      {pageNum}
                    </button>
                  )
                );
              })}
            {currentPage < pagesNumber - 2 && (
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-favorite bg-white text-sm font-medium text-gray-700">
                ...
              </span>
            )}
            <button
              type="button"
              aria-current="page"
              onClick={() => setCurrentPage(pagesNumber)}
              className={classnames(
                {
                  'z-10 bg-indigo-50 border-indigo-500 text-indigo-500':
                    currentPage === pagesNumber
                },
                {
                  'bg-white border-gray-favorite text-gray-500 hover:bg-gray-50':
                    currentPage !== pagesNumber
                },
                'relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              )}
            >
              {pagesNumber}
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              disabled={currentPage === pagesNumber}
              className="disabled:opacity-50 relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-favorite bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  itemsNumber: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};

Pagination.defaultProps = {};

export default Pagination;
