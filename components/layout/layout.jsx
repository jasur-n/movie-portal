import PropTypes from 'prop-types';
import Navbar from '../navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

Layout.defaultProps = {
  children: null
};
