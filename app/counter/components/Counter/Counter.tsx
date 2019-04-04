import * as React from 'react'
import { Link } from 'react-router-dom'
import { NAV_HOME } from '../../../home/home.navlink'

const styles = require('./Counter.css')

type CounterProps = {
  increment: () => void
  incrementIfOdd: () => void
  incrementAsync: () => void
  decrement: () => void
  counter: number
}

const Counter = (props: CounterProps) => {
  const { increment, incrementIfOdd, incrementAsync, decrement, counter } = props
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={NAV_HOME.path}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {counter}
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.btn} onClick={increment} data-tclass="btn" type="button">
          <i className="fa fa-plus" />
        </button>
        <button className={styles.btn} onClick={decrement} data-tclass="btn" type="button">
          <i className="fa fa-minus" />
        </button>
        <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn" type="button">
          odd
        </button>
        <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn" type="button">
          async
        </button>
      </div>
    </div>
  )
}

export default Counter