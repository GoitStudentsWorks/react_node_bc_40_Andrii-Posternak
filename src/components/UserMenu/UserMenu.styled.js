import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Loguot = styled(LogoutIcon)`
  cursor: pointer;

  :hover {
    color: #eb4b5b;
  }
`;
