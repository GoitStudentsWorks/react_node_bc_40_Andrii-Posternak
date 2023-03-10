import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonAuth = styled(NavLink)`
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 10px;

  &.active {
    outline: 1px solid #ffffff;
  }

  :hover,
  :focus {
    outline: 1px solid #ffffff;
  }
`;
