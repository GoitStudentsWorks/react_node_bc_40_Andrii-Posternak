import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { InputAdornment, Input } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Label } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      <Input
        id="input-with-icon-adornment"
        placeholder="Find contact"
        onChange={event => dispatch(changeFilter(event.target.value))}
        startAdornment={
          <InputAdornment position="start">
            <PersonSearchIcon aria-label="search" />
          </InputAdornment>
        }
      />
    </Label>
  );
};
