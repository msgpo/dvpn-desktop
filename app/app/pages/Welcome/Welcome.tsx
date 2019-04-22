import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_TERMS } from '../../app.links'
import trans from '../../../trans'
import Button from '../../../ui-kit/components/Button/Button'

const styles = require('./Welcome.css')

const Welcome = () => (
  <div className={styles.appCover}>
    <div className={styles.appBgPattern} />
    <div className={styles.appContent}>
      <div className={styles.logo} />
      <h1>{trans('app.onboarding.welcome')}</h1>
      <h4>{trans('app.onboarding.subtitle')}</h4>
      <Link to={NAV_TERMS}>
        <Button color="primary">{trans('app.onboarding.get.started.btn')}</Button>
      </Link>
    </div>
  </div>
)

export default Welcome
