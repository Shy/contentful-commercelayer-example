import React from 'react'
import { Link } from 'gatsby'
import * as CLayer from 'commercelayer-react'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/product/">Products</Link>
      </li>
      <li className={styles.navigationItem}>
        <CLayer.Checkout/>
      </li>
    </ul>
  </nav>
)
