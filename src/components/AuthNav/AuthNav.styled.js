import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ButtonAuth = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  padding: 10px;
  border: 1px solid #34a1eb;
  border-radius: 10px;

  &.active {
    background-color: #34a1eb;
    color: white;
  }

  :hover {
    background-color: #2583c2;
    color: white;
  }
`;
