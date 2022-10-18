import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.filterLabel}>
    <input
      className={styles.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
