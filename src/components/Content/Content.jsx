import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.css';

function Content({ children }) {
<<<<<<< HEAD
  return <main className={styles.basePositionStandart}>{children}</main>;
=======
  return <main className="content">{children}</main>;
>>>>>>> 374447910fbb3593ba986326a9a99bb1393ad46c
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
