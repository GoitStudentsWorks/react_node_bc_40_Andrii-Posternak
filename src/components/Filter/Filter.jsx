import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { Label, Input } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      <Input
        type="text"
        placeholder="Find contact"
        name="filter"
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </Label>
  );
};
