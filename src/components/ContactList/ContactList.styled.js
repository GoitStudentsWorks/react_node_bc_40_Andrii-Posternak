import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ContainerList = styled.div`
  box-sizing: border-box;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  padding: 0 0 0 20px;
  overflow-y: scroll;
  height: 200px;

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 2px;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1976d2;
    border-radius: 5px;

    &:hover {
      background-color: #1565c0;
    }
  }
`;

export const ContactItem = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 40px;
  border-radius: 4px;
  background-color: #1976d2;
  color: #ffffff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 0 20px;
  margin-bottom: 5px;

  &:hover {
    scale: 1.03;
    transition: 250ms;
  }
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

export const Number = styled.a`
  text-decoration: none;
  outline: none;
  color: #ffffff;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(AccountCircleIcon)`
  margin-right: 10px;
`;

export const UpdateBtn = styled(EditIcon)`
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #30f52a;
    scale: 1.1;
  }
`;

export const DeleteBtn = styled(DeleteForeverIcon)`
  cursor: pointer;

  &:hover {
    color: #eb4b5b;
    scale: 1.1;
  }
`;
