import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

export const BrowserInput = function BrowserInput(props) {
  const { inputProps, InputProps, ownerState, inputRef, error, ...other } =
    props;
  return (
    <div>
      <Box ref={InputProps?.ref}>
        <input ref={inputRef} {...inputProps} {...other} />
        {InputProps?.endAdornment}
      </Box>
    </div>
  );
};

BrowserInput.propTypes = {
  error: PropTypes.bool,
  inputProps: PropTypes.object,
  InputProps: PropTypes.object,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
  ownerState: PropTypes.any,
};
