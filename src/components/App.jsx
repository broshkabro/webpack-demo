import React from 'react';
import PropTypes from 'prop-types';

const App = ({ name }) => (
  <div>
    Hello
    {' '}
    { name }
  </div>
);

export default App;

App.propTypes = {
  name: PropTypes.string.isRequired,
};
