import * as React from 'react'
import injectSheet from 'react-jss'
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core'
import FormHelperTextSpace from '@material-ui/core/Typography'

interface IStyles {
  formControl: string
  bootstrapFormLabel: string
  shrink: string
  bootstrapRoot: string
  bootstrapInput: string
  focused: string
  errorStyle: string
}

const styles = theme => ({
  formControl: {
    marginBottom: 8,
    width: '100%',
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: '0 !important',
      height: 28,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    padding: '4px 12px 5px !important',
    width: '100%',
    color: `${theme.colors.textMain}!important`,
    backgroundColor: theme.colors.whiteColor,
    fontSize: '14px !important',
    boxShadow: 'inset 0 0.5px 1.5px 0 #cccccc, inset 0 0 0.5px 0 #333333',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  bootstrapFormLabel: {
    fontSize: theme.typography.fontSizes.tableHeadFont,
    zIndex: 99,
    top: -4,
    marginLeft: 22,
    fontWeight: 400,
  },
  focused: {
    borderRadius: 4,
    boxShadow:
      '0 0 0 1.5px rgba(145, 78, 128, 0.29), 0 0 0 0.5px #914e80, inset 0 0.5px 1.5px 0 #cccccc, inset 0 0 0.5px 0 #333333',
  },
  errorStyle: {
    color: theme.colors.whiteColor,
  },
})

export interface IAppTextFieldProps {
  error: any
  label: string
  placeholder: string
  value: string
  errorText: string
  shrink: any
  onChange: any
  name: any
  classes: IStyles
  style?: React.CSSProperties
}

const AppTextField: React.SFC<IAppTextFieldProps> = (props: IAppTextFieldProps) => (
  <FormControl className={props.classes.formControl}>
    <InputLabel
      shrink={props.shrink}
      htmlFor={`id-${props.name}`}
      FormLabelClasses={{
        root: props.classes.bootstrapFormLabel,
      }}
    >
      {props.label}
    </InputLabel>
    <Input
      id={`id-${props.name}`}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      classes={{
        root: props.classes.bootstrapRoot,
        input: props.classes.bootstrapInput,
        focused: props.classes.focused,
      }}
      onChange={props.onChange}
      disableUnderline
    />
    {props.error ? (
      <FormHelperText className={props.classes.errorStyle} id={`${props.name}-field`}>
        {props.errorText}
      </FormHelperText>
    ) : (
      <FormHelperTextSpace />
    )}
  </FormControl>
)

export default injectSheet(styles)(AppTextField)
