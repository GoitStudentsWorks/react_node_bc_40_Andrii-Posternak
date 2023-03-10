import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Loguot = styled(LogoutIcon)`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;

  :hover {
    outline: 1px solid #ffffff;
  }
`;
