import React from 'react';
import PropTypes from 'prop-types';

import './Content.css';

function Content({ children }) {
  return <main className="content">{children}</main>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
