import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Select,
  OutlinedInput
} from '@material-ui/core';
import StyledLabel from './label.jsx';

const styles = theme => ({
  root: {
    verticalAlign: 'bottom',
    minWidth: '200px',
    marginBottom: '12px'
  }
});

function StyledSelect(props) {
  const {
    classes,
    label,
    id,
    value,
    handleChange,
    fullWidth,
    options
  } = props;

  return (
    <FormControl className={ classes.root } fullWidth={ fullWidth } variant="outlined">
      <StyledLabel label={ label } />
      <Select
        native
        value={ value }
        onChange={ handleChange }
        fullWidth
        input={
          <OutlinedInput
            name="age"
            id={ id }
            labelWidth={ 0 }
          />
        }
      >
        <option value={null}>select</option>
        {
          options ? options.map((option) => {
            return <option value={option.value}>{option.description}</option>
          }) : null
        }
      </Select>
    </FormControl>
  )
}

StyledSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  fullWidth: PropTypes.bool
};

export default withStyles(styles)(StyledSelect);