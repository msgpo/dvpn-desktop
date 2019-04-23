import * as React from 'react'
import trans from '../../../../../trans'

const styles = require('./ConnectionInfoBlock.scss')

const ConnectionInfoBlock = () => (
  <div className={styles.root}>
    <div className={styles.infoRow}>
      <p>{trans('app.client.external.ip')}</p>
      <p>172.93.13.176</p>
    </div>
    <div className={styles.infoRow}>
      <p>{trans('app.client.server.id')}</p>
      <p>43e7c67a43e7c67a</p>
    </div>
  </div>
)

export default ConnectionInfoBlock
