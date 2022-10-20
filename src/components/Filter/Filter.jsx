import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filter-actions';
import { getFilter } from 'redux/filter/filter-selector';
import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.filterLabel}>
      <input
        className={styles.filterInput}
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      ></input>
    </label>
  );
}
