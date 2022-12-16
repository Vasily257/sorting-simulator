import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.css';

function Content({ children }) {
  return <main className={styles.basePositionStandart}>{children}</main>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
