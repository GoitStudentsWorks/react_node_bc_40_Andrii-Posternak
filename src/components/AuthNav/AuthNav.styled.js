import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ButtonAuth = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  color: inherit;
  padding: 10px;
  border: none;
  border-radius: 10px;

  &.active {
    outline: 1px solid white;
  }

  :hover {
    outline: 1px solid white;
  }
`;
