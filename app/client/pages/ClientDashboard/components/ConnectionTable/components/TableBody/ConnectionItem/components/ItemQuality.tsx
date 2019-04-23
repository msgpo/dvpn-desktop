import * as React from 'react'
import injectSheet from 'react-jss'
import Quality from '../../../../../../../../../ui-kit/components/QualityIcon/QualityIcon'
import StartIcon from '../../../../../../../../../ui-kit/components/StartIcon/StartIcon'

interface IStyles {
  ipItem: string
}

const styles = theme => ({
  ipItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > div:first-child': {
      marginRight: 10,
    },
  },
})

export interface IItemProps {
  classes: IStyles
  style?: React.CSSProperties
}

const ItemQuality: React.SFC<IItemProps> = (props: IItemProps) => (
  <td>
    <div className={props.classes.ipItem}>
      <Quality />
      <StartIcon />
    </div>
  </td>
)

export default injectSheet(styles)(ItemQuality)
